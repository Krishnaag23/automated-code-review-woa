import {
  GSDataSource,
  GSContext,
  PlainObject,
  logger,
} from '@godspeedsystems/core';
import { ESLint, Linter } from 'eslint';
import { Octokit } from '@octokit/rest';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as parser from '@babel/parser';
import { Node } from '@babel/types';
import traverse from '@babel/traverse';
import type { File } from '@babel/types';
import { parsePatch } from 'diff';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

type SecurityPattern = {
  pattern: RegExp;
  message: string;
};

interface CodeAnalysisResult {
  filename?: string;
  staticAnalysis: ESLintIssue[];
  codeSmells: CodeSmell[];
  aiSuggestions: string[];
  complexity: number;
  securityIssues: SecurityIssue[];
  parseErrors?: ParseError[];
}

interface ParseError {
  message: string;
  line?: number;
  column?: number;
  severity: 'error' | 'warning';
}

interface ESLintIssue {
  ruleId: string | null;
  message: string;
  line: number;
  column: number;
  severity: 'error' | 'warning';
}

interface CodeSmell {
  ruleId: string;
  message: string;
  line?: number;
  severity: 'error' | 'warning';
}

interface SecurityIssue {
  message: string;
  pattern: string;
}

export default class CodeReviewPlugin extends GSDataSource {
  private geminiAI: GoogleGenerativeAI;
  private octokit: Octokit;
  private model: any;
  private eslint: ESLint;
  private llmProvider: any;

  constructor(config: PlainObject) {
    super(config);
    this.octokit = new Octokit();
    this.geminiAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    this.eslint = this.createESLintInstance();
    this.initClient();
  }
  private createESLintInstance(): ESLint {
    const baseConfig: Linter.Config = {
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'sonarjs/cognitive-complexity': ['error', 5],
        'sonarjs/no-identical-functions': 'error',
        complexity: ['error', 5],
        'no-console': 'warn',
      },
    };

    const options: ESLint.Options = {
      baseConfig,
      overrideConfigFile: 'eslint.config.mjs',
      fix: true,
    };

