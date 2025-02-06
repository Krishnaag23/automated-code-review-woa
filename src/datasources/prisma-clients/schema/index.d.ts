
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ReviewResult
 * 
 */
export type ReviewResult = $Result.DefaultSelection<Prisma.$ReviewResultPayload>
/**
 * Model BatchProcess
 * 
 */
export type BatchProcess = $Result.DefaultSelection<Prisma.$BatchProcessPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ReviewResults
 * const reviewResults = await prisma.reviewResult.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ReviewResults
   * const reviewResults = await prisma.reviewResult.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  /**
   * Gives access to the client metrics in json or prometheus format.
   * 
   * @example
   * ```
   * const metrics = await prisma.$metrics.json()
   * // or
   * const metrics = await prisma.$metrics.prometheus()
   * ```
   */
  readonly $metrics: runtime.MetricsClient
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.reviewResult`: Exposes CRUD operations for the **ReviewResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewResults
    * const reviewResults = await prisma.reviewResult.findMany()
    * ```
    */
  get reviewResult(): Prisma.ReviewResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batchProcess`: Exposes CRUD operations for the **BatchProcess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BatchProcesses
    * const batchProcesses = await prisma.batchProcess.findMany()
    * ```
    */
  get batchProcess(): Prisma.BatchProcessDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ReviewResult: 'ReviewResult',
    BatchProcess: 'BatchProcess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "reviewResult" | "batchProcess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ReviewResult: {
        payload: Prisma.$ReviewResultPayload<ExtArgs>
        fields: Prisma.ReviewResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>
          }
          findFirst: {
            args: Prisma.ReviewResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>
          }
          findMany: {
            args: Prisma.ReviewResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>[]
          }
          create: {
            args: Prisma.ReviewResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>
          }
          createMany: {
            args: Prisma.ReviewResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>[]
          }
          delete: {
            args: Prisma.ReviewResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>
          }
          update: {
            args: Prisma.ReviewResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>
          }
          deleteMany: {
            args: Prisma.ReviewResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>[]
          }
          upsert: {
            args: Prisma.ReviewResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewResultPayload>
          }
          aggregate: {
            args: Prisma.ReviewResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewResult>
          }
          groupBy: {
            args: Prisma.ReviewResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewResultCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewResultCountAggregateOutputType> | number
          }
        }
      }
      BatchProcess: {
        payload: Prisma.$BatchProcessPayload<ExtArgs>
        fields: Prisma.BatchProcessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchProcessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchProcessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>
          }
          findFirst: {
            args: Prisma.BatchProcessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchProcessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>
          }
          findMany: {
            args: Prisma.BatchProcessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>[]
          }
          create: {
            args: Prisma.BatchProcessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>
          }
          createMany: {
            args: Prisma.BatchProcessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchProcessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>[]
          }
          delete: {
            args: Prisma.BatchProcessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>
          }
          update: {
            args: Prisma.BatchProcessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>
          }
          deleteMany: {
            args: Prisma.BatchProcessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchProcessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchProcessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>[]
          }
          upsert: {
            args: Prisma.BatchProcessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchProcessPayload>
          }
          aggregate: {
            args: Prisma.BatchProcessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatchProcess>
          }
          groupBy: {
            args: Prisma.BatchProcessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchProcessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchProcessCountArgs<ExtArgs>
            result: $Utils.Optional<BatchProcessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    reviewResult?: ReviewResultOmit
    batchProcess?: BatchProcessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ReviewResult
   */

  export type AggregateReviewResult = {
    _count: ReviewResultCountAggregateOutputType | null
    _avg: ReviewResultAvgAggregateOutputType | null
    _sum: ReviewResultSumAggregateOutputType | null
    _min: ReviewResultMinAggregateOutputType | null
    _max: ReviewResultMaxAggregateOutputType | null
  }

  export type ReviewResultAvgAggregateOutputType = {
    id: number | null
  }

  export type ReviewResultSumAggregateOutputType = {
    id: number | null
  }

  export type ReviewResultMinAggregateOutputType = {
    id: number | null
    repoId: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type ReviewResultMaxAggregateOutputType = {
    id: number | null
    repoId: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type ReviewResultCountAggregateOutputType = {
    id: number
    repoId: number
    filePath: number
    issues: number
    createdAt: number
    _all: number
  }


  export type ReviewResultAvgAggregateInputType = {
    id?: true
  }

  export type ReviewResultSumAggregateInputType = {
    id?: true
  }

  export type ReviewResultMinAggregateInputType = {
    id?: true
    repoId?: true
    filePath?: true
    createdAt?: true
  }

  export type ReviewResultMaxAggregateInputType = {
    id?: true
    repoId?: true
    filePath?: true
    createdAt?: true
  }

  export type ReviewResultCountAggregateInputType = {
    id?: true
    repoId?: true
    filePath?: true
    issues?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewResult to aggregate.
     */
    where?: ReviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewResults to fetch.
     */
    orderBy?: ReviewResultOrderByWithRelationInput | ReviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewResults
    **/
    _count?: true | ReviewResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewResultMaxAggregateInputType
  }

  export type GetReviewResultAggregateType<T extends ReviewResultAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewResult[P]>
      : GetScalarType<T[P], AggregateReviewResult[P]>
  }




  export type ReviewResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewResultWhereInput
    orderBy?: ReviewResultOrderByWithAggregationInput | ReviewResultOrderByWithAggregationInput[]
    by: ReviewResultScalarFieldEnum[] | ReviewResultScalarFieldEnum
    having?: ReviewResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewResultCountAggregateInputType | true
    _avg?: ReviewResultAvgAggregateInputType
    _sum?: ReviewResultSumAggregateInputType
    _min?: ReviewResultMinAggregateInputType
    _max?: ReviewResultMaxAggregateInputType
  }

  export type ReviewResultGroupByOutputType = {
    id: number
    repoId: string
    filePath: string
    issues: JsonValue
    createdAt: Date
    _count: ReviewResultCountAggregateOutputType | null
    _avg: ReviewResultAvgAggregateOutputType | null
    _sum: ReviewResultSumAggregateOutputType | null
    _min: ReviewResultMinAggregateOutputType | null
    _max: ReviewResultMaxAggregateOutputType | null
  }

  type GetReviewResultGroupByPayload<T extends ReviewResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewResultGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewResultGroupByOutputType[P]>
        }
      >
    >


  export type ReviewResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    filePath?: boolean
    issues?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reviewResult"]>

  export type ReviewResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    filePath?: boolean
    issues?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reviewResult"]>

  export type ReviewResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    filePath?: boolean
    issues?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reviewResult"]>

  export type ReviewResultSelectScalar = {
    id?: boolean
    repoId?: boolean
    filePath?: boolean
    issues?: boolean
    createdAt?: boolean
  }

  export type ReviewResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repoId" | "filePath" | "issues" | "createdAt", ExtArgs["result"]["reviewResult"]>

  export type $ReviewResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewResult"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      repoId: string
      filePath: string
      issues: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["reviewResult"]>
    composites: {}
  }

  type ReviewResultGetPayload<S extends boolean | null | undefined | ReviewResultDefaultArgs> = $Result.GetResult<Prisma.$ReviewResultPayload, S>

  type ReviewResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewResultCountAggregateInputType | true
    }

  export interface ReviewResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewResult'], meta: { name: 'ReviewResult' } }
    /**
     * Find zero or one ReviewResult that matches the filter.
     * @param {ReviewResultFindUniqueArgs} args - Arguments to find a ReviewResult
     * @example
     * // Get one ReviewResult
     * const reviewResult = await prisma.reviewResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewResultFindUniqueArgs>(args: SelectSubset<T, ReviewResultFindUniqueArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ReviewResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewResultFindUniqueOrThrowArgs} args - Arguments to find a ReviewResult
     * @example
     * // Get one ReviewResult
     * const reviewResult = await prisma.reviewResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ReviewResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewResultFindFirstArgs} args - Arguments to find a ReviewResult
     * @example
     * // Get one ReviewResult
     * const reviewResult = await prisma.reviewResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewResultFindFirstArgs>(args?: SelectSubset<T, ReviewResultFindFirstArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ReviewResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewResultFindFirstOrThrowArgs} args - Arguments to find a ReviewResult
     * @example
     * // Get one ReviewResult
     * const reviewResult = await prisma.reviewResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ReviewResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewResults
     * const reviewResults = await prisma.reviewResult.findMany()
     * 
     * // Get first 10 ReviewResults
     * const reviewResults = await prisma.reviewResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewResultWithIdOnly = await prisma.reviewResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewResultFindManyArgs>(args?: SelectSubset<T, ReviewResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ReviewResult.
     * @param {ReviewResultCreateArgs} args - Arguments to create a ReviewResult.
     * @example
     * // Create one ReviewResult
     * const ReviewResult = await prisma.reviewResult.create({
     *   data: {
     *     // ... data to create a ReviewResult
     *   }
     * })
     * 
     */
    create<T extends ReviewResultCreateArgs>(args: SelectSubset<T, ReviewResultCreateArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ReviewResults.
     * @param {ReviewResultCreateManyArgs} args - Arguments to create many ReviewResults.
     * @example
     * // Create many ReviewResults
     * const reviewResult = await prisma.reviewResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewResultCreateManyArgs>(args?: SelectSubset<T, ReviewResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewResults and returns the data saved in the database.
     * @param {ReviewResultCreateManyAndReturnArgs} args - Arguments to create many ReviewResults.
     * @example
     * // Create many ReviewResults
     * const reviewResult = await prisma.reviewResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewResults and only return the `id`
     * const reviewResultWithIdOnly = await prisma.reviewResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ReviewResult.
     * @param {ReviewResultDeleteArgs} args - Arguments to delete one ReviewResult.
     * @example
     * // Delete one ReviewResult
     * const ReviewResult = await prisma.reviewResult.delete({
     *   where: {
     *     // ... filter to delete one ReviewResult
     *   }
     * })
     * 
     */
    delete<T extends ReviewResultDeleteArgs>(args: SelectSubset<T, ReviewResultDeleteArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ReviewResult.
     * @param {ReviewResultUpdateArgs} args - Arguments to update one ReviewResult.
     * @example
     * // Update one ReviewResult
     * const reviewResult = await prisma.reviewResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewResultUpdateArgs>(args: SelectSubset<T, ReviewResultUpdateArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ReviewResults.
     * @param {ReviewResultDeleteManyArgs} args - Arguments to filter ReviewResults to delete.
     * @example
     * // Delete a few ReviewResults
     * const { count } = await prisma.reviewResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewResultDeleteManyArgs>(args?: SelectSubset<T, ReviewResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewResults
     * const reviewResult = await prisma.reviewResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewResultUpdateManyArgs>(args: SelectSubset<T, ReviewResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewResults and returns the data updated in the database.
     * @param {ReviewResultUpdateManyAndReturnArgs} args - Arguments to update many ReviewResults.
     * @example
     * // Update many ReviewResults
     * const reviewResult = await prisma.reviewResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewResults and only return the `id`
     * const reviewResultWithIdOnly = await prisma.reviewResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ReviewResult.
     * @param {ReviewResultUpsertArgs} args - Arguments to update or create a ReviewResult.
     * @example
     * // Update or create a ReviewResult
     * const reviewResult = await prisma.reviewResult.upsert({
     *   create: {
     *     // ... data to create a ReviewResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewResult we want to update
     *   }
     * })
     */
    upsert<T extends ReviewResultUpsertArgs>(args: SelectSubset<T, ReviewResultUpsertArgs<ExtArgs>>): Prisma__ReviewResultClient<$Result.GetResult<Prisma.$ReviewResultPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ReviewResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewResultCountArgs} args - Arguments to filter ReviewResults to count.
     * @example
     * // Count the number of ReviewResults
     * const count = await prisma.reviewResult.count({
     *   where: {
     *     // ... the filter for the ReviewResults we want to count
     *   }
     * })
    **/
    count<T extends ReviewResultCountArgs>(
      args?: Subset<T, ReviewResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewResultAggregateArgs>(args: Subset<T, ReviewResultAggregateArgs>): Prisma.PrismaPromise<GetReviewResultAggregateType<T>>

    /**
     * Group by ReviewResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewResultGroupByArgs['orderBy'] }
        : { orderBy?: ReviewResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewResult model
   */
  readonly fields: ReviewResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewResult model
   */ 
  interface ReviewResultFieldRefs {
    readonly id: FieldRef<"ReviewResult", 'Int'>
    readonly repoId: FieldRef<"ReviewResult", 'String'>
    readonly filePath: FieldRef<"ReviewResult", 'String'>
    readonly issues: FieldRef<"ReviewResult", 'Json'>
    readonly createdAt: FieldRef<"ReviewResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewResult findUnique
   */
  export type ReviewResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * Filter, which ReviewResult to fetch.
     */
    where: ReviewResultWhereUniqueInput
  }

  /**
   * ReviewResult findUniqueOrThrow
   */
  export type ReviewResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * Filter, which ReviewResult to fetch.
     */
    where: ReviewResultWhereUniqueInput
  }

  /**
   * ReviewResult findFirst
   */
  export type ReviewResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * Filter, which ReviewResult to fetch.
     */
    where?: ReviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewResults to fetch.
     */
    orderBy?: ReviewResultOrderByWithRelationInput | ReviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewResults.
     */
    cursor?: ReviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewResults.
     */
    distinct?: ReviewResultScalarFieldEnum | ReviewResultScalarFieldEnum[]
  }

  /**
   * ReviewResult findFirstOrThrow
   */
  export type ReviewResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * Filter, which ReviewResult to fetch.
     */
    where?: ReviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewResults to fetch.
     */
    orderBy?: ReviewResultOrderByWithRelationInput | ReviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewResults.
     */
    cursor?: ReviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewResults.
     */
    distinct?: ReviewResultScalarFieldEnum | ReviewResultScalarFieldEnum[]
  }

  /**
   * ReviewResult findMany
   */
  export type ReviewResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * Filter, which ReviewResults to fetch.
     */
    where?: ReviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewResults to fetch.
     */
    orderBy?: ReviewResultOrderByWithRelationInput | ReviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewResults.
     */
    cursor?: ReviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewResults.
     */
    skip?: number
    distinct?: ReviewResultScalarFieldEnum | ReviewResultScalarFieldEnum[]
  }

  /**
   * ReviewResult create
   */
  export type ReviewResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * The data needed to create a ReviewResult.
     */
    data: XOR<ReviewResultCreateInput, ReviewResultUncheckedCreateInput>
  }

  /**
   * ReviewResult createMany
   */
  export type ReviewResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewResults.
     */
    data: ReviewResultCreateManyInput | ReviewResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewResult createManyAndReturn
   */
  export type ReviewResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewResults.
     */
    data: ReviewResultCreateManyInput | ReviewResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewResult update
   */
  export type ReviewResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * The data needed to update a ReviewResult.
     */
    data: XOR<ReviewResultUpdateInput, ReviewResultUncheckedUpdateInput>
    /**
     * Choose, which ReviewResult to update.
     */
    where: ReviewResultWhereUniqueInput
  }

  /**
   * ReviewResult updateMany
   */
  export type ReviewResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewResults.
     */
    data: XOR<ReviewResultUpdateManyMutationInput, ReviewResultUncheckedUpdateManyInput>
    /**
     * Filter which ReviewResults to update
     */
    where?: ReviewResultWhereInput
  }

  /**
   * ReviewResult updateManyAndReturn
   */
  export type ReviewResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * The data used to update ReviewResults.
     */
    data: XOR<ReviewResultUpdateManyMutationInput, ReviewResultUncheckedUpdateManyInput>
    /**
     * Filter which ReviewResults to update
     */
    where?: ReviewResultWhereInput
  }

  /**
   * ReviewResult upsert
   */
  export type ReviewResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * The filter to search for the ReviewResult to update in case it exists.
     */
    where: ReviewResultWhereUniqueInput
    /**
     * In case the ReviewResult found by the `where` argument doesn't exist, create a new ReviewResult with this data.
     */
    create: XOR<ReviewResultCreateInput, ReviewResultUncheckedCreateInput>
    /**
     * In case the ReviewResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewResultUpdateInput, ReviewResultUncheckedUpdateInput>
  }

  /**
   * ReviewResult delete
   */
  export type ReviewResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
    /**
     * Filter which ReviewResult to delete.
     */
    where: ReviewResultWhereUniqueInput
  }

  /**
   * ReviewResult deleteMany
   */
  export type ReviewResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewResults to delete
     */
    where?: ReviewResultWhereInput
  }

  /**
   * ReviewResult without action
   */
  export type ReviewResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewResult
     */
    select?: ReviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewResult
     */
    omit?: ReviewResultOmit<ExtArgs> | null
  }


  /**
   * Model BatchProcess
   */

  export type AggregateBatchProcess = {
    _count: BatchProcessCountAggregateOutputType | null
    _avg: BatchProcessAvgAggregateOutputType | null
    _sum: BatchProcessSumAggregateOutputType | null
    _min: BatchProcessMinAggregateOutputType | null
    _max: BatchProcessMaxAggregateOutputType | null
  }

  export type BatchProcessAvgAggregateOutputType = {
    id: number | null
  }

  export type BatchProcessSumAggregateOutputType = {
    id: number | null
  }

  export type BatchProcessMinAggregateOutputType = {
    id: number | null
    batchId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BatchProcessMaxAggregateOutputType = {
    id: number | null
    batchId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BatchProcessCountAggregateOutputType = {
    id: number
    batchId: number
    status: number
    createdAt: number
    _all: number
  }


  export type BatchProcessAvgAggregateInputType = {
    id?: true
  }

  export type BatchProcessSumAggregateInputType = {
    id?: true
  }

  export type BatchProcessMinAggregateInputType = {
    id?: true
    batchId?: true
    status?: true
    createdAt?: true
  }

  export type BatchProcessMaxAggregateInputType = {
    id?: true
    batchId?: true
    status?: true
    createdAt?: true
  }

  export type BatchProcessCountAggregateInputType = {
    id?: true
    batchId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BatchProcessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchProcess to aggregate.
     */
    where?: BatchProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchProcesses to fetch.
     */
    orderBy?: BatchProcessOrderByWithRelationInput | BatchProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BatchProcesses
    **/
    _count?: true | BatchProcessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchProcessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchProcessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchProcessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchProcessMaxAggregateInputType
  }

  export type GetBatchProcessAggregateType<T extends BatchProcessAggregateArgs> = {
        [P in keyof T & keyof AggregateBatchProcess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatchProcess[P]>
      : GetScalarType<T[P], AggregateBatchProcess[P]>
  }




  export type BatchProcessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchProcessWhereInput
    orderBy?: BatchProcessOrderByWithAggregationInput | BatchProcessOrderByWithAggregationInput[]
    by: BatchProcessScalarFieldEnum[] | BatchProcessScalarFieldEnum
    having?: BatchProcessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchProcessCountAggregateInputType | true
    _avg?: BatchProcessAvgAggregateInputType
    _sum?: BatchProcessSumAggregateInputType
    _min?: BatchProcessMinAggregateInputType
    _max?: BatchProcessMaxAggregateInputType
  }

  export type BatchProcessGroupByOutputType = {
    id: number
    batchId: string
    status: string
    createdAt: Date
    _count: BatchProcessCountAggregateOutputType | null
    _avg: BatchProcessAvgAggregateOutputType | null
    _sum: BatchProcessSumAggregateOutputType | null
    _min: BatchProcessMinAggregateOutputType | null
    _max: BatchProcessMaxAggregateOutputType | null
  }

  type GetBatchProcessGroupByPayload<T extends BatchProcessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchProcessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchProcessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchProcessGroupByOutputType[P]>
            : GetScalarType<T[P], BatchProcessGroupByOutputType[P]>
        }
      >
    >


  export type BatchProcessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["batchProcess"]>

  export type BatchProcessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["batchProcess"]>

  export type BatchProcessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["batchProcess"]>

  export type BatchProcessSelectScalar = {
    id?: boolean
    batchId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BatchProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchId" | "status" | "createdAt", ExtArgs["result"]["batchProcess"]>

  export type $BatchProcessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BatchProcess"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      batchId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["batchProcess"]>
    composites: {}
  }

  type BatchProcessGetPayload<S extends boolean | null | undefined | BatchProcessDefaultArgs> = $Result.GetResult<Prisma.$BatchProcessPayload, S>

  type BatchProcessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchProcessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchProcessCountAggregateInputType | true
    }

  export interface BatchProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BatchProcess'], meta: { name: 'BatchProcess' } }
    /**
     * Find zero or one BatchProcess that matches the filter.
     * @param {BatchProcessFindUniqueArgs} args - Arguments to find a BatchProcess
     * @example
     * // Get one BatchProcess
     * const batchProcess = await prisma.batchProcess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchProcessFindUniqueArgs>(args: SelectSubset<T, BatchProcessFindUniqueArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BatchProcess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchProcessFindUniqueOrThrowArgs} args - Arguments to find a BatchProcess
     * @example
     * // Get one BatchProcess
     * const batchProcess = await prisma.batchProcess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BatchProcess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchProcessFindFirstArgs} args - Arguments to find a BatchProcess
     * @example
     * // Get one BatchProcess
     * const batchProcess = await prisma.batchProcess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchProcessFindFirstArgs>(args?: SelectSubset<T, BatchProcessFindFirstArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BatchProcess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchProcessFindFirstOrThrowArgs} args - Arguments to find a BatchProcess
     * @example
     * // Get one BatchProcess
     * const batchProcess = await prisma.batchProcess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BatchProcesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchProcessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BatchProcesses
     * const batchProcesses = await prisma.batchProcess.findMany()
     * 
     * // Get first 10 BatchProcesses
     * const batchProcesses = await prisma.batchProcess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchProcessWithIdOnly = await prisma.batchProcess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchProcessFindManyArgs>(args?: SelectSubset<T, BatchProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BatchProcess.
     * @param {BatchProcessCreateArgs} args - Arguments to create a BatchProcess.
     * @example
     * // Create one BatchProcess
     * const BatchProcess = await prisma.batchProcess.create({
     *   data: {
     *     // ... data to create a BatchProcess
     *   }
     * })
     * 
     */
    create<T extends BatchProcessCreateArgs>(args: SelectSubset<T, BatchProcessCreateArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BatchProcesses.
     * @param {BatchProcessCreateManyArgs} args - Arguments to create many BatchProcesses.
     * @example
     * // Create many BatchProcesses
     * const batchProcess = await prisma.batchProcess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchProcessCreateManyArgs>(args?: SelectSubset<T, BatchProcessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BatchProcesses and returns the data saved in the database.
     * @param {BatchProcessCreateManyAndReturnArgs} args - Arguments to create many BatchProcesses.
     * @example
     * // Create many BatchProcesses
     * const batchProcess = await prisma.batchProcess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BatchProcesses and only return the `id`
     * const batchProcessWithIdOnly = await prisma.batchProcess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchProcessCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchProcessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BatchProcess.
     * @param {BatchProcessDeleteArgs} args - Arguments to delete one BatchProcess.
     * @example
     * // Delete one BatchProcess
     * const BatchProcess = await prisma.batchProcess.delete({
     *   where: {
     *     // ... filter to delete one BatchProcess
     *   }
     * })
     * 
     */
    delete<T extends BatchProcessDeleteArgs>(args: SelectSubset<T, BatchProcessDeleteArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BatchProcess.
     * @param {BatchProcessUpdateArgs} args - Arguments to update one BatchProcess.
     * @example
     * // Update one BatchProcess
     * const batchProcess = await prisma.batchProcess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchProcessUpdateArgs>(args: SelectSubset<T, BatchProcessUpdateArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BatchProcesses.
     * @param {BatchProcessDeleteManyArgs} args - Arguments to filter BatchProcesses to delete.
     * @example
     * // Delete a few BatchProcesses
     * const { count } = await prisma.batchProcess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchProcessDeleteManyArgs>(args?: SelectSubset<T, BatchProcessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchProcesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchProcessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BatchProcesses
     * const batchProcess = await prisma.batchProcess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchProcessUpdateManyArgs>(args: SelectSubset<T, BatchProcessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchProcesses and returns the data updated in the database.
     * @param {BatchProcessUpdateManyAndReturnArgs} args - Arguments to update many BatchProcesses.
     * @example
     * // Update many BatchProcesses
     * const batchProcess = await prisma.batchProcess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BatchProcesses and only return the `id`
     * const batchProcessWithIdOnly = await prisma.batchProcess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BatchProcessUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchProcessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BatchProcess.
     * @param {BatchProcessUpsertArgs} args - Arguments to update or create a BatchProcess.
     * @example
     * // Update or create a BatchProcess
     * const batchProcess = await prisma.batchProcess.upsert({
     *   create: {
     *     // ... data to create a BatchProcess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BatchProcess we want to update
     *   }
     * })
     */
    upsert<T extends BatchProcessUpsertArgs>(args: SelectSubset<T, BatchProcessUpsertArgs<ExtArgs>>): Prisma__BatchProcessClient<$Result.GetResult<Prisma.$BatchProcessPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BatchProcesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchProcessCountArgs} args - Arguments to filter BatchProcesses to count.
     * @example
     * // Count the number of BatchProcesses
     * const count = await prisma.batchProcess.count({
     *   where: {
     *     // ... the filter for the BatchProcesses we want to count
     *   }
     * })
    **/
    count<T extends BatchProcessCountArgs>(
      args?: Subset<T, BatchProcessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchProcessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BatchProcess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchProcessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BatchProcessAggregateArgs>(args: Subset<T, BatchProcessAggregateArgs>): Prisma.PrismaPromise<GetBatchProcessAggregateType<T>>

    /**
     * Group by BatchProcess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchProcessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BatchProcessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchProcessGroupByArgs['orderBy'] }
        : { orderBy?: BatchProcessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BatchProcessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchProcessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BatchProcess model
   */
  readonly fields: BatchProcessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BatchProcess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BatchProcess model
   */ 
  interface BatchProcessFieldRefs {
    readonly id: FieldRef<"BatchProcess", 'Int'>
    readonly batchId: FieldRef<"BatchProcess", 'String'>
    readonly status: FieldRef<"BatchProcess", 'String'>
    readonly createdAt: FieldRef<"BatchProcess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BatchProcess findUnique
   */
  export type BatchProcessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * Filter, which BatchProcess to fetch.
     */
    where: BatchProcessWhereUniqueInput
  }

  /**
   * BatchProcess findUniqueOrThrow
   */
  export type BatchProcessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * Filter, which BatchProcess to fetch.
     */
    where: BatchProcessWhereUniqueInput
  }

  /**
   * BatchProcess findFirst
   */
  export type BatchProcessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * Filter, which BatchProcess to fetch.
     */
    where?: BatchProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchProcesses to fetch.
     */
    orderBy?: BatchProcessOrderByWithRelationInput | BatchProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchProcesses.
     */
    cursor?: BatchProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchProcesses.
     */
    distinct?: BatchProcessScalarFieldEnum | BatchProcessScalarFieldEnum[]
  }

  /**
   * BatchProcess findFirstOrThrow
   */
  export type BatchProcessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * Filter, which BatchProcess to fetch.
     */
    where?: BatchProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchProcesses to fetch.
     */
    orderBy?: BatchProcessOrderByWithRelationInput | BatchProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchProcesses.
     */
    cursor?: BatchProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchProcesses.
     */
    distinct?: BatchProcessScalarFieldEnum | BatchProcessScalarFieldEnum[]
  }

  /**
   * BatchProcess findMany
   */
  export type BatchProcessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * Filter, which BatchProcesses to fetch.
     */
    where?: BatchProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchProcesses to fetch.
     */
    orderBy?: BatchProcessOrderByWithRelationInput | BatchProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BatchProcesses.
     */
    cursor?: BatchProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchProcesses.
     */
    skip?: number
    distinct?: BatchProcessScalarFieldEnum | BatchProcessScalarFieldEnum[]
  }

  /**
   * BatchProcess create
   */
  export type BatchProcessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * The data needed to create a BatchProcess.
     */
    data: XOR<BatchProcessCreateInput, BatchProcessUncheckedCreateInput>
  }

  /**
   * BatchProcess createMany
   */
  export type BatchProcessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BatchProcesses.
     */
    data: BatchProcessCreateManyInput | BatchProcessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchProcess createManyAndReturn
   */
  export type BatchProcessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * The data used to create many BatchProcesses.
     */
    data: BatchProcessCreateManyInput | BatchProcessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchProcess update
   */
  export type BatchProcessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * The data needed to update a BatchProcess.
     */
    data: XOR<BatchProcessUpdateInput, BatchProcessUncheckedUpdateInput>
    /**
     * Choose, which BatchProcess to update.
     */
    where: BatchProcessWhereUniqueInput
  }

  /**
   * BatchProcess updateMany
   */
  export type BatchProcessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BatchProcesses.
     */
    data: XOR<BatchProcessUpdateManyMutationInput, BatchProcessUncheckedUpdateManyInput>
    /**
     * Filter which BatchProcesses to update
     */
    where?: BatchProcessWhereInput
  }

  /**
   * BatchProcess updateManyAndReturn
   */
  export type BatchProcessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * The data used to update BatchProcesses.
     */
    data: XOR<BatchProcessUpdateManyMutationInput, BatchProcessUncheckedUpdateManyInput>
    /**
     * Filter which BatchProcesses to update
     */
    where?: BatchProcessWhereInput
  }

  /**
   * BatchProcess upsert
   */
  export type BatchProcessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * The filter to search for the BatchProcess to update in case it exists.
     */
    where: BatchProcessWhereUniqueInput
    /**
     * In case the BatchProcess found by the `where` argument doesn't exist, create a new BatchProcess with this data.
     */
    create: XOR<BatchProcessCreateInput, BatchProcessUncheckedCreateInput>
    /**
     * In case the BatchProcess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchProcessUpdateInput, BatchProcessUncheckedUpdateInput>
  }

  /**
   * BatchProcess delete
   */
  export type BatchProcessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
    /**
     * Filter which BatchProcess to delete.
     */
    where: BatchProcessWhereUniqueInput
  }

  /**
   * BatchProcess deleteMany
   */
  export type BatchProcessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchProcesses to delete
     */
    where?: BatchProcessWhereInput
  }

  /**
   * BatchProcess without action
   */
  export type BatchProcessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchProcess
     */
    select?: BatchProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchProcess
     */
    omit?: BatchProcessOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReviewResultScalarFieldEnum: {
    id: 'id',
    repoId: 'repoId',
    filePath: 'filePath',
    issues: 'issues',
    createdAt: 'createdAt'
  };

  export type ReviewResultScalarFieldEnum = (typeof ReviewResultScalarFieldEnum)[keyof typeof ReviewResultScalarFieldEnum]


  export const BatchProcessScalarFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BatchProcessScalarFieldEnum = (typeof BatchProcessScalarFieldEnum)[keyof typeof BatchProcessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ReviewResultWhereInput = {
    AND?: ReviewResultWhereInput | ReviewResultWhereInput[]
    OR?: ReviewResultWhereInput[]
    NOT?: ReviewResultWhereInput | ReviewResultWhereInput[]
    id?: IntFilter<"ReviewResult"> | number
    repoId?: StringFilter<"ReviewResult"> | string
    filePath?: StringFilter<"ReviewResult"> | string
    issues?: JsonFilter<"ReviewResult">
    createdAt?: DateTimeFilter<"ReviewResult"> | Date | string
  }

  export type ReviewResultOrderByWithRelationInput = {
    id?: SortOrder
    repoId?: SortOrder
    filePath?: SortOrder
    issues?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewResultWhereInput | ReviewResultWhereInput[]
    OR?: ReviewResultWhereInput[]
    NOT?: ReviewResultWhereInput | ReviewResultWhereInput[]
    repoId?: StringFilter<"ReviewResult"> | string
    filePath?: StringFilter<"ReviewResult"> | string
    issues?: JsonFilter<"ReviewResult">
    createdAt?: DateTimeFilter<"ReviewResult"> | Date | string
  }, "id">

  export type ReviewResultOrderByWithAggregationInput = {
    id?: SortOrder
    repoId?: SortOrder
    filePath?: SortOrder
    issues?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewResultCountOrderByAggregateInput
    _avg?: ReviewResultAvgOrderByAggregateInput
    _max?: ReviewResultMaxOrderByAggregateInput
    _min?: ReviewResultMinOrderByAggregateInput
    _sum?: ReviewResultSumOrderByAggregateInput
  }

  export type ReviewResultScalarWhereWithAggregatesInput = {
    AND?: ReviewResultScalarWhereWithAggregatesInput | ReviewResultScalarWhereWithAggregatesInput[]
    OR?: ReviewResultScalarWhereWithAggregatesInput[]
    NOT?: ReviewResultScalarWhereWithAggregatesInput | ReviewResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReviewResult"> | number
    repoId?: StringWithAggregatesFilter<"ReviewResult"> | string
    filePath?: StringWithAggregatesFilter<"ReviewResult"> | string
    issues?: JsonWithAggregatesFilter<"ReviewResult">
    createdAt?: DateTimeWithAggregatesFilter<"ReviewResult"> | Date | string
  }

  export type BatchProcessWhereInput = {
    AND?: BatchProcessWhereInput | BatchProcessWhereInput[]
    OR?: BatchProcessWhereInput[]
    NOT?: BatchProcessWhereInput | BatchProcessWhereInput[]
    id?: IntFilter<"BatchProcess"> | number
    batchId?: StringFilter<"BatchProcess"> | string
    status?: StringFilter<"BatchProcess"> | string
    createdAt?: DateTimeFilter<"BatchProcess"> | Date | string
  }

  export type BatchProcessOrderByWithRelationInput = {
    id?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BatchProcessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BatchProcessWhereInput | BatchProcessWhereInput[]
    OR?: BatchProcessWhereInput[]
    NOT?: BatchProcessWhereInput | BatchProcessWhereInput[]
    batchId?: StringFilter<"BatchProcess"> | string
    status?: StringFilter<"BatchProcess"> | string
    createdAt?: DateTimeFilter<"BatchProcess"> | Date | string
  }, "id">

  export type BatchProcessOrderByWithAggregationInput = {
    id?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BatchProcessCountOrderByAggregateInput
    _avg?: BatchProcessAvgOrderByAggregateInput
    _max?: BatchProcessMaxOrderByAggregateInput
    _min?: BatchProcessMinOrderByAggregateInput
    _sum?: BatchProcessSumOrderByAggregateInput
  }

  export type BatchProcessScalarWhereWithAggregatesInput = {
    AND?: BatchProcessScalarWhereWithAggregatesInput | BatchProcessScalarWhereWithAggregatesInput[]
    OR?: BatchProcessScalarWhereWithAggregatesInput[]
    NOT?: BatchProcessScalarWhereWithAggregatesInput | BatchProcessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BatchProcess"> | number
    batchId?: StringWithAggregatesFilter<"BatchProcess"> | string
    status?: StringWithAggregatesFilter<"BatchProcess"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BatchProcess"> | Date | string
  }

  export type ReviewResultCreateInput = {
    repoId: string
    filePath: string
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReviewResultUncheckedCreateInput = {
    id?: number
    repoId: string
    filePath: string
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReviewResultUpdateInput = {
    repoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewResultCreateManyInput = {
    id?: number
    repoId: string
    filePath: string
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReviewResultUpdateManyMutationInput = {
    repoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchProcessCreateInput = {
    batchId: string
    status: string
    createdAt?: Date | string
  }

  export type BatchProcessUncheckedCreateInput = {
    id?: number
    batchId: string
    status: string
    createdAt?: Date | string
  }

  export type BatchProcessUpdateInput = {
    batchId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchProcessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchProcessCreateManyInput = {
    id?: number
    batchId: string
    status: string
    createdAt?: Date | string
  }

  export type BatchProcessUpdateManyMutationInput = {
    batchId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchProcessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewResultCountOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    filePath?: SortOrder
    issues?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewResultAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReviewResultMaxOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewResultMinOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewResultSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BatchProcessCountOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BatchProcessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BatchProcessMaxOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BatchProcessMinOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BatchProcessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}