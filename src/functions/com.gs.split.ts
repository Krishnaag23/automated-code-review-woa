import { GSContext, PlainObject } from '@godspeedsystems/core';

export default async function (ctx: GSContext, args: PlainObject) {
  const { list, size } = args;

  if (!Array.isArray(list)) {
    throw new Error("Invalid input: 'list' must be an array.");
  }

  if (typeof size !== 'number' || size <= 0) {
    throw new Error("Invalid input: 'size' must be a positive number.");
  }

  const result = [];
  for (let i = 0; i < list.length; i += size) {
    result.push(list.slice(i, i + size));
  }

  ctx.logger.info('Split list into chunks:', result);
  return result;
}