    return new ESLint(options);
  }
  async initKeys(github_token: string, llm_api_key: string) {
    if (!github_token) {
      throw new Error('GitHub token is required for repository access.');
    }
    this.octokit = new Octokit({ auth: github_token });

    if (!llm_api_key) {
      throw new Error('LLM API key is required for code review analysis.');
    }

    this.initLLMProvider(llm_api_key);
  }
  private initLLMProvider(apiKey: string) {
    if (apiKey.startsWith('AI')) {
      this.llmProvider = new GoogleGenerativeAI(apiKey);
      this.model = this.llmProvider.getGenerativeModel({
        model: 'gemini-2.0-flash',
      });
    } else if (apiKey.startsWith('sw-')) {
      const { Configuration, OpenAIApi } = require('openai');
      const configuration = new Configuration({ apiKey });
      this.llmProvider = new OpenAIApi(configuration);
      this.model = this.llmProvider.createChatCompletion;
    } else {
      throw new Error(
        'Unsupported LLM provider. Please provide a valid API key.',
      );
    }
  }

  async initClient(): Promise<PlainObject> {
    const result: PlainObject = {
      geminiAIInitialized: false,
      githubClientInitialized: false,
    };

    // try {
    //   const geminiKey = process.env.GEMINI_API_KEY;
    //   if (geminiKey) {
    //     this.geminiAI = new GoogleGenerativeAI(geminiKey);
    //     this.model = this.geminiAI.getGenerativeModel({ model: 'gemini-pro' });
    //     result.geminiAIInitialized = true;
    //   }
    // } catch (error) {
    //   logger.warn('Failed to initialize Gemini AI:', error);
    // }

    // try {
    //   const githubToken = process.env.GITHUB_TOKEN;
    //   if (githubToken) {
    //     this.octokit = new Octokit({ auth: githubToken });
    //     result.githubClientInitialized = true;
    //   }
    // } catch (error) {
    //   logger.warn('Failed to initialize GitHub client:', error);
    // }

    return result;
  }
  private async parseCodeContent(
    content: string,
    language: string,
  ): Promise<string> {
    // Handle different types of content (regular code or diff)
    if (content.startsWith('diff') || content.includes('@@')) {
      logger.info('Parsing diff content');
      const patches = parsePatch(content);

      return patches
        .map((patch: any) =>
          patch.hunks
            .map((hunk: any) =>
              hunk.lines
                .filter((line: any) => !line.startsWith('-'))
                .map((line: any) =>
                  line.startsWith('+') ? line.slice(1) : line,
                )
                .join('\n'),
            )
            .join('\n'),
        )
        .join('\n');
    }
    logger.info('Parsing regular code content');
    return content;
  }

  private parseCode(code: string, language: string): parser.ParseResult<File> {
    const commonPlugins: parser.ParserPlugin[] = [
      'jsx',
      'asyncGenerators',
      'classProperties',
      'dynamicImport',
      'objectRestSpread',
    ];

    const tsPlugins: parser.ParserPlugin[] = [
      'typescript',
      ['decorators', { decoratorsBeforeExport: true }],
    ];

    const plugins =
      language.toLowerCase() === 'typescript'
        ? [...commonPlugins, ...tsPlugins]
        : commonPlugins;

    try {
      const parseCodeContent = parser.parse(code, {
        sourceType: 'module',
        plugins,
        tokens: true,
        attachComment: true,
        errorRecovery: true,
        startLine: 10,
      });

      // console.log('parseCodeContent', parseCodeContent);
      return parseCodeContent;
    } catch (error) {
      logger.error('Parsing failed:', error);
      // console.log('Parsing failed:', error);
      // console.log('code', code);
      return {
        type: 'File',
        program: {
          type: 'Program',
          body: [],
          directives: [],
          sourceType: 'module',
        },
        comments: [],
        tokens: [],
        errors: [error as parser.ParseError],
      };
    }
  }

  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
    const { action, payload } = args;

    switch (action) {
      case 'analyze_pr':
        return this.analyzePullRequest(payload);
      case 'review_code':
        return this.reviewCode(payload);
      case 'static_analysis':
        return this.runFullStaticAnalysis(payload);
      default:
        throw new Error(`Invalid action specified: ${action}`);
    }
  }

  private async analyzePullRequest(payload: {
    owner: string;
    repo: string;
    pull_number: number;
  }): Promise<{ success: boolean; data?: any; error?: string }> {
    const { owner, repo, pull_number } = payload;

    try {
      const { data: files } = await this.octokit.pulls.listFiles({
        owner,
        repo,
        pull_number,
      });

      const results = await Promise.all(
        files
          .filter((file) => this.isReviewableFile(file.filename))
          .map(async (file) => ({
            filename: file.filename,
            analysis: await this.reviewCode({
              content: file.patch || '',
              filename: file.filename,
              language: this.detectLanguage(file.filename),
            }),
          })),
      );

      return { success: true, data: results };
    } catch (error) {
      logger.error('PR analysis failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  private async reviewCode(payload: {
    content: string;
    filename: string;
    language: string;
  }): Promise<CodeAnalysisResult> {
    const { content, filename, language } = payload;

    const parsedCode = await this.parseCodeContent(content, language);
    // console.log('parsedCode', parsedCode);
    // logger.info(`Analyzing ${filename} (${language}) and code:`, parsedCode);

    try {
      const [staticAnalysis, codeSmells, aiSuggestions] = await Promise.all([
        this.runEslintAnalysis(parsedCode, filename),
        this.runSonarSpecificAnalysis(parsedCode, language),
        this.runAIAnalysis(parsedCode, language),
      ]);

      return {
        filename,
        staticAnalysis,
        codeSmells,
        aiSuggestions,
        complexity: this.calculateComplexity(parsedCode, language),
        securityIssues: this.checkSecurityIssues(parsedCode, language),
      };
    } catch (error) {
      logger.error(`Code review failed for ${filename}:`, error);
      throw new Error(
        `Code review failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }
  }

  private async runEslintAnalysis(
    code: string,
    filename: string,
  ): Promise<ESLintIssue[]> {
    let tempFilePath: string | null = null;

    try {
      const tempDir = path.join('./', 'eslint-analysis');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      const uniqueId = uuidv4();
      const tempFileName = `${path.parse(filename).name}-${uniqueId}.ts`;
      tempFilePath = path.join(tempDir, tempFileName);

      fs.writeFileSync(tempFilePath, code, 'utf8');

      // Update tsconfig.json to include the temp directory
      // const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
      // let tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

      // if (!tsconfig.include) {
      //   tsconfig.include = [];
      // }

      // const tempDirRelative = path.relative(process.cwd(), tempDir);
      // if (!tsconfig.include.includes(tempDirRelative)) {
      //   tsconfig.include.push(path.join(tempDirRelative, '*.ts'));
      //   fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
      // }

      logger.debug(
        `Running ESLint analysis for temporary file: ${tempFilePath}`,
      );
      const results = await this.eslint.lintFiles([tempFilePath]);

      return results.flatMap((result) =>
        result.messages.map((msg) => ({
          ruleId: msg.ruleId || 'unknown',
          message: msg.message,
          line: msg.line,
          column: msg.column,
          severity: msg.severity === 2 ? 'error' : 'warning',
        })),
      );
    } catch (error) {
      logger.error('ESLint analysis failed:', error);
      return [
        {
          ruleId: 'eslint/config-error',
          message: `Configuration error: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`,
          line: 1,
          column: 1,
          severity: 'error',
        },
      ];
    } finally {
      // Cleanup:
      if (tempFilePath && fs.existsSync(tempFilePath)) {
        try {
          fs.unlinkSync(tempFilePath);
        } catch (cleanupError) {
          logger.warn('Failed to cleanup temporary file:', cleanupError);
        }
      }
    }
  }
  private async runSonarSpecificAnalysis(
    code: string,
    language: string,
  ): Promise<CodeSmell[]> {
    if (!['javascript', 'typescript'].includes(language.toLowerCase())) {
      return [];
    }

    const issues: CodeSmell[] = [];

    try {
      const ast = this.parseCode(code, language);

      traverse(ast as any, {
        enter: (path: any) => {
          if (path.isFunction()) {
            const comp = this.calculateFunctionComplexity(path);
            console.log('This is the comp of the sonar analysis', comp);

            if (comp > 5) {
              issues.push({
                ruleId: 'custom/complexity',
                message: `High cyclomatic complexity (${comp})`,
                line: path.node.loc?.start.line || 1,
                severity: 'error',
              });
            }
          }
        },
      });

      return issues;
    } catch (error) {
      logger.error('Sonar analysis failed:', error);
      console.log('Sonar analysis failed:', error);
      return [
        {
          ruleId: 'sonar-error',
          message: error instanceof Error ? error.message : 'Unknown error',
          severity: 'error',
        },
      ];
    }
  }

  private checkSecurityIssues(code: string, language: string): SecurityIssue[] {
    const securityPatterns: Record<string, SecurityPattern[]> = {
      javascript: [
        { pattern: /eval\s*\(/, message: 'eval usage detected' },
        {
          pattern: /localStorage\.setItem/,
          message: 'Potential insecure storage',
        },
        { pattern: /document\.write/, message: 'Unsafe DOM manipulation' },
        { pattern: /innerHTML\s*=/, message: 'Potential XSS vulnerability' },
      ],
      typescript: [
        { pattern: /eval\s*\(/, message: 'eval usage detected' },
        {
          pattern: /localStorage\.setItem/,
          message: 'Potential insecure storage',
        },
        { pattern: /document\.write/, message: 'Unsafe DOM manipulation' },
        { pattern: /innerHTML\s*=/, message: 'Potential XSS vulnerability' },
        { pattern: /any\s*[;{]/, message: 'Avoid using any type' },
      ],
      python: [
        {
          pattern: /subprocess\.run\(.*shell=True/,
          message: 'Dangerous subprocess usage',
        },
        { pattern: /exec\(/, message: 'Dangerous exec usage' },
        { pattern: /input\(/, message: 'Unsanitized input' },
      ],
    };

    const patterns = securityPatterns[language.toLowerCase()] || [];
    return patterns.flatMap(({ pattern, message }) => {
      const matches = code.match(pattern);
      return matches ? [{ message, pattern: pattern.toString() }] : [];
    });
  }

  private calculateComplexity(code: string, language: string): number {
    if (!['javascript', 'typescript'].includes(language.toLowerCase())) {
      return 0;
    }

    try {
      const ast = this.parseCode(code, language);
      let totalComplexity = 0;

      traverse(ast, {
        Function: {
          enter: (path) => {
            try {
              if (!path || !path.node) return;

              if (!path.isFunction()) return;

              const bodyPath = path.get('body');
              if (!bodyPath || typeof bodyPath === 'undefined') {
                logger.warn('Invalid function body encountered');
                return;
              }

              let complexity = 1;

              if (bodyPath.isBlockStatement()) {
                const blockTraversal = {
                  enter: (subPath: any) => {
                    if (!subPath || !subPath.node) return;

                    const nodeType = subPath.node.type;
                    // Count complexity based on control structures
                    if (
                      [
                        'IfStatement',
                        'ForStatement',
                        'WhileStatement',
                        'DoWhileStatement',
                        'SwitchCase',
                        'ConditionalExpression',
                        'CatchClause',
                      ].includes(nodeType)
                    ) {
                      complexity++;
                    }

                    // Handle logical expressions
                    if (
                      nodeType === 'LogicalExpression' &&
                      ['&&', '||'].includes(subPath.node.operator)
                    ) {
                      complexity++;
                    }
                  },
                };

                // Use safe traversal with proper scope
                traverse(bodyPath.node, blockTraversal, bodyPath.scope);
              } else if (bodyPath.isExpression()) {
                try {
                  complexity += this.analyzeExpressionComplexity(
                    bodyPath.node,
                    bodyPath,
                  );
                } catch (exprError) {
                  logger.warn('Expression analysis failed:', exprError);
                }
              }

              totalComplexity += complexity;
            } catch (error) {
              const loc = path?.node?.loc?.start;
              logger.warn(
                `Complexity calculation error at line ${
                  loc?.line ?? 'unknown'
                }:`,
                error instanceof Error ? error.message : 'Unknown error',
              );
            }
          },
        },
      });

      return totalComplexity;
    } catch (error) {
      logger.error('Overall complexity calculation failed:', error);
      return 0;
    }
  }

  private analyzeExpressionComplexity(node: Node, parentPath?: any): number {
    if (!node) return 0;

    let complexity = 0;
    try {
      // Create a new scope for traversal
      const scope = parentPath ? parentPath.scope : null;

      const visitor = {
        LogicalExpression(path: any) {
          if (['&&', '||'].includes(path.node.operator)) {
            complexity++;
          }
        },
        ConditionalExpression() {
          complexity++;
        },
      };

      // Pass scope and parentPath for proper traversal
      traverse(node, visitor, scope, parentPath);
    } catch (error) {
      console.log('Error in analyzeExpressionComplexity', error);
      logger.warn('Expression complexity analysis failed:', error);
    }

    return complexity;
  }

  private calculateFunctionComplexity(path: any): number {
    if (!path?.node?.body) {
      logger.debug('Either path node or body not available');
      return 0;
    }

    let complexity = 1;

    try {
      const visitor = {
        // Replace arrow functions with regular functions that don't return values
        IfStatement() {
          complexity++;
        },
        ForStatement() {
          complexity++;
        },
        WhileStatement() {
          complexity++;
        },
        DoWhileStatement() {
          complexity++;
        },
        SwitchCase(path: any) {
          if (path.node?.test) complexity++;
        },
        LogicalExpression(path: any) {
          if (path.node?.operator === '&&' || path.node?.operator === '||') {
            complexity++;
          }
        },
        ConditionalExpression() {
          complexity++;
        },
        CatchClause() {
          complexity++;
        },
        ReturnStatement(path: any) {
          if (path.node?.argument?.type?.includes('Logical')) {
            complexity++;
          }
        },
      };

      traverse(path.node.body, visitor, path.scope, path);
      return complexity;
    } catch (error: any) {
      logger.warn(`Error calculating function complexity: ${error.message}`);
      return 0;
    }
  }

  private async runAIAnalysis(
    code: string,
    language: string,
  ): Promise<string[]> {
    if (!this.model) return ['AI analysis unavailable'];

    try {
      const prompt = `As an expert code reviewer and senior software engineer specializing in ${language}, analyze the following code:
  
${code}

Provide a structured analysis with the following EXACT sections (use these exact headings) no other bullshit allowed:

1. Code Quality
   - Give a complexity score (0-10 where 0 is optimal, 10 is highly complex)
   - Provide brief quality assessment

2. Issues Found
   - List each issue with the following information:
     - Type: "security" for security concerns, "lint" for style issues, or "codesmell" for bad practices
     - Message: Clear description of the issue
     - Line: Specify line number when possible

3. Technical Analysis
   - Performance observations
   - Code structure evaluation
   - Architectural considerations

4. Positive Aspects
   - Highlight well-implemented patterns and practices

5. Security Evaluation
   - Identify any security vulnerabilities or concerns

6. Performance Review
   - Note any performance bottlenecks or optimization opportunities

7. Best Practices
   - Highlight adherence to or deviation from industry standards

8. Suggested Improvements:
\`\`\`${language}
// Provide specific code improvements here
// Format as complete, replacement code snippets
// Use proper syntax highlighting
\`\`\`

Format the "Suggested Improvements" section exactly as shown above, with the code block immediately following the heading.`;
      let text = '';
      if (this.llmProvider instanceof GoogleGenerativeAI) {
        const result = await this.model.generateContent(prompt);
        text = await result.response.text();
      } else {
        const result = await this.model({
          model: 'gpt-4',
          messages: [{ role: 'system', content: prompt }],
        });
        text = result.data.choices[0].message.content;
      }

      return text.split('\n').filter((line: string) => line.trim());
    } catch (error) {
      logger.error('AI analysis failed:', error);
      const err = error as Error;
      return [`AI analysis failed: ${err.message}`];
    }
  }

  private isReviewableFile(filename: string): boolean {
    const supported = ['.js', '.ts', '.jsx', '.tsx', '.py', '.java'];
    return supported.some((ext) => filename.endsWith(ext));
  }

  private detectLanguage(filename: string): string {
    const extMap: Record<string, string> = {
      js: 'javascript',
      jsx: 'javascript',
      ts: 'typescript',
      tsx: 'typescript',
      py: 'python',
      java: 'java',
    };
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    return extMap[ext] || 'unknown';
  }

  private async runFullStaticAnalysis(payload: {
    code: string;
    language: string;
  }) {
    const { code, language } = payload;

    try {
      return {
        eslint: await this.runEslintAnalysis(code, `file.${language}`),
        sonar: await this.runSonarSpecificAnalysis(code, language),
        complexity: this.calculateComplexity(code, language),
        security: this.checkSecurityIssues(code, language),
      };
    } catch (error) {
      logger.error('Full static analysis failed:', error);
      return {
        eslint: [],
        sonar: [],
        complexity: 0,
        security: [],
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}
