import { GSContext, PlainObject } from '@godspeedsystems/core';

export default async function fetch_results(
  ctx: GSContext,
  args: PlainObject,
): Promise<PlainObject> {
  const prisma = ctx.datasources.db.client; 

  try {
    const results = await prisma.reviewResult.findMany();
    return {
      success: true,
      data: results,
    };
  } catch (error) {
    ctx.logger.error('Error fetching reports:', error);
    throw new Error('Failed to fetch reports');
  }
}
