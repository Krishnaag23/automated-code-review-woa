import { GSContext, PlainObject } from '@godspeedsystems/core';

export default async function save_results(
  ctx: GSContext,
  args: PlainObject,
): Promise<any> {
  const prisma = ctx.datasources.schema.client;

  try {
    // Validate that required fields exist
    if (!args.data.repoId || !args.data.filePath || !args.data.issues) {
      ctx.logger.error('Missing required fields:', args);
      return {
        success: false,
        message: 'Missing required fields: repoId, filePath, or issues',
      };
    }

    const { repoId, filePath, issues } = args.data;

    // Convert `issues` to JSON if it's a string
    let formattedIssues;
    try {
      formattedIssues =
        typeof issues === 'string' ? JSON.parse(issues) : issues;
    } catch (parseError) {
      ctx.logger.error('Invalid JSON format in issues:', issues);
      return { success: false, message: 'Invalid JSON format in issues' };
    }

    // Save data to the database
    const result = await prisma.reviewResult.create({
      data: {
        repoId,
        filePath,
        issues: formattedIssues,
        createdAt: new Date(),
      },
    });

    ctx.logger.info('Saved review result:', result);
    return { success: true, data: result };
  } catch (error) {
    ctx.logger.error('Error saving review result:', error);
    return { success: false, message: 'Failed to save review result', error };
  }
}
