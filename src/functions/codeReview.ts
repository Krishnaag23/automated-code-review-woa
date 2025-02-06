import CodeReviewPlugin from '../plugins/code-review-plugin';
import { logger, PlainObject, GSContext } from '@godspeedsystems/core';

export default async function codeReview(ctx: GSContext, args: PlainObject) {
  try {
    const { filePath, language = 'javascript' } = args;
    const codeSnippet = args.content as string;
    // Validate required inputs
    if (!codeSnippet) {
      throw new Error("'codeSnippet' is required");
    }

    // Initialize plugin with proper configuration
    const pluginInstance = new CodeReviewPlugin({
      // Add any required plugin config here from .env
    });

    // Execute the review_code action with properly structured payload
    const reviewResult = await pluginInstance.execute(ctx, {
      action: 'review_code',
      payload: {
        content: codeSnippet,
        filename: filePath || 'anonymous-file',
        language: language.toLowerCase(),
      },
    });

    // Add additional processing if needed
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
