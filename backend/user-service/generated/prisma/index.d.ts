
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
 * Model ProccessedEvent
 * 
 */
export type ProccessedEvent = $Result.DefaultSelection<Prisma.$ProccessedEventPayload>
/**
 * Model UserProfiles
 * 
 */
export type UserProfiles = $Result.DefaultSelection<Prisma.$UserProfilesPayload>
/**
 * Model CustomerProfiles
 * 
 */
export type CustomerProfiles = $Result.DefaultSelection<Prisma.$CustomerProfilesPayload>
/**
 * Model CustomerAddress
 * 
 */
export type CustomerAddress = $Result.DefaultSelection<Prisma.$CustomerAddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProccessedEvents
 * const proccessedEvents = await prisma.proccessedEvent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more ProccessedEvents
   * const proccessedEvents = await prisma.proccessedEvent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.proccessedEvent`: Exposes CRUD operations for the **ProccessedEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProccessedEvents
    * const proccessedEvents = await prisma.proccessedEvent.findMany()
    * ```
    */
  get proccessedEvent(): Prisma.ProccessedEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfiles`: Exposes CRUD operations for the **UserProfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfiles.findMany()
    * ```
    */
  get userProfiles(): Prisma.UserProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerProfiles`: Exposes CRUD operations for the **CustomerProfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerProfiles
    * const customerProfiles = await prisma.customerProfiles.findMany()
    * ```
    */
  get customerProfiles(): Prisma.CustomerProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerAddress`: Exposes CRUD operations for the **CustomerAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerAddresses
    * const customerAddresses = await prisma.customerAddress.findMany()
    * ```
    */
  get customerAddress(): Prisma.CustomerAddressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    ProccessedEvent: 'ProccessedEvent',
    UserProfiles: 'UserProfiles',
    CustomerProfiles: 'CustomerProfiles',
    CustomerAddress: 'CustomerAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "proccessedEvent" | "userProfiles" | "customerProfiles" | "customerAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProccessedEvent: {
        payload: Prisma.$ProccessedEventPayload<ExtArgs>
        fields: Prisma.ProccessedEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProccessedEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProccessedEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>
          }
          findFirst: {
            args: Prisma.ProccessedEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProccessedEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>
          }
          findMany: {
            args: Prisma.ProccessedEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>[]
          }
          create: {
            args: Prisma.ProccessedEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>
          }
          createMany: {
            args: Prisma.ProccessedEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProccessedEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>[]
          }
          delete: {
            args: Prisma.ProccessedEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>
          }
          update: {
            args: Prisma.ProccessedEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>
          }
          deleteMany: {
            args: Prisma.ProccessedEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProccessedEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProccessedEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>[]
          }
          upsert: {
            args: Prisma.ProccessedEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProccessedEventPayload>
          }
          aggregate: {
            args: Prisma.ProccessedEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProccessedEvent>
          }
          groupBy: {
            args: Prisma.ProccessedEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProccessedEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProccessedEventCountArgs<ExtArgs>
            result: $Utils.Optional<ProccessedEventCountAggregateOutputType> | number
          }
        }
      }
      UserProfiles: {
        payload: Prisma.$UserProfilesPayload<ExtArgs>
        fields: Prisma.UserProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>
          }
          findFirst: {
            args: Prisma.UserProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>
          }
          findMany: {
            args: Prisma.UserProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>[]
          }
          create: {
            args: Prisma.UserProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>
          }
          createMany: {
            args: Prisma.UserProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>[]
          }
          delete: {
            args: Prisma.UserProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>
          }
          update: {
            args: Prisma.UserProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>
          }
          deleteMany: {
            args: Prisma.UserProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>[]
          }
          upsert: {
            args: Prisma.UserProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilesPayload>
          }
          aggregate: {
            args: Prisma.UserProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfiles>
          }
          groupBy: {
            args: Prisma.UserProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfilesCountAggregateOutputType> | number
          }
        }
      }
      CustomerProfiles: {
        payload: Prisma.$CustomerProfilesPayload<ExtArgs>
        fields: Prisma.CustomerProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>
          }
          findFirst: {
            args: Prisma.CustomerProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>
          }
          findMany: {
            args: Prisma.CustomerProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>[]
          }
          create: {
            args: Prisma.CustomerProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>
          }
          createMany: {
            args: Prisma.CustomerProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>[]
          }
          delete: {
            args: Prisma.CustomerProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>
          }
          update: {
            args: Prisma.CustomerProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>
          }
          deleteMany: {
            args: Prisma.CustomerProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>[]
          }
          upsert: {
            args: Prisma.CustomerProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilesPayload>
          }
          aggregate: {
            args: Prisma.CustomerProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerProfiles>
          }
          groupBy: {
            args: Prisma.CustomerProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerProfilesCountAggregateOutputType> | number
          }
        }
      }
      CustomerAddress: {
        payload: Prisma.$CustomerAddressPayload<ExtArgs>
        fields: Prisma.CustomerAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          findFirst: {
            args: Prisma.CustomerAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          findMany: {
            args: Prisma.CustomerAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[]
          }
          create: {
            args: Prisma.CustomerAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          createMany: {
            args: Prisma.CustomerAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[]
          }
          delete: {
            args: Prisma.CustomerAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          update: {
            args: Prisma.CustomerAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          deleteMany: {
            args: Prisma.CustomerAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[]
          }
          upsert: {
            args: Prisma.CustomerAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          aggregate: {
            args: Prisma.CustomerAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerAddress>
          }
          groupBy: {
            args: Prisma.CustomerAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerAddressCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerAddressCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    proccessedEvent?: ProccessedEventOmit
    userProfiles?: UserProfilesOmit
    customerProfiles?: CustomerProfilesOmit
    customerAddress?: CustomerAddressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Model ProccessedEvent
   */

  export type AggregateProccessedEvent = {
    _count: ProccessedEventCountAggregateOutputType | null
    _min: ProccessedEventMinAggregateOutputType | null
    _max: ProccessedEventMaxAggregateOutputType | null
  }

  export type ProccessedEventMinAggregateOutputType = {
    eventId: string | null
    processedAt: Date | null
  }

  export type ProccessedEventMaxAggregateOutputType = {
    eventId: string | null
    processedAt: Date | null
  }

  export type ProccessedEventCountAggregateOutputType = {
    eventId: number
    processedAt: number
    _all: number
  }


  export type ProccessedEventMinAggregateInputType = {
    eventId?: true
    processedAt?: true
  }

  export type ProccessedEventMaxAggregateInputType = {
    eventId?: true
    processedAt?: true
  }

  export type ProccessedEventCountAggregateInputType = {
    eventId?: true
    processedAt?: true
    _all?: true
  }

  export type ProccessedEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProccessedEvent to aggregate.
     */
    where?: ProccessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProccessedEvents to fetch.
     */
    orderBy?: ProccessedEventOrderByWithRelationInput | ProccessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProccessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProccessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProccessedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProccessedEvents
    **/
    _count?: true | ProccessedEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProccessedEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProccessedEventMaxAggregateInputType
  }

  export type GetProccessedEventAggregateType<T extends ProccessedEventAggregateArgs> = {
        [P in keyof T & keyof AggregateProccessedEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProccessedEvent[P]>
      : GetScalarType<T[P], AggregateProccessedEvent[P]>
  }




  export type ProccessedEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProccessedEventWhereInput
    orderBy?: ProccessedEventOrderByWithAggregationInput | ProccessedEventOrderByWithAggregationInput[]
    by: ProccessedEventScalarFieldEnum[] | ProccessedEventScalarFieldEnum
    having?: ProccessedEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProccessedEventCountAggregateInputType | true
    _min?: ProccessedEventMinAggregateInputType
    _max?: ProccessedEventMaxAggregateInputType
  }

  export type ProccessedEventGroupByOutputType = {
    eventId: string
    processedAt: Date
    _count: ProccessedEventCountAggregateOutputType | null
    _min: ProccessedEventMinAggregateOutputType | null
    _max: ProccessedEventMaxAggregateOutputType | null
  }

  type GetProccessedEventGroupByPayload<T extends ProccessedEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProccessedEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProccessedEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProccessedEventGroupByOutputType[P]>
            : GetScalarType<T[P], ProccessedEventGroupByOutputType[P]>
        }
      >
    >


  export type ProccessedEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["proccessedEvent"]>

  export type ProccessedEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["proccessedEvent"]>

  export type ProccessedEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["proccessedEvent"]>

  export type ProccessedEventSelectScalar = {
    eventId?: boolean
    processedAt?: boolean
  }

  export type ProccessedEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "processedAt", ExtArgs["result"]["proccessedEvent"]>

  export type $ProccessedEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProccessedEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      processedAt: Date
    }, ExtArgs["result"]["proccessedEvent"]>
    composites: {}
  }

  type ProccessedEventGetPayload<S extends boolean | null | undefined | ProccessedEventDefaultArgs> = $Result.GetResult<Prisma.$ProccessedEventPayload, S>

  type ProccessedEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProccessedEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProccessedEventCountAggregateInputType | true
    }

  export interface ProccessedEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProccessedEvent'], meta: { name: 'ProccessedEvent' } }
    /**
     * Find zero or one ProccessedEvent that matches the filter.
     * @param {ProccessedEventFindUniqueArgs} args - Arguments to find a ProccessedEvent
     * @example
     * // Get one ProccessedEvent
     * const proccessedEvent = await prisma.proccessedEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProccessedEventFindUniqueArgs>(args: SelectSubset<T, ProccessedEventFindUniqueArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProccessedEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProccessedEventFindUniqueOrThrowArgs} args - Arguments to find a ProccessedEvent
     * @example
     * // Get one ProccessedEvent
     * const proccessedEvent = await prisma.proccessedEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProccessedEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ProccessedEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProccessedEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProccessedEventFindFirstArgs} args - Arguments to find a ProccessedEvent
     * @example
     * // Get one ProccessedEvent
     * const proccessedEvent = await prisma.proccessedEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProccessedEventFindFirstArgs>(args?: SelectSubset<T, ProccessedEventFindFirstArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProccessedEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProccessedEventFindFirstOrThrowArgs} args - Arguments to find a ProccessedEvent
     * @example
     * // Get one ProccessedEvent
     * const proccessedEvent = await prisma.proccessedEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProccessedEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ProccessedEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProccessedEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProccessedEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProccessedEvents
     * const proccessedEvents = await prisma.proccessedEvent.findMany()
     * 
     * // Get first 10 ProccessedEvents
     * const proccessedEvents = await prisma.proccessedEvent.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const proccessedEventWithEventIdOnly = await prisma.proccessedEvent.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends ProccessedEventFindManyArgs>(args?: SelectSubset<T, ProccessedEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProccessedEvent.
     * @param {ProccessedEventCreateArgs} args - Arguments to create a ProccessedEvent.
     * @example
     * // Create one ProccessedEvent
     * const ProccessedEvent = await prisma.proccessedEvent.create({
     *   data: {
     *     // ... data to create a ProccessedEvent
     *   }
     * })
     * 
     */
    create<T extends ProccessedEventCreateArgs>(args: SelectSubset<T, ProccessedEventCreateArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProccessedEvents.
     * @param {ProccessedEventCreateManyArgs} args - Arguments to create many ProccessedEvents.
     * @example
     * // Create many ProccessedEvents
     * const proccessedEvent = await prisma.proccessedEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProccessedEventCreateManyArgs>(args?: SelectSubset<T, ProccessedEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProccessedEvents and returns the data saved in the database.
     * @param {ProccessedEventCreateManyAndReturnArgs} args - Arguments to create many ProccessedEvents.
     * @example
     * // Create many ProccessedEvents
     * const proccessedEvent = await prisma.proccessedEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProccessedEvents and only return the `eventId`
     * const proccessedEventWithEventIdOnly = await prisma.proccessedEvent.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProccessedEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ProccessedEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProccessedEvent.
     * @param {ProccessedEventDeleteArgs} args - Arguments to delete one ProccessedEvent.
     * @example
     * // Delete one ProccessedEvent
     * const ProccessedEvent = await prisma.proccessedEvent.delete({
     *   where: {
     *     // ... filter to delete one ProccessedEvent
     *   }
     * })
     * 
     */
    delete<T extends ProccessedEventDeleteArgs>(args: SelectSubset<T, ProccessedEventDeleteArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProccessedEvent.
     * @param {ProccessedEventUpdateArgs} args - Arguments to update one ProccessedEvent.
     * @example
     * // Update one ProccessedEvent
     * const proccessedEvent = await prisma.proccessedEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProccessedEventUpdateArgs>(args: SelectSubset<T, ProccessedEventUpdateArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProccessedEvents.
     * @param {ProccessedEventDeleteManyArgs} args - Arguments to filter ProccessedEvents to delete.
     * @example
     * // Delete a few ProccessedEvents
     * const { count } = await prisma.proccessedEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProccessedEventDeleteManyArgs>(args?: SelectSubset<T, ProccessedEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProccessedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProccessedEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProccessedEvents
     * const proccessedEvent = await prisma.proccessedEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProccessedEventUpdateManyArgs>(args: SelectSubset<T, ProccessedEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProccessedEvents and returns the data updated in the database.
     * @param {ProccessedEventUpdateManyAndReturnArgs} args - Arguments to update many ProccessedEvents.
     * @example
     * // Update many ProccessedEvents
     * const proccessedEvent = await prisma.proccessedEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProccessedEvents and only return the `eventId`
     * const proccessedEventWithEventIdOnly = await prisma.proccessedEvent.updateManyAndReturn({
     *   select: { eventId: true },
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
    updateManyAndReturn<T extends ProccessedEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ProccessedEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProccessedEvent.
     * @param {ProccessedEventUpsertArgs} args - Arguments to update or create a ProccessedEvent.
     * @example
     * // Update or create a ProccessedEvent
     * const proccessedEvent = await prisma.proccessedEvent.upsert({
     *   create: {
     *     // ... data to create a ProccessedEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProccessedEvent we want to update
     *   }
     * })
     */
    upsert<T extends ProccessedEventUpsertArgs>(args: SelectSubset<T, ProccessedEventUpsertArgs<ExtArgs>>): Prisma__ProccessedEventClient<$Result.GetResult<Prisma.$ProccessedEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProccessedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProccessedEventCountArgs} args - Arguments to filter ProccessedEvents to count.
     * @example
     * // Count the number of ProccessedEvents
     * const count = await prisma.proccessedEvent.count({
     *   where: {
     *     // ... the filter for the ProccessedEvents we want to count
     *   }
     * })
    **/
    count<T extends ProccessedEventCountArgs>(
      args?: Subset<T, ProccessedEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProccessedEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProccessedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProccessedEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProccessedEventAggregateArgs>(args: Subset<T, ProccessedEventAggregateArgs>): Prisma.PrismaPromise<GetProccessedEventAggregateType<T>>

    /**
     * Group by ProccessedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProccessedEventGroupByArgs} args - Group by arguments.
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
      T extends ProccessedEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProccessedEventGroupByArgs['orderBy'] }
        : { orderBy?: ProccessedEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProccessedEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProccessedEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProccessedEvent model
   */
  readonly fields: ProccessedEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProccessedEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProccessedEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProccessedEvent model
   */
  interface ProccessedEventFieldRefs {
    readonly eventId: FieldRef<"ProccessedEvent", 'String'>
    readonly processedAt: FieldRef<"ProccessedEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProccessedEvent findUnique
   */
  export type ProccessedEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProccessedEvent to fetch.
     */
    where: ProccessedEventWhereUniqueInput
  }

  /**
   * ProccessedEvent findUniqueOrThrow
   */
  export type ProccessedEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProccessedEvent to fetch.
     */
    where: ProccessedEventWhereUniqueInput
  }

  /**
   * ProccessedEvent findFirst
   */
  export type ProccessedEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProccessedEvent to fetch.
     */
    where?: ProccessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProccessedEvents to fetch.
     */
    orderBy?: ProccessedEventOrderByWithRelationInput | ProccessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProccessedEvents.
     */
    cursor?: ProccessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProccessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProccessedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProccessedEvents.
     */
    distinct?: ProccessedEventScalarFieldEnum | ProccessedEventScalarFieldEnum[]
  }

  /**
   * ProccessedEvent findFirstOrThrow
   */
  export type ProccessedEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProccessedEvent to fetch.
     */
    where?: ProccessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProccessedEvents to fetch.
     */
    orderBy?: ProccessedEventOrderByWithRelationInput | ProccessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProccessedEvents.
     */
    cursor?: ProccessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProccessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProccessedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProccessedEvents.
     */
    distinct?: ProccessedEventScalarFieldEnum | ProccessedEventScalarFieldEnum[]
  }

  /**
   * ProccessedEvent findMany
   */
  export type ProccessedEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProccessedEvents to fetch.
     */
    where?: ProccessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProccessedEvents to fetch.
     */
    orderBy?: ProccessedEventOrderByWithRelationInput | ProccessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProccessedEvents.
     */
    cursor?: ProccessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProccessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProccessedEvents.
     */
    skip?: number
    distinct?: ProccessedEventScalarFieldEnum | ProccessedEventScalarFieldEnum[]
  }

  /**
   * ProccessedEvent create
   */
  export type ProccessedEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * The data needed to create a ProccessedEvent.
     */
    data: XOR<ProccessedEventCreateInput, ProccessedEventUncheckedCreateInput>
  }

  /**
   * ProccessedEvent createMany
   */
  export type ProccessedEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProccessedEvents.
     */
    data: ProccessedEventCreateManyInput | ProccessedEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProccessedEvent createManyAndReturn
   */
  export type ProccessedEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * The data used to create many ProccessedEvents.
     */
    data: ProccessedEventCreateManyInput | ProccessedEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProccessedEvent update
   */
  export type ProccessedEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * The data needed to update a ProccessedEvent.
     */
    data: XOR<ProccessedEventUpdateInput, ProccessedEventUncheckedUpdateInput>
    /**
     * Choose, which ProccessedEvent to update.
     */
    where: ProccessedEventWhereUniqueInput
  }

  /**
   * ProccessedEvent updateMany
   */
  export type ProccessedEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProccessedEvents.
     */
    data: XOR<ProccessedEventUpdateManyMutationInput, ProccessedEventUncheckedUpdateManyInput>
    /**
     * Filter which ProccessedEvents to update
     */
    where?: ProccessedEventWhereInput
    /**
     * Limit how many ProccessedEvents to update.
     */
    limit?: number
  }

  /**
   * ProccessedEvent updateManyAndReturn
   */
  export type ProccessedEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * The data used to update ProccessedEvents.
     */
    data: XOR<ProccessedEventUpdateManyMutationInput, ProccessedEventUncheckedUpdateManyInput>
    /**
     * Filter which ProccessedEvents to update
     */
    where?: ProccessedEventWhereInput
    /**
     * Limit how many ProccessedEvents to update.
     */
    limit?: number
  }

  /**
   * ProccessedEvent upsert
   */
  export type ProccessedEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * The filter to search for the ProccessedEvent to update in case it exists.
     */
    where: ProccessedEventWhereUniqueInput
    /**
     * In case the ProccessedEvent found by the `where` argument doesn't exist, create a new ProccessedEvent with this data.
     */
    create: XOR<ProccessedEventCreateInput, ProccessedEventUncheckedCreateInput>
    /**
     * In case the ProccessedEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProccessedEventUpdateInput, ProccessedEventUncheckedUpdateInput>
  }

  /**
   * ProccessedEvent delete
   */
  export type ProccessedEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
    /**
     * Filter which ProccessedEvent to delete.
     */
    where: ProccessedEventWhereUniqueInput
  }

  /**
   * ProccessedEvent deleteMany
   */
  export type ProccessedEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProccessedEvents to delete
     */
    where?: ProccessedEventWhereInput
    /**
     * Limit how many ProccessedEvents to delete.
     */
    limit?: number
  }

  /**
   * ProccessedEvent without action
   */
  export type ProccessedEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProccessedEvent
     */
    select?: ProccessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProccessedEvent
     */
    omit?: ProccessedEventOmit<ExtArgs> | null
  }


  /**
   * Model UserProfiles
   */

  export type AggregateUserProfiles = {
    _count: UserProfilesCountAggregateOutputType | null
    _avg: UserProfilesAvgAggregateOutputType | null
    _sum: UserProfilesSumAggregateOutputType | null
    _min: UserProfilesMinAggregateOutputType | null
    _max: UserProfilesMaxAggregateOutputType | null
  }

  export type UserProfilesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfilesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfilesMinAggregateOutputType = {
    id: number | null
    eventId: string | null
    userId: number | null
    userUuid: string | null
    username: string | null
    email: string | null
    role: string | null
    profileUrl: string | null
    bio: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfilesMaxAggregateOutputType = {
    id: number | null
    eventId: string | null
    userId: number | null
    userUuid: string | null
    username: string | null
    email: string | null
    role: string | null
    profileUrl: string | null
    bio: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfilesCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    userUuid: number
    username: number
    email: number
    role: number
    profileUrl: number
    bio: number
    phoneNumber: number
    statuses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfilesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfilesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfilesMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    userUuid?: true
    username?: true
    email?: true
    role?: true
    profileUrl?: true
    bio?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfilesMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    userUuid?: true
    username?: true
    email?: true
    role?: true
    profileUrl?: true
    bio?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfilesCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    userUuid?: true
    username?: true
    email?: true
    role?: true
    profileUrl?: true
    bio?: true
    phoneNumber?: true
    statuses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to aggregate.
     */
    where?: UserProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfilesOrderByWithRelationInput | UserProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfilesMaxAggregateInputType
  }

  export type GetUserProfilesAggregateType<T extends UserProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfiles[P]>
      : GetScalarType<T[P], AggregateUserProfiles[P]>
  }




  export type UserProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfilesWhereInput
    orderBy?: UserProfilesOrderByWithAggregationInput | UserProfilesOrderByWithAggregationInput[]
    by: UserProfilesScalarFieldEnum[] | UserProfilesScalarFieldEnum
    having?: UserProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfilesCountAggregateInputType | true
    _avg?: UserProfilesAvgAggregateInputType
    _sum?: UserProfilesSumAggregateInputType
    _min?: UserProfilesMinAggregateInputType
    _max?: UserProfilesMaxAggregateInputType
  }

  export type UserProfilesGroupByOutputType = {
    id: number
    eventId: string
    userId: number
    userUuid: string
    username: string
    email: string
    role: string
    profileUrl: string | null
    bio: string | null
    phoneNumber: string | null
    statuses: $Enums.Status[]
    createdAt: Date
    updatedAt: Date
    _count: UserProfilesCountAggregateOutputType | null
    _avg: UserProfilesAvgAggregateOutputType | null
    _sum: UserProfilesSumAggregateOutputType | null
    _min: UserProfilesMinAggregateOutputType | null
    _max: UserProfilesMaxAggregateOutputType | null
  }

  type GetUserProfilesGroupByPayload<T extends UserProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfilesGroupByOutputType[P]>
        }
      >
    >


  export type UserProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    userUuid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profileUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    statuses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfiles"]>

  export type UserProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    userUuid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profileUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    statuses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfiles"]>

  export type UserProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    userUuid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profileUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    statuses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfiles"]>

  export type UserProfilesSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    userUuid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profileUrl?: boolean
    bio?: boolean
    phoneNumber?: boolean
    statuses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "userUuid" | "username" | "email" | "role" | "profileUrl" | "bio" | "phoneNumber" | "statuses" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfiles"]>

  export type $UserProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfiles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: string
      userId: number
      userUuid: string
      username: string
      email: string
      role: string
      profileUrl: string | null
      bio: string | null
      phoneNumber: string | null
      statuses: $Enums.Status[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfiles"]>
    composites: {}
  }

  type UserProfilesGetPayload<S extends boolean | null | undefined | UserProfilesDefaultArgs> = $Result.GetResult<Prisma.$UserProfilesPayload, S>

  type UserProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfilesCountAggregateInputType | true
    }

  export interface UserProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfiles'], meta: { name: 'UserProfiles' } }
    /**
     * Find zero or one UserProfiles that matches the filter.
     * @param {UserProfilesFindUniqueArgs} args - Arguments to find a UserProfiles
     * @example
     * // Get one UserProfiles
     * const userProfiles = await prisma.userProfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfilesFindUniqueArgs>(args: SelectSubset<T, UserProfilesFindUniqueArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfilesFindUniqueOrThrowArgs} args - Arguments to find a UserProfiles
     * @example
     * // Get one UserProfiles
     * const userProfiles = await prisma.userProfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfilesFindFirstArgs} args - Arguments to find a UserProfiles
     * @example
     * // Get one UserProfiles
     * const userProfiles = await prisma.userProfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfilesFindFirstArgs>(args?: SelectSubset<T, UserProfilesFindFirstArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfilesFindFirstOrThrowArgs} args - Arguments to find a UserProfiles
     * @example
     * // Get one UserProfiles
     * const userProfiles = await prisma.userProfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfiles.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfilesWithIdOnly = await prisma.userProfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfilesFindManyArgs>(args?: SelectSubset<T, UserProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfiles.
     * @param {UserProfilesCreateArgs} args - Arguments to create a UserProfiles.
     * @example
     * // Create one UserProfiles
     * const UserProfiles = await prisma.userProfiles.create({
     *   data: {
     *     // ... data to create a UserProfiles
     *   }
     * })
     * 
     */
    create<T extends UserProfilesCreateArgs>(args: SelectSubset<T, UserProfilesCreateArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfilesCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfiles = await prisma.userProfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfilesCreateManyArgs>(args?: SelectSubset<T, UserProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfilesCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfiles = await prisma.userProfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfilesWithIdOnly = await prisma.userProfiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfiles.
     * @param {UserProfilesDeleteArgs} args - Arguments to delete one UserProfiles.
     * @example
     * // Delete one UserProfiles
     * const UserProfiles = await prisma.userProfiles.delete({
     *   where: {
     *     // ... filter to delete one UserProfiles
     *   }
     * })
     * 
     */
    delete<T extends UserProfilesDeleteArgs>(args: SelectSubset<T, UserProfilesDeleteArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfiles.
     * @param {UserProfilesUpdateArgs} args - Arguments to update one UserProfiles.
     * @example
     * // Update one UserProfiles
     * const userProfiles = await prisma.userProfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfilesUpdateArgs>(args: SelectSubset<T, UserProfilesUpdateArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfilesDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfilesDeleteManyArgs>(args?: SelectSubset<T, UserProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfiles = await prisma.userProfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfilesUpdateManyArgs>(args: SelectSubset<T, UserProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfilesUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfiles = await prisma.userProfiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfilesWithIdOnly = await prisma.userProfiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfiles.
     * @param {UserProfilesUpsertArgs} args - Arguments to update or create a UserProfiles.
     * @example
     * // Update or create a UserProfiles
     * const userProfiles = await prisma.userProfiles.upsert({
     *   create: {
     *     // ... data to create a UserProfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfiles we want to update
     *   }
     * })
     */
    upsert<T extends UserProfilesUpsertArgs>(args: SelectSubset<T, UserProfilesUpsertArgs<ExtArgs>>): Prisma__UserProfilesClient<$Result.GetResult<Prisma.$UserProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfilesCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfiles.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfilesCountArgs>(
      args?: Subset<T, UserProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfilesAggregateArgs>(args: Subset<T, UserProfilesAggregateArgs>): Prisma.PrismaPromise<GetUserProfilesAggregateType<T>>

    /**
     * Group by UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfilesGroupByArgs} args - Group by arguments.
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
      T extends UserProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfilesGroupByArgs['orderBy'] }
        : { orderBy?: UserProfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfiles model
   */
  readonly fields: UserProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserProfiles model
   */
  interface UserProfilesFieldRefs {
    readonly id: FieldRef<"UserProfiles", 'Int'>
    readonly eventId: FieldRef<"UserProfiles", 'String'>
    readonly userId: FieldRef<"UserProfiles", 'Int'>
    readonly userUuid: FieldRef<"UserProfiles", 'String'>
    readonly username: FieldRef<"UserProfiles", 'String'>
    readonly email: FieldRef<"UserProfiles", 'String'>
    readonly role: FieldRef<"UserProfiles", 'String'>
    readonly profileUrl: FieldRef<"UserProfiles", 'String'>
    readonly bio: FieldRef<"UserProfiles", 'String'>
    readonly phoneNumber: FieldRef<"UserProfiles", 'String'>
    readonly statuses: FieldRef<"UserProfiles", 'Status[]'>
    readonly createdAt: FieldRef<"UserProfiles", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfiles findUnique
   */
  export type UserProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where: UserProfilesWhereUniqueInput
  }

  /**
   * UserProfiles findUniqueOrThrow
   */
  export type UserProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where: UserProfilesWhereUniqueInput
  }

  /**
   * UserProfiles findFirst
   */
  export type UserProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfilesOrderByWithRelationInput | UserProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfilesScalarFieldEnum | UserProfilesScalarFieldEnum[]
  }

  /**
   * UserProfiles findFirstOrThrow
   */
  export type UserProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfilesOrderByWithRelationInput | UserProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfilesScalarFieldEnum | UserProfilesScalarFieldEnum[]
  }

  /**
   * UserProfiles findMany
   */
  export type UserProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfilesOrderByWithRelationInput | UserProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfilesScalarFieldEnum | UserProfilesScalarFieldEnum[]
  }

  /**
   * UserProfiles create
   */
  export type UserProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * The data needed to create a UserProfiles.
     */
    data: XOR<UserProfilesCreateInput, UserProfilesUncheckedCreateInput>
  }

  /**
   * UserProfiles createMany
   */
  export type UserProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfilesCreateManyInput | UserProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfiles createManyAndReturn
   */
  export type UserProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfilesCreateManyInput | UserProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfiles update
   */
  export type UserProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * The data needed to update a UserProfiles.
     */
    data: XOR<UserProfilesUpdateInput, UserProfilesUncheckedUpdateInput>
    /**
     * Choose, which UserProfiles to update.
     */
    where: UserProfilesWhereUniqueInput
  }

  /**
   * UserProfiles updateMany
   */
  export type UserProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfilesUpdateManyMutationInput, UserProfilesUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfilesWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfiles updateManyAndReturn
   */
  export type UserProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfilesUpdateManyMutationInput, UserProfilesUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfilesWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfiles upsert
   */
  export type UserProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * The filter to search for the UserProfiles to update in case it exists.
     */
    where: UserProfilesWhereUniqueInput
    /**
     * In case the UserProfiles found by the `where` argument doesn't exist, create a new UserProfiles with this data.
     */
    create: XOR<UserProfilesCreateInput, UserProfilesUncheckedCreateInput>
    /**
     * In case the UserProfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfilesUpdateInput, UserProfilesUncheckedUpdateInput>
  }

  /**
   * UserProfiles delete
   */
  export type UserProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
    /**
     * Filter which UserProfiles to delete.
     */
    where: UserProfilesWhereUniqueInput
  }

  /**
   * UserProfiles deleteMany
   */
  export type UserProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfilesWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfiles without action
   */
  export type UserProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfiles
     */
    select?: UserProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfiles
     */
    omit?: UserProfilesOmit<ExtArgs> | null
  }


  /**
   * Model CustomerProfiles
   */

  export type AggregateCustomerProfiles = {
    _count: CustomerProfilesCountAggregateOutputType | null
    _avg: CustomerProfilesAvgAggregateOutputType | null
    _sum: CustomerProfilesSumAggregateOutputType | null
    _min: CustomerProfilesMinAggregateOutputType | null
    _max: CustomerProfilesMaxAggregateOutputType | null
  }

  export type CustomerProfilesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    loyalty_points: number | null
  }

  export type CustomerProfilesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    loyalty_points: number | null
  }

  export type CustomerProfilesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    customer_since: Date | null
    loyalty_points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerProfilesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    customer_since: Date | null
    loyalty_points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerProfilesCountAggregateOutputType = {
    id: number
    user_id: number
    customer_since: number
    loyalty_points: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomerProfilesAvgAggregateInputType = {
    id?: true
    user_id?: true
    loyalty_points?: true
  }

  export type CustomerProfilesSumAggregateInputType = {
    id?: true
    user_id?: true
    loyalty_points?: true
  }

  export type CustomerProfilesMinAggregateInputType = {
    id?: true
    user_id?: true
    customer_since?: true
    loyalty_points?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerProfilesMaxAggregateInputType = {
    id?: true
    user_id?: true
    customer_since?: true
    loyalty_points?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerProfilesCountAggregateInputType = {
    id?: true
    user_id?: true
    customer_since?: true
    loyalty_points?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomerProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerProfiles to aggregate.
     */
    where?: CustomerProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfilesOrderByWithRelationInput | CustomerProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerProfiles
    **/
    _count?: true | CustomerProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerProfilesMaxAggregateInputType
  }

  export type GetCustomerProfilesAggregateType<T extends CustomerProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerProfiles[P]>
      : GetScalarType<T[P], AggregateCustomerProfiles[P]>
  }




  export type CustomerProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerProfilesWhereInput
    orderBy?: CustomerProfilesOrderByWithAggregationInput | CustomerProfilesOrderByWithAggregationInput[]
    by: CustomerProfilesScalarFieldEnum[] | CustomerProfilesScalarFieldEnum
    having?: CustomerProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerProfilesCountAggregateInputType | true
    _avg?: CustomerProfilesAvgAggregateInputType
    _sum?: CustomerProfilesSumAggregateInputType
    _min?: CustomerProfilesMinAggregateInputType
    _max?: CustomerProfilesMaxAggregateInputType
  }

  export type CustomerProfilesGroupByOutputType = {
    id: number
    user_id: number
    customer_since: Date
    loyalty_points: number
    created_at: Date
    updated_at: Date
    _count: CustomerProfilesCountAggregateOutputType | null
    _avg: CustomerProfilesAvgAggregateOutputType | null
    _sum: CustomerProfilesSumAggregateOutputType | null
    _min: CustomerProfilesMinAggregateOutputType | null
    _max: CustomerProfilesMaxAggregateOutputType | null
  }

  type GetCustomerProfilesGroupByPayload<T extends CustomerProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerProfilesGroupByOutputType[P]>
        }
      >
    >


  export type CustomerProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    customer_since?: boolean
    loyalty_points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customerProfiles"]>

  export type CustomerProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    customer_since?: boolean
    loyalty_points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customerProfiles"]>

  export type CustomerProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    customer_since?: boolean
    loyalty_points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customerProfiles"]>

  export type CustomerProfilesSelectScalar = {
    id?: boolean
    user_id?: boolean
    customer_since?: boolean
    loyalty_points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CustomerProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "customer_since" | "loyalty_points" | "created_at" | "updated_at", ExtArgs["result"]["customerProfiles"]>

  export type $CustomerProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerProfiles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      customer_since: Date
      loyalty_points: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["customerProfiles"]>
    composites: {}
  }

  type CustomerProfilesGetPayload<S extends boolean | null | undefined | CustomerProfilesDefaultArgs> = $Result.GetResult<Prisma.$CustomerProfilesPayload, S>

  type CustomerProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerProfilesCountAggregateInputType | true
    }

  export interface CustomerProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerProfiles'], meta: { name: 'CustomerProfiles' } }
    /**
     * Find zero or one CustomerProfiles that matches the filter.
     * @param {CustomerProfilesFindUniqueArgs} args - Arguments to find a CustomerProfiles
     * @example
     * // Get one CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerProfilesFindUniqueArgs>(args: SelectSubset<T, CustomerProfilesFindUniqueArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerProfiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerProfilesFindUniqueOrThrowArgs} args - Arguments to find a CustomerProfiles
     * @example
     * // Get one CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfilesFindFirstArgs} args - Arguments to find a CustomerProfiles
     * @example
     * // Get one CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerProfilesFindFirstArgs>(args?: SelectSubset<T, CustomerProfilesFindFirstArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerProfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfilesFindFirstOrThrowArgs} args - Arguments to find a CustomerProfiles
     * @example
     * // Get one CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.findMany()
     * 
     * // Get first 10 CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerProfilesWithIdOnly = await prisma.customerProfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerProfilesFindManyArgs>(args?: SelectSubset<T, CustomerProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerProfiles.
     * @param {CustomerProfilesCreateArgs} args - Arguments to create a CustomerProfiles.
     * @example
     * // Create one CustomerProfiles
     * const CustomerProfiles = await prisma.customerProfiles.create({
     *   data: {
     *     // ... data to create a CustomerProfiles
     *   }
     * })
     * 
     */
    create<T extends CustomerProfilesCreateArgs>(args: SelectSubset<T, CustomerProfilesCreateArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerProfiles.
     * @param {CustomerProfilesCreateManyArgs} args - Arguments to create many CustomerProfiles.
     * @example
     * // Create many CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerProfilesCreateManyArgs>(args?: SelectSubset<T, CustomerProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerProfiles and returns the data saved in the database.
     * @param {CustomerProfilesCreateManyAndReturnArgs} args - Arguments to create many CustomerProfiles.
     * @example
     * // Create many CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerProfiles and only return the `id`
     * const customerProfilesWithIdOnly = await prisma.customerProfiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerProfiles.
     * @param {CustomerProfilesDeleteArgs} args - Arguments to delete one CustomerProfiles.
     * @example
     * // Delete one CustomerProfiles
     * const CustomerProfiles = await prisma.customerProfiles.delete({
     *   where: {
     *     // ... filter to delete one CustomerProfiles
     *   }
     * })
     * 
     */
    delete<T extends CustomerProfilesDeleteArgs>(args: SelectSubset<T, CustomerProfilesDeleteArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerProfiles.
     * @param {CustomerProfilesUpdateArgs} args - Arguments to update one CustomerProfiles.
     * @example
     * // Update one CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerProfilesUpdateArgs>(args: SelectSubset<T, CustomerProfilesUpdateArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerProfiles.
     * @param {CustomerProfilesDeleteManyArgs} args - Arguments to filter CustomerProfiles to delete.
     * @example
     * // Delete a few CustomerProfiles
     * const { count } = await prisma.customerProfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerProfilesDeleteManyArgs>(args?: SelectSubset<T, CustomerProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerProfilesUpdateManyArgs>(args: SelectSubset<T, CustomerProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerProfiles and returns the data updated in the database.
     * @param {CustomerProfilesUpdateManyAndReturnArgs} args - Arguments to update many CustomerProfiles.
     * @example
     * // Update many CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerProfiles and only return the `id`
     * const customerProfilesWithIdOnly = await prisma.customerProfiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerProfiles.
     * @param {CustomerProfilesUpsertArgs} args - Arguments to update or create a CustomerProfiles.
     * @example
     * // Update or create a CustomerProfiles
     * const customerProfiles = await prisma.customerProfiles.upsert({
     *   create: {
     *     // ... data to create a CustomerProfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerProfiles we want to update
     *   }
     * })
     */
    upsert<T extends CustomerProfilesUpsertArgs>(args: SelectSubset<T, CustomerProfilesUpsertArgs<ExtArgs>>): Prisma__CustomerProfilesClient<$Result.GetResult<Prisma.$CustomerProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfilesCountArgs} args - Arguments to filter CustomerProfiles to count.
     * @example
     * // Count the number of CustomerProfiles
     * const count = await prisma.customerProfiles.count({
     *   where: {
     *     // ... the filter for the CustomerProfiles we want to count
     *   }
     * })
    **/
    count<T extends CustomerProfilesCountArgs>(
      args?: Subset<T, CustomerProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerProfilesAggregateArgs>(args: Subset<T, CustomerProfilesAggregateArgs>): Prisma.PrismaPromise<GetCustomerProfilesAggregateType<T>>

    /**
     * Group by CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfilesGroupByArgs} args - Group by arguments.
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
      T extends CustomerProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerProfilesGroupByArgs['orderBy'] }
        : { orderBy?: CustomerProfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerProfiles model
   */
  readonly fields: CustomerProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerProfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CustomerProfiles model
   */
  interface CustomerProfilesFieldRefs {
    readonly id: FieldRef<"CustomerProfiles", 'Int'>
    readonly user_id: FieldRef<"CustomerProfiles", 'Int'>
    readonly customer_since: FieldRef<"CustomerProfiles", 'DateTime'>
    readonly loyalty_points: FieldRef<"CustomerProfiles", 'Int'>
    readonly created_at: FieldRef<"CustomerProfiles", 'DateTime'>
    readonly updated_at: FieldRef<"CustomerProfiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerProfiles findUnique
   */
  export type CustomerProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * Filter, which CustomerProfiles to fetch.
     */
    where: CustomerProfilesWhereUniqueInput
  }

  /**
   * CustomerProfiles findUniqueOrThrow
   */
  export type CustomerProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * Filter, which CustomerProfiles to fetch.
     */
    where: CustomerProfilesWhereUniqueInput
  }

  /**
   * CustomerProfiles findFirst
   */
  export type CustomerProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * Filter, which CustomerProfiles to fetch.
     */
    where?: CustomerProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfilesOrderByWithRelationInput | CustomerProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerProfiles.
     */
    cursor?: CustomerProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerProfiles.
     */
    distinct?: CustomerProfilesScalarFieldEnum | CustomerProfilesScalarFieldEnum[]
  }

  /**
   * CustomerProfiles findFirstOrThrow
   */
  export type CustomerProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * Filter, which CustomerProfiles to fetch.
     */
    where?: CustomerProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfilesOrderByWithRelationInput | CustomerProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerProfiles.
     */
    cursor?: CustomerProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerProfiles.
     */
    distinct?: CustomerProfilesScalarFieldEnum | CustomerProfilesScalarFieldEnum[]
  }

  /**
   * CustomerProfiles findMany
   */
  export type CustomerProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * Filter, which CustomerProfiles to fetch.
     */
    where?: CustomerProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfilesOrderByWithRelationInput | CustomerProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerProfiles.
     */
    cursor?: CustomerProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    distinct?: CustomerProfilesScalarFieldEnum | CustomerProfilesScalarFieldEnum[]
  }

  /**
   * CustomerProfiles create
   */
  export type CustomerProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomerProfiles.
     */
    data: XOR<CustomerProfilesCreateInput, CustomerProfilesUncheckedCreateInput>
  }

  /**
   * CustomerProfiles createMany
   */
  export type CustomerProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerProfiles.
     */
    data: CustomerProfilesCreateManyInput | CustomerProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerProfiles createManyAndReturn
   */
  export type CustomerProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerProfiles.
     */
    data: CustomerProfilesCreateManyInput | CustomerProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerProfiles update
   */
  export type CustomerProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomerProfiles.
     */
    data: XOR<CustomerProfilesUpdateInput, CustomerProfilesUncheckedUpdateInput>
    /**
     * Choose, which CustomerProfiles to update.
     */
    where: CustomerProfilesWhereUniqueInput
  }

  /**
   * CustomerProfiles updateMany
   */
  export type CustomerProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerProfiles.
     */
    data: XOR<CustomerProfilesUpdateManyMutationInput, CustomerProfilesUncheckedUpdateManyInput>
    /**
     * Filter which CustomerProfiles to update
     */
    where?: CustomerProfilesWhereInput
    /**
     * Limit how many CustomerProfiles to update.
     */
    limit?: number
  }

  /**
   * CustomerProfiles updateManyAndReturn
   */
  export type CustomerProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * The data used to update CustomerProfiles.
     */
    data: XOR<CustomerProfilesUpdateManyMutationInput, CustomerProfilesUncheckedUpdateManyInput>
    /**
     * Filter which CustomerProfiles to update
     */
    where?: CustomerProfilesWhereInput
    /**
     * Limit how many CustomerProfiles to update.
     */
    limit?: number
  }

  /**
   * CustomerProfiles upsert
   */
  export type CustomerProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomerProfiles to update in case it exists.
     */
    where: CustomerProfilesWhereUniqueInput
    /**
     * In case the CustomerProfiles found by the `where` argument doesn't exist, create a new CustomerProfiles with this data.
     */
    create: XOR<CustomerProfilesCreateInput, CustomerProfilesUncheckedCreateInput>
    /**
     * In case the CustomerProfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerProfilesUpdateInput, CustomerProfilesUncheckedUpdateInput>
  }

  /**
   * CustomerProfiles delete
   */
  export type CustomerProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
    /**
     * Filter which CustomerProfiles to delete.
     */
    where: CustomerProfilesWhereUniqueInput
  }

  /**
   * CustomerProfiles deleteMany
   */
  export type CustomerProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerProfiles to delete
     */
    where?: CustomerProfilesWhereInput
    /**
     * Limit how many CustomerProfiles to delete.
     */
    limit?: number
  }

  /**
   * CustomerProfiles without action
   */
  export type CustomerProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfiles
     */
    select?: CustomerProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfiles
     */
    omit?: CustomerProfilesOmit<ExtArgs> | null
  }


  /**
   * Model CustomerAddress
   */

  export type AggregateCustomerAddress = {
    _count: CustomerAddressCountAggregateOutputType | null
    _avg: CustomerAddressAvgAggregateOutputType | null
    _sum: CustomerAddressSumAggregateOutputType | null
    _min: CustomerAddressMinAggregateOutputType | null
    _max: CustomerAddressMaxAggregateOutputType | null
  }

  export type CustomerAddressAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerAddressSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerAddressMinAggregateOutputType = {
    id: number | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    khan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerAddressMaxAggregateOutputType = {
    id: number | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    khan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerAddressCountAggregateOutputType = {
    id: number
    address_line1: number
    address_line2: number
    city: number
    khan: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomerAddressAvgAggregateInputType = {
    id?: true
  }

  export type CustomerAddressSumAggregateInputType = {
    id?: true
  }

  export type CustomerAddressMinAggregateInputType = {
    id?: true
    address_line1?: true
    address_line2?: true
    city?: true
    khan?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerAddressMaxAggregateInputType = {
    id?: true
    address_line1?: true
    address_line2?: true
    city?: true
    khan?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerAddressCountAggregateInputType = {
    id?: true
    address_line1?: true
    address_line2?: true
    city?: true
    khan?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomerAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerAddress to aggregate.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerAddresses
    **/
    _count?: true | CustomerAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerAddressMaxAggregateInputType
  }

  export type GetCustomerAddressAggregateType<T extends CustomerAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerAddress[P]>
      : GetScalarType<T[P], AggregateCustomerAddress[P]>
  }




  export type CustomerAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerAddressWhereInput
    orderBy?: CustomerAddressOrderByWithAggregationInput | CustomerAddressOrderByWithAggregationInput[]
    by: CustomerAddressScalarFieldEnum[] | CustomerAddressScalarFieldEnum
    having?: CustomerAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerAddressCountAggregateInputType | true
    _avg?: CustomerAddressAvgAggregateInputType
    _sum?: CustomerAddressSumAggregateInputType
    _min?: CustomerAddressMinAggregateInputType
    _max?: CustomerAddressMaxAggregateInputType
  }

  export type CustomerAddressGroupByOutputType = {
    id: number
    address_line1: string | null
    address_line2: string | null
    city: string
    khan: string
    created_at: Date
    updated_at: Date
    _count: CustomerAddressCountAggregateOutputType | null
    _avg: CustomerAddressAvgAggregateOutputType | null
    _sum: CustomerAddressSumAggregateOutputType | null
    _min: CustomerAddressMinAggregateOutputType | null
    _max: CustomerAddressMaxAggregateOutputType | null
  }

  type GetCustomerAddressGroupByPayload<T extends CustomerAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerAddressGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerAddressGroupByOutputType[P]>
        }
      >
    >


  export type CustomerAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    khan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customerAddress"]>

  export type CustomerAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    khan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customerAddress"]>

  export type CustomerAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    khan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customerAddress"]>

  export type CustomerAddressSelectScalar = {
    id?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    khan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CustomerAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address_line1" | "address_line2" | "city" | "khan" | "created_at" | "updated_at", ExtArgs["result"]["customerAddress"]>

  export type $CustomerAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerAddress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address_line1: string | null
      address_line2: string | null
      city: string
      khan: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["customerAddress"]>
    composites: {}
  }

  type CustomerAddressGetPayload<S extends boolean | null | undefined | CustomerAddressDefaultArgs> = $Result.GetResult<Prisma.$CustomerAddressPayload, S>

  type CustomerAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerAddressCountAggregateInputType | true
    }

  export interface CustomerAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerAddress'], meta: { name: 'CustomerAddress' } }
    /**
     * Find zero or one CustomerAddress that matches the filter.
     * @param {CustomerAddressFindUniqueArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerAddressFindUniqueArgs>(args: SelectSubset<T, CustomerAddressFindUniqueArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerAddressFindUniqueOrThrowArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindFirstArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerAddressFindFirstArgs>(args?: SelectSubset<T, CustomerAddressFindFirstArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindFirstOrThrowArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerAddresses
     * const customerAddresses = await prisma.customerAddress.findMany()
     * 
     * // Get first 10 CustomerAddresses
     * const customerAddresses = await prisma.customerAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerAddressWithIdOnly = await prisma.customerAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerAddressFindManyArgs>(args?: SelectSubset<T, CustomerAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerAddress.
     * @param {CustomerAddressCreateArgs} args - Arguments to create a CustomerAddress.
     * @example
     * // Create one CustomerAddress
     * const CustomerAddress = await prisma.customerAddress.create({
     *   data: {
     *     // ... data to create a CustomerAddress
     *   }
     * })
     * 
     */
    create<T extends CustomerAddressCreateArgs>(args: SelectSubset<T, CustomerAddressCreateArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerAddresses.
     * @param {CustomerAddressCreateManyArgs} args - Arguments to create many CustomerAddresses.
     * @example
     * // Create many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerAddressCreateManyArgs>(args?: SelectSubset<T, CustomerAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerAddresses and returns the data saved in the database.
     * @param {CustomerAddressCreateManyAndReturnArgs} args - Arguments to create many CustomerAddresses.
     * @example
     * // Create many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerAddresses and only return the `id`
     * const customerAddressWithIdOnly = await prisma.customerAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerAddress.
     * @param {CustomerAddressDeleteArgs} args - Arguments to delete one CustomerAddress.
     * @example
     * // Delete one CustomerAddress
     * const CustomerAddress = await prisma.customerAddress.delete({
     *   where: {
     *     // ... filter to delete one CustomerAddress
     *   }
     * })
     * 
     */
    delete<T extends CustomerAddressDeleteArgs>(args: SelectSubset<T, CustomerAddressDeleteArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerAddress.
     * @param {CustomerAddressUpdateArgs} args - Arguments to update one CustomerAddress.
     * @example
     * // Update one CustomerAddress
     * const customerAddress = await prisma.customerAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerAddressUpdateArgs>(args: SelectSubset<T, CustomerAddressUpdateArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerAddresses.
     * @param {CustomerAddressDeleteManyArgs} args - Arguments to filter CustomerAddresses to delete.
     * @example
     * // Delete a few CustomerAddresses
     * const { count } = await prisma.customerAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerAddressDeleteManyArgs>(args?: SelectSubset<T, CustomerAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerAddressUpdateManyArgs>(args: SelectSubset<T, CustomerAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerAddresses and returns the data updated in the database.
     * @param {CustomerAddressUpdateManyAndReturnArgs} args - Arguments to update many CustomerAddresses.
     * @example
     * // Update many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerAddresses and only return the `id`
     * const customerAddressWithIdOnly = await prisma.customerAddress.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerAddress.
     * @param {CustomerAddressUpsertArgs} args - Arguments to update or create a CustomerAddress.
     * @example
     * // Update or create a CustomerAddress
     * const customerAddress = await prisma.customerAddress.upsert({
     *   create: {
     *     // ... data to create a CustomerAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerAddress we want to update
     *   }
     * })
     */
    upsert<T extends CustomerAddressUpsertArgs>(args: SelectSubset<T, CustomerAddressUpsertArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressCountArgs} args - Arguments to filter CustomerAddresses to count.
     * @example
     * // Count the number of CustomerAddresses
     * const count = await prisma.customerAddress.count({
     *   where: {
     *     // ... the filter for the CustomerAddresses we want to count
     *   }
     * })
    **/
    count<T extends CustomerAddressCountArgs>(
      args?: Subset<T, CustomerAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAddressAggregateArgs>(args: Subset<T, CustomerAddressAggregateArgs>): Prisma.PrismaPromise<GetCustomerAddressAggregateType<T>>

    /**
     * Group by CustomerAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressGroupByArgs} args - Group by arguments.
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
      T extends CustomerAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerAddressGroupByArgs['orderBy'] }
        : { orderBy?: CustomerAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerAddress model
   */
  readonly fields: CustomerAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CustomerAddress model
   */
  interface CustomerAddressFieldRefs {
    readonly id: FieldRef<"CustomerAddress", 'Int'>
    readonly address_line1: FieldRef<"CustomerAddress", 'String'>
    readonly address_line2: FieldRef<"CustomerAddress", 'String'>
    readonly city: FieldRef<"CustomerAddress", 'String'>
    readonly khan: FieldRef<"CustomerAddress", 'String'>
    readonly created_at: FieldRef<"CustomerAddress", 'DateTime'>
    readonly updated_at: FieldRef<"CustomerAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerAddress findUnique
   */
  export type CustomerAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress findUniqueOrThrow
   */
  export type CustomerAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress findFirst
   */
  export type CustomerAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerAddresses.
     */
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress findFirstOrThrow
   */
  export type CustomerAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerAddresses.
     */
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress findMany
   */
  export type CustomerAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * Filter, which CustomerAddresses to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress create
   */
  export type CustomerAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomerAddress.
     */
    data: XOR<CustomerAddressCreateInput, CustomerAddressUncheckedCreateInput>
  }

  /**
   * CustomerAddress createMany
   */
  export type CustomerAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerAddresses.
     */
    data: CustomerAddressCreateManyInput | CustomerAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerAddress createManyAndReturn
   */
  export type CustomerAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerAddresses.
     */
    data: CustomerAddressCreateManyInput | CustomerAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerAddress update
   */
  export type CustomerAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomerAddress.
     */
    data: XOR<CustomerAddressUpdateInput, CustomerAddressUncheckedUpdateInput>
    /**
     * Choose, which CustomerAddress to update.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress updateMany
   */
  export type CustomerAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerAddresses.
     */
    data: XOR<CustomerAddressUpdateManyMutationInput, CustomerAddressUncheckedUpdateManyInput>
    /**
     * Filter which CustomerAddresses to update
     */
    where?: CustomerAddressWhereInput
    /**
     * Limit how many CustomerAddresses to update.
     */
    limit?: number
  }

  /**
   * CustomerAddress updateManyAndReturn
   */
  export type CustomerAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * The data used to update CustomerAddresses.
     */
    data: XOR<CustomerAddressUpdateManyMutationInput, CustomerAddressUncheckedUpdateManyInput>
    /**
     * Filter which CustomerAddresses to update
     */
    where?: CustomerAddressWhereInput
    /**
     * Limit how many CustomerAddresses to update.
     */
    limit?: number
  }

  /**
   * CustomerAddress upsert
   */
  export type CustomerAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomerAddress to update in case it exists.
     */
    where: CustomerAddressWhereUniqueInput
    /**
     * In case the CustomerAddress found by the `where` argument doesn't exist, create a new CustomerAddress with this data.
     */
    create: XOR<CustomerAddressCreateInput, CustomerAddressUncheckedCreateInput>
    /**
     * In case the CustomerAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerAddressUpdateInput, CustomerAddressUncheckedUpdateInput>
  }

  /**
   * CustomerAddress delete
   */
  export type CustomerAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
    /**
     * Filter which CustomerAddress to delete.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress deleteMany
   */
  export type CustomerAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerAddresses to delete
     */
    where?: CustomerAddressWhereInput
    /**
     * Limit how many CustomerAddresses to delete.
     */
    limit?: number
  }

  /**
   * CustomerAddress without action
   */
  export type CustomerAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerAddress
     */
    omit?: CustomerAddressOmit<ExtArgs> | null
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


  export const ProccessedEventScalarFieldEnum: {
    eventId: 'eventId',
    processedAt: 'processedAt'
  };

  export type ProccessedEventScalarFieldEnum = (typeof ProccessedEventScalarFieldEnum)[keyof typeof ProccessedEventScalarFieldEnum]


  export const UserProfilesScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    userUuid: 'userUuid',
    username: 'username',
    email: 'email',
    role: 'role',
    profileUrl: 'profileUrl',
    bio: 'bio',
    phoneNumber: 'phoneNumber',
    statuses: 'statuses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfilesScalarFieldEnum = (typeof UserProfilesScalarFieldEnum)[keyof typeof UserProfilesScalarFieldEnum]


  export const CustomerProfilesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    customer_since: 'customer_since',
    loyalty_points: 'loyalty_points',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CustomerProfilesScalarFieldEnum = (typeof CustomerProfilesScalarFieldEnum)[keyof typeof CustomerProfilesScalarFieldEnum]


  export const CustomerAddressScalarFieldEnum: {
    id: 'id',
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    city: 'city',
    khan: 'khan',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CustomerAddressScalarFieldEnum = (typeof CustomerAddressScalarFieldEnum)[keyof typeof CustomerAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


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


  export type ProccessedEventWhereInput = {
    AND?: ProccessedEventWhereInput | ProccessedEventWhereInput[]
    OR?: ProccessedEventWhereInput[]
    NOT?: ProccessedEventWhereInput | ProccessedEventWhereInput[]
    eventId?: StringFilter<"ProccessedEvent"> | string
    processedAt?: DateTimeFilter<"ProccessedEvent"> | Date | string
  }

  export type ProccessedEventOrderByWithRelationInput = {
    eventId?: SortOrder
    processedAt?: SortOrder
  }

  export type ProccessedEventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: ProccessedEventWhereInput | ProccessedEventWhereInput[]
    OR?: ProccessedEventWhereInput[]
    NOT?: ProccessedEventWhereInput | ProccessedEventWhereInput[]
    processedAt?: DateTimeFilter<"ProccessedEvent"> | Date | string
  }, "eventId">

  export type ProccessedEventOrderByWithAggregationInput = {
    eventId?: SortOrder
    processedAt?: SortOrder
    _count?: ProccessedEventCountOrderByAggregateInput
    _max?: ProccessedEventMaxOrderByAggregateInput
    _min?: ProccessedEventMinOrderByAggregateInput
  }

  export type ProccessedEventScalarWhereWithAggregatesInput = {
    AND?: ProccessedEventScalarWhereWithAggregatesInput | ProccessedEventScalarWhereWithAggregatesInput[]
    OR?: ProccessedEventScalarWhereWithAggregatesInput[]
    NOT?: ProccessedEventScalarWhereWithAggregatesInput | ProccessedEventScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"ProccessedEvent"> | string
    processedAt?: DateTimeWithAggregatesFilter<"ProccessedEvent"> | Date | string
  }

  export type UserProfilesWhereInput = {
    AND?: UserProfilesWhereInput | UserProfilesWhereInput[]
    OR?: UserProfilesWhereInput[]
    NOT?: UserProfilesWhereInput | UserProfilesWhereInput[]
    id?: IntFilter<"UserProfiles"> | number
    eventId?: StringFilter<"UserProfiles"> | string
    userId?: IntFilter<"UserProfiles"> | number
    userUuid?: UuidFilter<"UserProfiles"> | string
    username?: StringFilter<"UserProfiles"> | string
    email?: StringFilter<"UserProfiles"> | string
    role?: StringFilter<"UserProfiles"> | string
    profileUrl?: StringNullableFilter<"UserProfiles"> | string | null
    bio?: StringNullableFilter<"UserProfiles"> | string | null
    phoneNumber?: StringNullableFilter<"UserProfiles"> | string | null
    statuses?: EnumStatusNullableListFilter<"UserProfiles">
    createdAt?: DateTimeFilter<"UserProfiles"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfiles"> | Date | string
  }

  export type UserProfilesOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userUuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    statuses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    eventId?: string
    userId?: number
    userUuid?: string
    AND?: UserProfilesWhereInput | UserProfilesWhereInput[]
    OR?: UserProfilesWhereInput[]
    NOT?: UserProfilesWhereInput | UserProfilesWhereInput[]
    username?: StringFilter<"UserProfiles"> | string
    email?: StringFilter<"UserProfiles"> | string
    role?: StringFilter<"UserProfiles"> | string
    profileUrl?: StringNullableFilter<"UserProfiles"> | string | null
    bio?: StringNullableFilter<"UserProfiles"> | string | null
    phoneNumber?: StringNullableFilter<"UserProfiles"> | string | null
    statuses?: EnumStatusNullableListFilter<"UserProfiles">
    createdAt?: DateTimeFilter<"UserProfiles"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfiles"> | Date | string
  }, "id" | "eventId" | "userId" | "userUuid">

  export type UserProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userUuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    statuses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfilesCountOrderByAggregateInput
    _avg?: UserProfilesAvgOrderByAggregateInput
    _max?: UserProfilesMaxOrderByAggregateInput
    _min?: UserProfilesMinOrderByAggregateInput
    _sum?: UserProfilesSumOrderByAggregateInput
  }

  export type UserProfilesScalarWhereWithAggregatesInput = {
    AND?: UserProfilesScalarWhereWithAggregatesInput | UserProfilesScalarWhereWithAggregatesInput[]
    OR?: UserProfilesScalarWhereWithAggregatesInput[]
    NOT?: UserProfilesScalarWhereWithAggregatesInput | UserProfilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfiles"> | number
    eventId?: StringWithAggregatesFilter<"UserProfiles"> | string
    userId?: IntWithAggregatesFilter<"UserProfiles"> | number
    userUuid?: UuidWithAggregatesFilter<"UserProfiles"> | string
    username?: StringWithAggregatesFilter<"UserProfiles"> | string
    email?: StringWithAggregatesFilter<"UserProfiles"> | string
    role?: StringWithAggregatesFilter<"UserProfiles"> | string
    profileUrl?: StringNullableWithAggregatesFilter<"UserProfiles"> | string | null
    bio?: StringNullableWithAggregatesFilter<"UserProfiles"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"UserProfiles"> | string | null
    statuses?: EnumStatusNullableListFilter<"UserProfiles">
    createdAt?: DateTimeWithAggregatesFilter<"UserProfiles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfiles"> | Date | string
  }

  export type CustomerProfilesWhereInput = {
    AND?: CustomerProfilesWhereInput | CustomerProfilesWhereInput[]
    OR?: CustomerProfilesWhereInput[]
    NOT?: CustomerProfilesWhereInput | CustomerProfilesWhereInput[]
    id?: IntFilter<"CustomerProfiles"> | number
    user_id?: IntFilter<"CustomerProfiles"> | number
    customer_since?: DateTimeFilter<"CustomerProfiles"> | Date | string
    loyalty_points?: IntFilter<"CustomerProfiles"> | number
    created_at?: DateTimeFilter<"CustomerProfiles"> | Date | string
    updated_at?: DateTimeFilter<"CustomerProfiles"> | Date | string
  }

  export type CustomerProfilesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_since?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerProfilesWhereInput | CustomerProfilesWhereInput[]
    OR?: CustomerProfilesWhereInput[]
    NOT?: CustomerProfilesWhereInput | CustomerProfilesWhereInput[]
    user_id?: IntFilter<"CustomerProfiles"> | number
    customer_since?: DateTimeFilter<"CustomerProfiles"> | Date | string
    loyalty_points?: IntFilter<"CustomerProfiles"> | number
    created_at?: DateTimeFilter<"CustomerProfiles"> | Date | string
    updated_at?: DateTimeFilter<"CustomerProfiles"> | Date | string
  }, "id">

  export type CustomerProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_since?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CustomerProfilesCountOrderByAggregateInput
    _avg?: CustomerProfilesAvgOrderByAggregateInput
    _max?: CustomerProfilesMaxOrderByAggregateInput
    _min?: CustomerProfilesMinOrderByAggregateInput
    _sum?: CustomerProfilesSumOrderByAggregateInput
  }

  export type CustomerProfilesScalarWhereWithAggregatesInput = {
    AND?: CustomerProfilesScalarWhereWithAggregatesInput | CustomerProfilesScalarWhereWithAggregatesInput[]
    OR?: CustomerProfilesScalarWhereWithAggregatesInput[]
    NOT?: CustomerProfilesScalarWhereWithAggregatesInput | CustomerProfilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerProfiles"> | number
    user_id?: IntWithAggregatesFilter<"CustomerProfiles"> | number
    customer_since?: DateTimeWithAggregatesFilter<"CustomerProfiles"> | Date | string
    loyalty_points?: IntWithAggregatesFilter<"CustomerProfiles"> | number
    created_at?: DateTimeWithAggregatesFilter<"CustomerProfiles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CustomerProfiles"> | Date | string
  }

  export type CustomerAddressWhereInput = {
    AND?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    OR?: CustomerAddressWhereInput[]
    NOT?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    id?: IntFilter<"CustomerAddress"> | number
    address_line1?: StringNullableFilter<"CustomerAddress"> | string | null
    address_line2?: StringNullableFilter<"CustomerAddress"> | string | null
    city?: StringFilter<"CustomerAddress"> | string
    khan?: StringFilter<"CustomerAddress"> | string
    created_at?: DateTimeFilter<"CustomerAddress"> | Date | string
    updated_at?: DateTimeFilter<"CustomerAddress"> | Date | string
  }

  export type CustomerAddressOrderByWithRelationInput = {
    id?: SortOrder
    address_line1?: SortOrderInput | SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrder
    khan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    OR?: CustomerAddressWhereInput[]
    NOT?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    address_line1?: StringNullableFilter<"CustomerAddress"> | string | null
    address_line2?: StringNullableFilter<"CustomerAddress"> | string | null
    city?: StringFilter<"CustomerAddress"> | string
    khan?: StringFilter<"CustomerAddress"> | string
    created_at?: DateTimeFilter<"CustomerAddress"> | Date | string
    updated_at?: DateTimeFilter<"CustomerAddress"> | Date | string
  }, "id">

  export type CustomerAddressOrderByWithAggregationInput = {
    id?: SortOrder
    address_line1?: SortOrderInput | SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrder
    khan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CustomerAddressCountOrderByAggregateInput
    _avg?: CustomerAddressAvgOrderByAggregateInput
    _max?: CustomerAddressMaxOrderByAggregateInput
    _min?: CustomerAddressMinOrderByAggregateInput
    _sum?: CustomerAddressSumOrderByAggregateInput
  }

  export type CustomerAddressScalarWhereWithAggregatesInput = {
    AND?: CustomerAddressScalarWhereWithAggregatesInput | CustomerAddressScalarWhereWithAggregatesInput[]
    OR?: CustomerAddressScalarWhereWithAggregatesInput[]
    NOT?: CustomerAddressScalarWhereWithAggregatesInput | CustomerAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerAddress"> | number
    address_line1?: StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null
    address_line2?: StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null
    city?: StringWithAggregatesFilter<"CustomerAddress"> | string
    khan?: StringWithAggregatesFilter<"CustomerAddress"> | string
    created_at?: DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string
  }

  export type ProccessedEventCreateInput = {
    eventId: string
    processedAt?: Date | string
  }

  export type ProccessedEventUncheckedCreateInput = {
    eventId: string
    processedAt?: Date | string
  }

  export type ProccessedEventUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProccessedEventUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProccessedEventCreateManyInput = {
    eventId: string
    processedAt?: Date | string
  }

  export type ProccessedEventUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProccessedEventUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfilesCreateInput = {
    eventId: string
    userId: number
    userUuid: string
    username: string
    email: string
    role: string
    profileUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    statuses?: UserProfilesCreatestatusesInput | $Enums.Status[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfilesUncheckedCreateInput = {
    id?: number
    eventId: string
    userId: number
    userUuid: string
    username: string
    email: string
    role: string
    profileUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    statuses?: UserProfilesCreatestatusesInput | $Enums.Status[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfilesUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userUuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    statuses?: UserProfilesUpdatestatusesInput | $Enums.Status[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userUuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    statuses?: UserProfilesUpdatestatusesInput | $Enums.Status[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfilesCreateManyInput = {
    id?: number
    eventId: string
    userId: number
    userUuid: string
    username: string
    email: string
    role: string
    profileUrl?: string | null
    bio?: string | null
    phoneNumber?: string | null
    statuses?: UserProfilesCreatestatusesInput | $Enums.Status[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfilesUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userUuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    statuses?: UserProfilesUpdatestatusesInput | $Enums.Status[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userUuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    statuses?: UserProfilesUpdatestatusesInput | $Enums.Status[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfilesCreateInput = {
    user_id: number
    customer_since?: Date | string
    loyalty_points?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfilesUncheckedCreateInput = {
    id?: number
    user_id: number
    customer_since?: Date | string
    loyalty_points?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfilesUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    customer_since?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_since?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfilesCreateManyInput = {
    id?: number
    user_id: number
    customer_since?: Date | string
    loyalty_points?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfilesUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    customer_since?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_since?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressCreateInput = {
    address_line1?: string | null
    address_line2?: string | null
    city: string
    khan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerAddressUncheckedCreateInput = {
    id?: number
    address_line1?: string | null
    address_line2?: string | null
    city: string
    khan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerAddressUpdateInput = {
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    khan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    khan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressCreateManyInput = {
    id?: number
    address_line1?: string | null
    address_line2?: string | null
    city: string
    khan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerAddressUpdateManyMutationInput = {
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    khan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    khan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ProccessedEventCountOrderByAggregateInput = {
    eventId?: SortOrder
    processedAt?: SortOrder
  }

  export type ProccessedEventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    processedAt?: SortOrder
  }

  export type ProccessedEventMinOrderByAggregateInput = {
    eventId?: SortOrder
    processedAt?: SortOrder
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    has?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userUuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    statuses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfilesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userUuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    userUuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfilesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CustomerProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_since?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerProfilesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    loyalty_points?: SortOrder
  }

  export type CustomerProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_since?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_since?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerProfilesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    loyalty_points?: SortOrder
  }

  export type CustomerAddressCountOrderByAggregateInput = {
    id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    khan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerAddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    khan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerAddressMinOrderByAggregateInput = {
    id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    khan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerAddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfilesCreatestatusesInput = {
    set: $Enums.Status[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserProfilesUpdatestatusesInput = {
    set?: $Enums.Status[]
    push?: $Enums.Status | $Enums.Status[]
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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