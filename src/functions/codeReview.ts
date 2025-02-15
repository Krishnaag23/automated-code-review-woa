import CodeReviewPlugin from '../plugins/code-review-plugin';
import { logger, PlainObject, GSContext } from '@godspeedsystems/core';

export default async function codeReview(ctx: GSContext, args: PlainObject) {
  try {
    const {
      filePath,
      language = 'javascript',
      llm_api_key,
      github_token,
    } = args;
    const codeSnippet = args.content as string;

    if (!codeSnippet) {
      throw new Error("'codeSnippet' is required");
    }

    if (!llm_api_key) {
      throw new Error("'llm_api_key' is required for LLM-based code analysis");
    }

    const pluginInstance = new CodeReviewPlugin({});
    pluginInstance.initKeys(github_token, llm_api_key);

    const reviewResult = await pluginInstance.execute(ctx, {
      action: 'review_code',
      payload: {
        content: codeSnippet,
        filename: filePath || 'anonymous-file',
        language: language.toLowerCase(),
      },
    });

    const formattedResult = {
      file: reviewResult.filename,
      issues: [
        ...reviewResult.staticAnalysis.map((issue: any) => ({
          type: 'lint',
          message: `${issue.message} [${issue.ruleId}]`,
          line: issue.line,
        })),
        ...reviewResult.codeSmells.map((smell: any) => ({
          type: 'codesmell',
          message: smell.message,
          line: smell.line,
        })),
        ...reviewResult.securityIssues.map((issue: any) => ({
          type: 'security',
          message: issue.message,
        })),
      ],
      complexity: reviewResult.complexity,
      aiSuggestions: reviewResult.aiSuggestions,
    };

    ctx.logger.info('Code review completed successfully');
    return {
      success: true,
      data: formattedResult,
    };
  } catch (error) {
    const err = error as Error;
    ctx.logger.error('Code review failed', { error: err.message });
    return {
      success: false,
      error: err.message,
    };
  }
}
