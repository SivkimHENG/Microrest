
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
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model MenuItemCategories
 * 
 */
export type MenuItemCategories = $Result.DefaultSelection<Prisma.$MenuItemCategoriesPayload>
/**
 * Model MenuItemVariation
 * 
 */
export type MenuItemVariation = $Result.DefaultSelection<Prisma.$MenuItemVariationPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Outbox
 * 
 */
export type Outbox = $Result.DefaultSelection<Prisma.$OutboxPayload>
/**
 * Model ProccessedEvent
 * 
 */
export type ProccessedEvent = $Result.DefaultSelection<Prisma.$ProccessedEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MenuItems
 * const menuItems = await prisma.menuItem.findMany()
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
   * // Fetch zero or more MenuItems
   * const menuItems = await prisma.menuItem.findMany()
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
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItemCategories`: Exposes CRUD operations for the **MenuItemCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItemCategories
    * const menuItemCategories = await prisma.menuItemCategories.findMany()
    * ```
    */
  get menuItemCategories(): Prisma.MenuItemCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItemVariation`: Exposes CRUD operations for the **MenuItemVariation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItemVariations
    * const menuItemVariations = await prisma.menuItemVariation.findMany()
    * ```
    */
  get menuItemVariation(): Prisma.MenuItemVariationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outbox`: Exposes CRUD operations for the **Outbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outboxes
    * const outboxes = await prisma.outbox.findMany()
    * ```
    */
  get outbox(): Prisma.OutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proccessedEvent`: Exposes CRUD operations for the **ProccessedEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProccessedEvents
    * const proccessedEvents = await prisma.proccessedEvent.findMany()
    * ```
    */
  get proccessedEvent(): Prisma.ProccessedEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
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
    MenuItem: 'MenuItem',
    MenuItemCategories: 'MenuItemCategories',
    MenuItemVariation: 'MenuItemVariation',
    Categories: 'Categories',
    Outbox: 'Outbox',
    ProccessedEvent: 'ProccessedEvent'
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
      modelProps: "menuItem" | "menuItemCategories" | "menuItemVariation" | "categories" | "outbox" | "proccessedEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      MenuItemCategories: {
        payload: Prisma.$MenuItemCategoriesPayload<ExtArgs>
        fields: Prisma.MenuItemCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>
          }
          findFirst: {
            args: Prisma.MenuItemCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>
          }
          findMany: {
            args: Prisma.MenuItemCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>[]
          }
          create: {
            args: Prisma.MenuItemCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>
          }
          createMany: {
            args: Prisma.MenuItemCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>[]
          }
          delete: {
            args: Prisma.MenuItemCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>
          }
          update: {
            args: Prisma.MenuItemCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemCategoriesPayload>
          }
          aggregate: {
            args: Prisma.MenuItemCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItemCategories>
          }
          groupBy: {
            args: Prisma.MenuItemCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCategoriesCountAggregateOutputType> | number
          }
        }
      }
      MenuItemVariation: {
        payload: Prisma.$MenuItemVariationPayload<ExtArgs>
        fields: Prisma.MenuItemVariationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemVariationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemVariationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>
          }
          findFirst: {
            args: Prisma.MenuItemVariationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemVariationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>
          }
          findMany: {
            args: Prisma.MenuItemVariationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>[]
          }
          create: {
            args: Prisma.MenuItemVariationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>
          }
          createMany: {
            args: Prisma.MenuItemVariationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemVariationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>[]
          }
          delete: {
            args: Prisma.MenuItemVariationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>
          }
          update: {
            args: Prisma.MenuItemVariationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemVariationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemVariationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemVariationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemVariationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemVariationPayload>
          }
          aggregate: {
            args: Prisma.MenuItemVariationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItemVariation>
          }
          groupBy: {
            args: Prisma.MenuItemVariationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemVariationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemVariationCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemVariationCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Outbox: {
        payload: Prisma.$OutboxPayload<ExtArgs>
        fields: Prisma.OutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>
          }
          findFirst: {
            args: Prisma.OutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>
          }
          findMany: {
            args: Prisma.OutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>[]
          }
          create: {
            args: Prisma.OutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>
          }
          createMany: {
            args: Prisma.OutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>[]
          }
          delete: {
            args: Prisma.OutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>
          }
          update: {
            args: Prisma.OutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>
          }
          deleteMany: {
            args: Prisma.OutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>[]
          }
          upsert: {
            args: Prisma.OutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxPayload>
          }
          aggregate: {
            args: Prisma.OutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutbox>
          }
          groupBy: {
            args: Prisma.OutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutboxCountArgs<ExtArgs>
            result: $Utils.Optional<OutboxCountAggregateOutputType> | number
          }
        }
      }
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
    menuItem?: MenuItemOmit
    menuItemCategories?: MenuItemCategoriesOmit
    menuItemVariation?: MenuItemVariationOmit
    categories?: CategoriesOmit
    outbox?: OutboxOmit
    proccessedEvent?: ProccessedEventOmit
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
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    menuItemVariant: number
    menuItemCategories: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItemVariant?: boolean | MenuItemCountOutputTypeCountMenuItemVariantArgs
    menuItemCategories?: boolean | MenuItemCountOutputTypeCountMenuItemCategoriesArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountMenuItemVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemVariationWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountMenuItemCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemCategoriesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    menuItemCategories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItemCategories?: boolean | CategoriesCountOutputTypeCountMenuItemCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountMenuItemCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemCategoriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    id: number | null
    basePrice: Decimal | null
    displayOrder: number | null
    categoryId: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    id: number | null
    basePrice: Decimal | null
    displayOrder: number | null
    categoryId: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: number | null
    itemUuid: string | null
    menuItem_name: string | null
    description: string | null
    basePrice: Decimal | null
    imageUrl: string | null
    displayOrder: number | null
    isAvailable: boolean | null
    categoryId: number | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: number | null
    itemUuid: string | null
    menuItem_name: string | null
    description: string | null
    basePrice: Decimal | null
    imageUrl: string | null
    displayOrder: number | null
    isAvailable: boolean | null
    categoryId: number | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    itemUuid: number
    menuItem_name: number
    description: number
    basePrice: number
    imageUrl: number
    displayOrder: number
    isAvailable: number
    categoryId: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    id?: true
    basePrice?: true
    displayOrder?: true
    categoryId?: true
  }

  export type MenuItemSumAggregateInputType = {
    id?: true
    basePrice?: true
    displayOrder?: true
    categoryId?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    itemUuid?: true
    menuItem_name?: true
    description?: true
    basePrice?: true
    imageUrl?: true
    displayOrder?: true
    isAvailable?: true
    categoryId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    itemUuid?: true
    menuItem_name?: true
    description?: true
    basePrice?: true
    imageUrl?: true
    displayOrder?: true
    isAvailable?: true
    categoryId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    itemUuid?: true
    menuItem_name?: true
    description?: true
    basePrice?: true
    imageUrl?: true
    displayOrder?: true
    isAvailable?: true
    categoryId?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: number
    itemUuid: string
    menuItem_name: string
    description: string | null
    basePrice: Decimal
    imageUrl: string | null
    displayOrder: number
    isAvailable: boolean
    categoryId: number
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemUuid?: boolean
    menuItem_name?: boolean
    description?: boolean
    basePrice?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isAvailable?: boolean
    categoryId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menuItemVariant?: boolean | MenuItem$menuItemVariantArgs<ExtArgs>
    menuItemCategories?: boolean | MenuItem$menuItemCategoriesArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemUuid?: boolean
    menuItem_name?: boolean
    description?: boolean
    basePrice?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isAvailable?: boolean
    categoryId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemUuid?: boolean
    menuItem_name?: boolean
    description?: boolean
    basePrice?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isAvailable?: boolean
    categoryId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    itemUuid?: boolean
    menuItem_name?: boolean
    description?: boolean
    basePrice?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    isAvailable?: boolean
    categoryId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemUuid" | "menuItem_name" | "description" | "basePrice" | "imageUrl" | "displayOrder" | "isAvailable" | "categoryId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItemVariant?: boolean | MenuItem$menuItemVariantArgs<ExtArgs>
    menuItemCategories?: boolean | MenuItem$menuItemCategoriesArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      menuItemVariant: Prisma.$MenuItemVariationPayload<ExtArgs>[]
      menuItemCategories: Prisma.$MenuItemCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemUuid: string
      menuItem_name: string
      description: string | null
      basePrice: Prisma.Decimal
      imageUrl: string | null
      displayOrder: number
      isAvailable: boolean
      categoryId: number
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
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
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItemVariant<T extends MenuItem$menuItemVariantArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$menuItemVariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menuItemCategories<T extends MenuItem$menuItemCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$menuItemCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'Int'>
    readonly itemUuid: FieldRef<"MenuItem", 'String'>
    readonly menuItem_name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly basePrice: FieldRef<"MenuItem", 'Decimal'>
    readonly imageUrl: FieldRef<"MenuItem", 'String'>
    readonly displayOrder: FieldRef<"MenuItem", 'Int'>
    readonly isAvailable: FieldRef<"MenuItem", 'Boolean'>
    readonly categoryId: FieldRef<"MenuItem", 'Int'>
    readonly createdBy: FieldRef<"MenuItem", 'String'>
    readonly updatedBy: FieldRef<"MenuItem", 'String'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem.menuItemVariant
   */
  export type MenuItem$menuItemVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    where?: MenuItemVariationWhereInput
    orderBy?: MenuItemVariationOrderByWithRelationInput | MenuItemVariationOrderByWithRelationInput[]
    cursor?: MenuItemVariationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemVariationScalarFieldEnum | MenuItemVariationScalarFieldEnum[]
  }

  /**
   * MenuItem.menuItemCategories
   */
  export type MenuItem$menuItemCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    where?: MenuItemCategoriesWhereInput
    orderBy?: MenuItemCategoriesOrderByWithRelationInput | MenuItemCategoriesOrderByWithRelationInput[]
    cursor?: MenuItemCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemCategoriesScalarFieldEnum | MenuItemCategoriesScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model MenuItemCategories
   */

  export type AggregateMenuItemCategories = {
    _count: MenuItemCategoriesCountAggregateOutputType | null
    _avg: MenuItemCategoriesAvgAggregateOutputType | null
    _sum: MenuItemCategoriesSumAggregateOutputType | null
    _min: MenuItemCategoriesMinAggregateOutputType | null
    _max: MenuItemCategoriesMaxAggregateOutputType | null
  }

  export type MenuItemCategoriesAvgAggregateOutputType = {
    menuItemId: number | null
    categoryId: number | null
  }

  export type MenuItemCategoriesSumAggregateOutputType = {
    menuItemId: number | null
    categoryId: number | null
  }

  export type MenuItemCategoriesMinAggregateOutputType = {
    menuItemId: number | null
    categoryId: number | null
  }

  export type MenuItemCategoriesMaxAggregateOutputType = {
    menuItemId: number | null
    categoryId: number | null
  }

  export type MenuItemCategoriesCountAggregateOutputType = {
    menuItemId: number
    categoryId: number
    _all: number
  }


  export type MenuItemCategoriesAvgAggregateInputType = {
    menuItemId?: true
    categoryId?: true
  }

  export type MenuItemCategoriesSumAggregateInputType = {
    menuItemId?: true
    categoryId?: true
  }

  export type MenuItemCategoriesMinAggregateInputType = {
    menuItemId?: true
    categoryId?: true
  }

  export type MenuItemCategoriesMaxAggregateInputType = {
    menuItemId?: true
    categoryId?: true
  }

  export type MenuItemCategoriesCountAggregateInputType = {
    menuItemId?: true
    categoryId?: true
    _all?: true
  }

  export type MenuItemCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemCategories to aggregate.
     */
    where?: MenuItemCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemCategories to fetch.
     */
    orderBy?: MenuItemCategoriesOrderByWithRelationInput | MenuItemCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItemCategories
    **/
    _count?: true | MenuItemCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemCategoriesMaxAggregateInputType
  }

  export type GetMenuItemCategoriesAggregateType<T extends MenuItemCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItemCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItemCategories[P]>
      : GetScalarType<T[P], AggregateMenuItemCategories[P]>
  }




  export type MenuItemCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemCategoriesWhereInput
    orderBy?: MenuItemCategoriesOrderByWithAggregationInput | MenuItemCategoriesOrderByWithAggregationInput[]
    by: MenuItemCategoriesScalarFieldEnum[] | MenuItemCategoriesScalarFieldEnum
    having?: MenuItemCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCategoriesCountAggregateInputType | true
    _avg?: MenuItemCategoriesAvgAggregateInputType
    _sum?: MenuItemCategoriesSumAggregateInputType
    _min?: MenuItemCategoriesMinAggregateInputType
    _max?: MenuItemCategoriesMaxAggregateInputType
  }

  export type MenuItemCategoriesGroupByOutputType = {
    menuItemId: number
    categoryId: number
    _count: MenuItemCategoriesCountAggregateOutputType | null
    _avg: MenuItemCategoriesAvgAggregateOutputType | null
    _sum: MenuItemCategoriesSumAggregateOutputType | null
    _min: MenuItemCategoriesMinAggregateOutputType | null
    _max: MenuItemCategoriesMaxAggregateOutputType | null
  }

  type GetMenuItemCategoriesGroupByPayload<T extends MenuItemCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuItemId?: boolean
    categoryId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemCategories"]>

  export type MenuItemCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuItemId?: boolean
    categoryId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemCategories"]>

  export type MenuItemCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuItemId?: boolean
    categoryId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemCategories"]>

  export type MenuItemCategoriesSelectScalar = {
    menuItemId?: boolean
    categoryId?: boolean
  }

  export type MenuItemCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menuItemId" | "categoryId", ExtArgs["result"]["menuItemCategories"]>
  export type MenuItemCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type MenuItemCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type MenuItemCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $MenuItemCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItemCategories"
    objects: {
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      menuItemId: number
      categoryId: number
    }, ExtArgs["result"]["menuItemCategories"]>
    composites: {}
  }

  type MenuItemCategoriesGetPayload<S extends boolean | null | undefined | MenuItemCategoriesDefaultArgs> = $Result.GetResult<Prisma.$MenuItemCategoriesPayload, S>

  type MenuItemCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCategoriesCountAggregateInputType | true
    }

  export interface MenuItemCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItemCategories'], meta: { name: 'MenuItemCategories' } }
    /**
     * Find zero or one MenuItemCategories that matches the filter.
     * @param {MenuItemCategoriesFindUniqueArgs} args - Arguments to find a MenuItemCategories
     * @example
     * // Get one MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemCategoriesFindUniqueArgs>(args: SelectSubset<T, MenuItemCategoriesFindUniqueArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItemCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemCategoriesFindUniqueOrThrowArgs} args - Arguments to find a MenuItemCategories
     * @example
     * // Get one MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCategoriesFindFirstArgs} args - Arguments to find a MenuItemCategories
     * @example
     * // Get one MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemCategoriesFindFirstArgs>(args?: SelectSubset<T, MenuItemCategoriesFindFirstArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCategoriesFindFirstOrThrowArgs} args - Arguments to find a MenuItemCategories
     * @example
     * // Get one MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.findMany()
     * 
     * // Get first 10 MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.findMany({ take: 10 })
     * 
     * // Only select the `menuItemId`
     * const menuItemCategoriesWithMenuItemIdOnly = await prisma.menuItemCategories.findMany({ select: { menuItemId: true } })
     * 
     */
    findMany<T extends MenuItemCategoriesFindManyArgs>(args?: SelectSubset<T, MenuItemCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItemCategories.
     * @param {MenuItemCategoriesCreateArgs} args - Arguments to create a MenuItemCategories.
     * @example
     * // Create one MenuItemCategories
     * const MenuItemCategories = await prisma.menuItemCategories.create({
     *   data: {
     *     // ... data to create a MenuItemCategories
     *   }
     * })
     * 
     */
    create<T extends MenuItemCategoriesCreateArgs>(args: SelectSubset<T, MenuItemCategoriesCreateArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItemCategories.
     * @param {MenuItemCategoriesCreateManyArgs} args - Arguments to create many MenuItemCategories.
     * @example
     * // Create many MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCategoriesCreateManyArgs>(args?: SelectSubset<T, MenuItemCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItemCategories and returns the data saved in the database.
     * @param {MenuItemCategoriesCreateManyAndReturnArgs} args - Arguments to create many MenuItemCategories.
     * @example
     * // Create many MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItemCategories and only return the `menuItemId`
     * const menuItemCategoriesWithMenuItemIdOnly = await prisma.menuItemCategories.createManyAndReturn({
     *   select: { menuItemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItemCategories.
     * @param {MenuItemCategoriesDeleteArgs} args - Arguments to delete one MenuItemCategories.
     * @example
     * // Delete one MenuItemCategories
     * const MenuItemCategories = await prisma.menuItemCategories.delete({
     *   where: {
     *     // ... filter to delete one MenuItemCategories
     *   }
     * })
     * 
     */
    delete<T extends MenuItemCategoriesDeleteArgs>(args: SelectSubset<T, MenuItemCategoriesDeleteArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItemCategories.
     * @param {MenuItemCategoriesUpdateArgs} args - Arguments to update one MenuItemCategories.
     * @example
     * // Update one MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemCategoriesUpdateArgs>(args: SelectSubset<T, MenuItemCategoriesUpdateArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItemCategories.
     * @param {MenuItemCategoriesDeleteManyArgs} args - Arguments to filter MenuItemCategories to delete.
     * @example
     * // Delete a few MenuItemCategories
     * const { count } = await prisma.menuItemCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemCategoriesDeleteManyArgs>(args?: SelectSubset<T, MenuItemCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemCategoriesUpdateManyArgs>(args: SelectSubset<T, MenuItemCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItemCategories and returns the data updated in the database.
     * @param {MenuItemCategoriesUpdateManyAndReturnArgs} args - Arguments to update many MenuItemCategories.
     * @example
     * // Update many MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItemCategories and only return the `menuItemId`
     * const menuItemCategoriesWithMenuItemIdOnly = await prisma.menuItemCategories.updateManyAndReturn({
     *   select: { menuItemId: true },
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
    updateManyAndReturn<T extends MenuItemCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItemCategories.
     * @param {MenuItemCategoriesUpsertArgs} args - Arguments to update or create a MenuItemCategories.
     * @example
     * // Update or create a MenuItemCategories
     * const menuItemCategories = await prisma.menuItemCategories.upsert({
     *   create: {
     *     // ... data to create a MenuItemCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItemCategories we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemCategoriesUpsertArgs>(args: SelectSubset<T, MenuItemCategoriesUpsertArgs<ExtArgs>>): Prisma__MenuItemCategoriesClient<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCategoriesCountArgs} args - Arguments to filter MenuItemCategories to count.
     * @example
     * // Count the number of MenuItemCategories
     * const count = await prisma.menuItemCategories.count({
     *   where: {
     *     // ... the filter for the MenuItemCategories we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCategoriesCountArgs>(
      args?: Subset<T, MenuItemCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemCategoriesAggregateArgs>(args: Subset<T, MenuItemCategoriesAggregateArgs>): Prisma.PrismaPromise<GetMenuItemCategoriesAggregateType<T>>

    /**
     * Group by MenuItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCategoriesGroupByArgs} args - Group by arguments.
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
      T extends MenuItemCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItemCategories model
   */
  readonly fields: MenuItemCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItemCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MenuItemCategories model
   */
  interface MenuItemCategoriesFieldRefs {
    readonly menuItemId: FieldRef<"MenuItemCategories", 'Int'>
    readonly categoryId: FieldRef<"MenuItemCategories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MenuItemCategories findUnique
   */
  export type MenuItemCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemCategories to fetch.
     */
    where: MenuItemCategoriesWhereUniqueInput
  }

  /**
   * MenuItemCategories findUniqueOrThrow
   */
  export type MenuItemCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemCategories to fetch.
     */
    where: MenuItemCategoriesWhereUniqueInput
  }

  /**
   * MenuItemCategories findFirst
   */
  export type MenuItemCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemCategories to fetch.
     */
    where?: MenuItemCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemCategories to fetch.
     */
    orderBy?: MenuItemCategoriesOrderByWithRelationInput | MenuItemCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemCategories.
     */
    cursor?: MenuItemCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemCategories.
     */
    distinct?: MenuItemCategoriesScalarFieldEnum | MenuItemCategoriesScalarFieldEnum[]
  }

  /**
   * MenuItemCategories findFirstOrThrow
   */
  export type MenuItemCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemCategories to fetch.
     */
    where?: MenuItemCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemCategories to fetch.
     */
    orderBy?: MenuItemCategoriesOrderByWithRelationInput | MenuItemCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemCategories.
     */
    cursor?: MenuItemCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemCategories.
     */
    distinct?: MenuItemCategoriesScalarFieldEnum | MenuItemCategoriesScalarFieldEnum[]
  }

  /**
   * MenuItemCategories findMany
   */
  export type MenuItemCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemCategories to fetch.
     */
    where?: MenuItemCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemCategories to fetch.
     */
    orderBy?: MenuItemCategoriesOrderByWithRelationInput | MenuItemCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItemCategories.
     */
    cursor?: MenuItemCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemCategories.
     */
    skip?: number
    distinct?: MenuItemCategoriesScalarFieldEnum | MenuItemCategoriesScalarFieldEnum[]
  }

  /**
   * MenuItemCategories create
   */
  export type MenuItemCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItemCategories.
     */
    data: XOR<MenuItemCategoriesCreateInput, MenuItemCategoriesUncheckedCreateInput>
  }

  /**
   * MenuItemCategories createMany
   */
  export type MenuItemCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItemCategories.
     */
    data: MenuItemCategoriesCreateManyInput | MenuItemCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItemCategories createManyAndReturn
   */
  export type MenuItemCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItemCategories.
     */
    data: MenuItemCategoriesCreateManyInput | MenuItemCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItemCategories update
   */
  export type MenuItemCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItemCategories.
     */
    data: XOR<MenuItemCategoriesUpdateInput, MenuItemCategoriesUncheckedUpdateInput>
    /**
     * Choose, which MenuItemCategories to update.
     */
    where: MenuItemCategoriesWhereUniqueInput
  }

  /**
   * MenuItemCategories updateMany
   */
  export type MenuItemCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItemCategories.
     */
    data: XOR<MenuItemCategoriesUpdateManyMutationInput, MenuItemCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which MenuItemCategories to update
     */
    where?: MenuItemCategoriesWhereInput
    /**
     * Limit how many MenuItemCategories to update.
     */
    limit?: number
  }

  /**
   * MenuItemCategories updateManyAndReturn
   */
  export type MenuItemCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update MenuItemCategories.
     */
    data: XOR<MenuItemCategoriesUpdateManyMutationInput, MenuItemCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which MenuItemCategories to update
     */
    where?: MenuItemCategoriesWhereInput
    /**
     * Limit how many MenuItemCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItemCategories upsert
   */
  export type MenuItemCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItemCategories to update in case it exists.
     */
    where: MenuItemCategoriesWhereUniqueInput
    /**
     * In case the MenuItemCategories found by the `where` argument doesn't exist, create a new MenuItemCategories with this data.
     */
    create: XOR<MenuItemCategoriesCreateInput, MenuItemCategoriesUncheckedCreateInput>
    /**
     * In case the MenuItemCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemCategoriesUpdateInput, MenuItemCategoriesUncheckedUpdateInput>
  }

  /**
   * MenuItemCategories delete
   */
  export type MenuItemCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    /**
     * Filter which MenuItemCategories to delete.
     */
    where: MenuItemCategoriesWhereUniqueInput
  }

  /**
   * MenuItemCategories deleteMany
   */
  export type MenuItemCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemCategories to delete
     */
    where?: MenuItemCategoriesWhereInput
    /**
     * Limit how many MenuItemCategories to delete.
     */
    limit?: number
  }

  /**
   * MenuItemCategories without action
   */
  export type MenuItemCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model MenuItemVariation
   */

  export type AggregateMenuItemVariation = {
    _count: MenuItemVariationCountAggregateOutputType | null
    _avg: MenuItemVariationAvgAggregateOutputType | null
    _sum: MenuItemVariationSumAggregateOutputType | null
    _min: MenuItemVariationMinAggregateOutputType | null
    _max: MenuItemVariationMaxAggregateOutputType | null
  }

  export type MenuItemVariationAvgAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    priceAdjustment: Decimal | null
  }

  export type MenuItemVariationSumAggregateOutputType = {
    id: number | null
    menuItemId: number | null
    priceAdjustment: Decimal | null
  }

  export type MenuItemVariationMinAggregateOutputType = {
    id: number | null
    size_name: string | null
    menuItemId: number | null
    priceAdjustment: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemVariationMaxAggregateOutputType = {
    id: number | null
    size_name: string | null
    menuItemId: number | null
    priceAdjustment: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemVariationCountAggregateOutputType = {
    id: number
    size_name: number
    menuItemId: number
    priceAdjustment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemVariationAvgAggregateInputType = {
    id?: true
    menuItemId?: true
    priceAdjustment?: true
  }

  export type MenuItemVariationSumAggregateInputType = {
    id?: true
    menuItemId?: true
    priceAdjustment?: true
  }

  export type MenuItemVariationMinAggregateInputType = {
    id?: true
    size_name?: true
    menuItemId?: true
    priceAdjustment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemVariationMaxAggregateInputType = {
    id?: true
    size_name?: true
    menuItemId?: true
    priceAdjustment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemVariationCountAggregateInputType = {
    id?: true
    size_name?: true
    menuItemId?: true
    priceAdjustment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemVariationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemVariation to aggregate.
     */
    where?: MenuItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemVariations to fetch.
     */
    orderBy?: MenuItemVariationOrderByWithRelationInput | MenuItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItemVariations
    **/
    _count?: true | MenuItemVariationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemVariationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemVariationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemVariationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemVariationMaxAggregateInputType
  }

  export type GetMenuItemVariationAggregateType<T extends MenuItemVariationAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItemVariation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItemVariation[P]>
      : GetScalarType<T[P], AggregateMenuItemVariation[P]>
  }




  export type MenuItemVariationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemVariationWhereInput
    orderBy?: MenuItemVariationOrderByWithAggregationInput | MenuItemVariationOrderByWithAggregationInput[]
    by: MenuItemVariationScalarFieldEnum[] | MenuItemVariationScalarFieldEnum
    having?: MenuItemVariationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemVariationCountAggregateInputType | true
    _avg?: MenuItemVariationAvgAggregateInputType
    _sum?: MenuItemVariationSumAggregateInputType
    _min?: MenuItemVariationMinAggregateInputType
    _max?: MenuItemVariationMaxAggregateInputType
  }

  export type MenuItemVariationGroupByOutputType = {
    id: number
    size_name: string | null
    menuItemId: number
    priceAdjustment: Decimal
    createdAt: Date
    updatedAt: Date
    _count: MenuItemVariationCountAggregateOutputType | null
    _avg: MenuItemVariationAvgAggregateOutputType | null
    _sum: MenuItemVariationSumAggregateOutputType | null
    _min: MenuItemVariationMinAggregateOutputType | null
    _max: MenuItemVariationMaxAggregateOutputType | null
  }

  type GetMenuItemVariationGroupByPayload<T extends MenuItemVariationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemVariationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemVariationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemVariationGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemVariationGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemVariationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size_name?: boolean
    menuItemId?: boolean
    priceAdjustment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemVariation"]>

  export type MenuItemVariationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size_name?: boolean
    menuItemId?: boolean
    priceAdjustment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemVariation"]>

  export type MenuItemVariationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size_name?: boolean
    menuItemId?: boolean
    priceAdjustment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemVariation"]>

  export type MenuItemVariationSelectScalar = {
    id?: boolean
    size_name?: boolean
    menuItemId?: boolean
    priceAdjustment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemVariationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "size_name" | "menuItemId" | "priceAdjustment" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItemVariation"]>
  export type MenuItemVariationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type MenuItemVariationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type MenuItemVariationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $MenuItemVariationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItemVariation"
    objects: {
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      size_name: string | null
      menuItemId: number
      priceAdjustment: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItemVariation"]>
    composites: {}
  }

  type MenuItemVariationGetPayload<S extends boolean | null | undefined | MenuItemVariationDefaultArgs> = $Result.GetResult<Prisma.$MenuItemVariationPayload, S>

  type MenuItemVariationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemVariationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemVariationCountAggregateInputType | true
    }

  export interface MenuItemVariationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItemVariation'], meta: { name: 'MenuItemVariation' } }
    /**
     * Find zero or one MenuItemVariation that matches the filter.
     * @param {MenuItemVariationFindUniqueArgs} args - Arguments to find a MenuItemVariation
     * @example
     * // Get one MenuItemVariation
     * const menuItemVariation = await prisma.menuItemVariation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemVariationFindUniqueArgs>(args: SelectSubset<T, MenuItemVariationFindUniqueArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItemVariation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemVariationFindUniqueOrThrowArgs} args - Arguments to find a MenuItemVariation
     * @example
     * // Get one MenuItemVariation
     * const menuItemVariation = await prisma.menuItemVariation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemVariationFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemVariationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemVariation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemVariationFindFirstArgs} args - Arguments to find a MenuItemVariation
     * @example
     * // Get one MenuItemVariation
     * const menuItemVariation = await prisma.menuItemVariation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemVariationFindFirstArgs>(args?: SelectSubset<T, MenuItemVariationFindFirstArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemVariation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemVariationFindFirstOrThrowArgs} args - Arguments to find a MenuItemVariation
     * @example
     * // Get one MenuItemVariation
     * const menuItemVariation = await prisma.menuItemVariation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemVariationFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemVariationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItemVariations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemVariationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItemVariations
     * const menuItemVariations = await prisma.menuItemVariation.findMany()
     * 
     * // Get first 10 MenuItemVariations
     * const menuItemVariations = await prisma.menuItemVariation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemVariationWithIdOnly = await prisma.menuItemVariation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemVariationFindManyArgs>(args?: SelectSubset<T, MenuItemVariationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItemVariation.
     * @param {MenuItemVariationCreateArgs} args - Arguments to create a MenuItemVariation.
     * @example
     * // Create one MenuItemVariation
     * const MenuItemVariation = await prisma.menuItemVariation.create({
     *   data: {
     *     // ... data to create a MenuItemVariation
     *   }
     * })
     * 
     */
    create<T extends MenuItemVariationCreateArgs>(args: SelectSubset<T, MenuItemVariationCreateArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItemVariations.
     * @param {MenuItemVariationCreateManyArgs} args - Arguments to create many MenuItemVariations.
     * @example
     * // Create many MenuItemVariations
     * const menuItemVariation = await prisma.menuItemVariation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemVariationCreateManyArgs>(args?: SelectSubset<T, MenuItemVariationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItemVariations and returns the data saved in the database.
     * @param {MenuItemVariationCreateManyAndReturnArgs} args - Arguments to create many MenuItemVariations.
     * @example
     * // Create many MenuItemVariations
     * const menuItemVariation = await prisma.menuItemVariation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItemVariations and only return the `id`
     * const menuItemVariationWithIdOnly = await prisma.menuItemVariation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemVariationCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemVariationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItemVariation.
     * @param {MenuItemVariationDeleteArgs} args - Arguments to delete one MenuItemVariation.
     * @example
     * // Delete one MenuItemVariation
     * const MenuItemVariation = await prisma.menuItemVariation.delete({
     *   where: {
     *     // ... filter to delete one MenuItemVariation
     *   }
     * })
     * 
     */
    delete<T extends MenuItemVariationDeleteArgs>(args: SelectSubset<T, MenuItemVariationDeleteArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItemVariation.
     * @param {MenuItemVariationUpdateArgs} args - Arguments to update one MenuItemVariation.
     * @example
     * // Update one MenuItemVariation
     * const menuItemVariation = await prisma.menuItemVariation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemVariationUpdateArgs>(args: SelectSubset<T, MenuItemVariationUpdateArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItemVariations.
     * @param {MenuItemVariationDeleteManyArgs} args - Arguments to filter MenuItemVariations to delete.
     * @example
     * // Delete a few MenuItemVariations
     * const { count } = await prisma.menuItemVariation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemVariationDeleteManyArgs>(args?: SelectSubset<T, MenuItemVariationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItemVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemVariationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItemVariations
     * const menuItemVariation = await prisma.menuItemVariation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemVariationUpdateManyArgs>(args: SelectSubset<T, MenuItemVariationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItemVariations and returns the data updated in the database.
     * @param {MenuItemVariationUpdateManyAndReturnArgs} args - Arguments to update many MenuItemVariations.
     * @example
     * // Update many MenuItemVariations
     * const menuItemVariation = await prisma.menuItemVariation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItemVariations and only return the `id`
     * const menuItemVariationWithIdOnly = await prisma.menuItemVariation.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuItemVariationUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemVariationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItemVariation.
     * @param {MenuItemVariationUpsertArgs} args - Arguments to update or create a MenuItemVariation.
     * @example
     * // Update or create a MenuItemVariation
     * const menuItemVariation = await prisma.menuItemVariation.upsert({
     *   create: {
     *     // ... data to create a MenuItemVariation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItemVariation we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemVariationUpsertArgs>(args: SelectSubset<T, MenuItemVariationUpsertArgs<ExtArgs>>): Prisma__MenuItemVariationClient<$Result.GetResult<Prisma.$MenuItemVariationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItemVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemVariationCountArgs} args - Arguments to filter MenuItemVariations to count.
     * @example
     * // Count the number of MenuItemVariations
     * const count = await prisma.menuItemVariation.count({
     *   where: {
     *     // ... the filter for the MenuItemVariations we want to count
     *   }
     * })
    **/
    count<T extends MenuItemVariationCountArgs>(
      args?: Subset<T, MenuItemVariationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemVariationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItemVariation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemVariationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemVariationAggregateArgs>(args: Subset<T, MenuItemVariationAggregateArgs>): Prisma.PrismaPromise<GetMenuItemVariationAggregateType<T>>

    /**
     * Group by MenuItemVariation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemVariationGroupByArgs} args - Group by arguments.
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
      T extends MenuItemVariationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemVariationGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemVariationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemVariationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemVariationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItemVariation model
   */
  readonly fields: MenuItemVariationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItemVariation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemVariationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MenuItemVariation model
   */
  interface MenuItemVariationFieldRefs {
    readonly id: FieldRef<"MenuItemVariation", 'Int'>
    readonly size_name: FieldRef<"MenuItemVariation", 'String'>
    readonly menuItemId: FieldRef<"MenuItemVariation", 'Int'>
    readonly priceAdjustment: FieldRef<"MenuItemVariation", 'Decimal'>
    readonly createdAt: FieldRef<"MenuItemVariation", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItemVariation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItemVariation findUnique
   */
  export type MenuItemVariationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemVariation to fetch.
     */
    where: MenuItemVariationWhereUniqueInput
  }

  /**
   * MenuItemVariation findUniqueOrThrow
   */
  export type MenuItemVariationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemVariation to fetch.
     */
    where: MenuItemVariationWhereUniqueInput
  }

  /**
   * MenuItemVariation findFirst
   */
  export type MenuItemVariationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemVariation to fetch.
     */
    where?: MenuItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemVariations to fetch.
     */
    orderBy?: MenuItemVariationOrderByWithRelationInput | MenuItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemVariations.
     */
    cursor?: MenuItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemVariations.
     */
    distinct?: MenuItemVariationScalarFieldEnum | MenuItemVariationScalarFieldEnum[]
  }

  /**
   * MenuItemVariation findFirstOrThrow
   */
  export type MenuItemVariationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemVariation to fetch.
     */
    where?: MenuItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemVariations to fetch.
     */
    orderBy?: MenuItemVariationOrderByWithRelationInput | MenuItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemVariations.
     */
    cursor?: MenuItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemVariations.
     */
    distinct?: MenuItemVariationScalarFieldEnum | MenuItemVariationScalarFieldEnum[]
  }

  /**
   * MenuItemVariation findMany
   */
  export type MenuItemVariationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemVariations to fetch.
     */
    where?: MenuItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemVariations to fetch.
     */
    orderBy?: MenuItemVariationOrderByWithRelationInput | MenuItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItemVariations.
     */
    cursor?: MenuItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemVariations.
     */
    skip?: number
    distinct?: MenuItemVariationScalarFieldEnum | MenuItemVariationScalarFieldEnum[]
  }

  /**
   * MenuItemVariation create
   */
  export type MenuItemVariationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItemVariation.
     */
    data: XOR<MenuItemVariationCreateInput, MenuItemVariationUncheckedCreateInput>
  }

  /**
   * MenuItemVariation createMany
   */
  export type MenuItemVariationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItemVariations.
     */
    data: MenuItemVariationCreateManyInput | MenuItemVariationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItemVariation createManyAndReturn
   */
  export type MenuItemVariationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItemVariations.
     */
    data: MenuItemVariationCreateManyInput | MenuItemVariationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItemVariation update
   */
  export type MenuItemVariationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItemVariation.
     */
    data: XOR<MenuItemVariationUpdateInput, MenuItemVariationUncheckedUpdateInput>
    /**
     * Choose, which MenuItemVariation to update.
     */
    where: MenuItemVariationWhereUniqueInput
  }

  /**
   * MenuItemVariation updateMany
   */
  export type MenuItemVariationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItemVariations.
     */
    data: XOR<MenuItemVariationUpdateManyMutationInput, MenuItemVariationUncheckedUpdateManyInput>
    /**
     * Filter which MenuItemVariations to update
     */
    where?: MenuItemVariationWhereInput
    /**
     * Limit how many MenuItemVariations to update.
     */
    limit?: number
  }

  /**
   * MenuItemVariation updateManyAndReturn
   */
  export type MenuItemVariationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * The data used to update MenuItemVariations.
     */
    data: XOR<MenuItemVariationUpdateManyMutationInput, MenuItemVariationUncheckedUpdateManyInput>
    /**
     * Filter which MenuItemVariations to update
     */
    where?: MenuItemVariationWhereInput
    /**
     * Limit how many MenuItemVariations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItemVariation upsert
   */
  export type MenuItemVariationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItemVariation to update in case it exists.
     */
    where: MenuItemVariationWhereUniqueInput
    /**
     * In case the MenuItemVariation found by the `where` argument doesn't exist, create a new MenuItemVariation with this data.
     */
    create: XOR<MenuItemVariationCreateInput, MenuItemVariationUncheckedCreateInput>
    /**
     * In case the MenuItemVariation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemVariationUpdateInput, MenuItemVariationUncheckedUpdateInput>
  }

  /**
   * MenuItemVariation delete
   */
  export type MenuItemVariationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
    /**
     * Filter which MenuItemVariation to delete.
     */
    where: MenuItemVariationWhereUniqueInput
  }

  /**
   * MenuItemVariation deleteMany
   */
  export type MenuItemVariationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemVariations to delete
     */
    where?: MenuItemVariationWhereInput
    /**
     * Limit how many MenuItemVariations to delete.
     */
    limit?: number
  }

  /**
   * MenuItemVariation without action
   */
  export type MenuItemVariationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemVariation
     */
    select?: MenuItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemVariation
     */
    omit?: MenuItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemVariationInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    categoryUuid: string | null
    category_name: string | null
    description: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    categoryUuid: string | null
    category_name: string | null
    description: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    categoryUuid: number
    category_name: number
    description: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    categoryUuid?: true
    category_name?: true
    description?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    categoryUuid?: true
    category_name?: true
    description?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    categoryUuid?: true
    category_name?: true
    description?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    categoryUuid: string
    category_name: string | null
    description: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryUuid?: boolean
    category_name?: boolean
    description?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menuItemCategories?: boolean | Categories$menuItemCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryUuid?: boolean
    category_name?: boolean
    description?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryUuid?: boolean
    category_name?: boolean
    description?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    categoryUuid?: boolean
    category_name?: boolean
    description?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryUuid" | "category_name" | "description" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItemCategories?: boolean | Categories$menuItemCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      menuItemCategories: Prisma.$MenuItemCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryUuid: string
      category_name: string | null
      description: string | null
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItemCategories<T extends Categories$menuItemCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$menuItemCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly categoryUuid: FieldRef<"Categories", 'String'>
    readonly category_name: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
    readonly createdBy: FieldRef<"Categories", 'String'>
    readonly updatedBy: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.menuItemCategories
   */
  export type Categories$menuItemCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCategories
     */
    select?: MenuItemCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemCategories
     */
    omit?: MenuItemCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemCategoriesInclude<ExtArgs> | null
    where?: MenuItemCategoriesWhereInput
    orderBy?: MenuItemCategoriesOrderByWithRelationInput | MenuItemCategoriesOrderByWithRelationInput[]
    cursor?: MenuItemCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemCategoriesScalarFieldEnum | MenuItemCategoriesScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Outbox
   */

  export type AggregateOutbox = {
    _count: OutboxCountAggregateOutputType | null
    _avg: OutboxAvgAggregateOutputType | null
    _sum: OutboxSumAggregateOutputType | null
    _min: OutboxMinAggregateOutputType | null
    _max: OutboxMaxAggregateOutputType | null
  }

  export type OutboxAvgAggregateOutputType = {
    version: number | null
  }

  export type OutboxSumAggregateOutputType = {
    version: number | null
  }

  export type OutboxMinAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: string | null
    type: string | null
    version: number | null
    occurredAt: Date | null
    status: string | null
  }

  export type OutboxMaxAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: string | null
    type: string | null
    version: number | null
    occurredAt: Date | null
    status: string | null
  }

  export type OutboxCountAggregateOutputType = {
    id: number
    aggregateType: number
    aggregateId: number
    type: number
    version: number
    payload: number
    occurredAt: number
    status: number
    _all: number
  }


  export type OutboxAvgAggregateInputType = {
    version?: true
  }

  export type OutboxSumAggregateInputType = {
    version?: true
  }

  export type OutboxMinAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    type?: true
    version?: true
    occurredAt?: true
    status?: true
  }

  export type OutboxMaxAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    type?: true
    version?: true
    occurredAt?: true
    status?: true
  }

  export type OutboxCountAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    type?: true
    version?: true
    payload?: true
    occurredAt?: true
    status?: true
    _all?: true
  }

  export type OutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outbox to aggregate.
     */
    where?: OutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outboxes to fetch.
     */
    orderBy?: OutboxOrderByWithRelationInput | OutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outboxes
    **/
    _count?: true | OutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutboxMaxAggregateInputType
  }

  export type GetOutboxAggregateType<T extends OutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutbox[P]>
      : GetScalarType<T[P], AggregateOutbox[P]>
  }




  export type OutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboxWhereInput
    orderBy?: OutboxOrderByWithAggregationInput | OutboxOrderByWithAggregationInput[]
    by: OutboxScalarFieldEnum[] | OutboxScalarFieldEnum
    having?: OutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutboxCountAggregateInputType | true
    _avg?: OutboxAvgAggregateInputType
    _sum?: OutboxSumAggregateInputType
    _min?: OutboxMinAggregateInputType
    _max?: OutboxMaxAggregateInputType
  }

  export type OutboxGroupByOutputType = {
    id: string
    aggregateType: string
    aggregateId: string
    type: string
    version: number
    payload: JsonValue
    occurredAt: Date
    status: string
    _count: OutboxCountAggregateOutputType | null
    _avg: OutboxAvgAggregateOutputType | null
    _sum: OutboxSumAggregateOutputType | null
    _min: OutboxMinAggregateOutputType | null
    _max: OutboxMaxAggregateOutputType | null
  }

  type GetOutboxGroupByPayload<T extends OutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutboxGroupByOutputType[P]>
            : GetScalarType<T[P], OutboxGroupByOutputType[P]>
        }
      >
    >


  export type OutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    type?: boolean
    version?: boolean
    payload?: boolean
    occurredAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["outbox"]>

  export type OutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    type?: boolean
    version?: boolean
    payload?: boolean
    occurredAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["outbox"]>

  export type OutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    type?: boolean
    version?: boolean
    payload?: boolean
    occurredAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["outbox"]>

  export type OutboxSelectScalar = {
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    type?: boolean
    version?: boolean
    payload?: boolean
    occurredAt?: boolean
    status?: boolean
  }

  export type OutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aggregateType" | "aggregateId" | "type" | "version" | "payload" | "occurredAt" | "status", ExtArgs["result"]["outbox"]>

  export type $OutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aggregateType: string
      aggregateId: string
      type: string
      version: number
      payload: Prisma.JsonValue
      occurredAt: Date
      status: string
    }, ExtArgs["result"]["outbox"]>
    composites: {}
  }

  type OutboxGetPayload<S extends boolean | null | undefined | OutboxDefaultArgs> = $Result.GetResult<Prisma.$OutboxPayload, S>

  type OutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutboxCountAggregateInputType | true
    }

  export interface OutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outbox'], meta: { name: 'Outbox' } }
    /**
     * Find zero or one Outbox that matches the filter.
     * @param {OutboxFindUniqueArgs} args - Arguments to find a Outbox
     * @example
     * // Get one Outbox
     * const outbox = await prisma.outbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutboxFindUniqueArgs>(args: SelectSubset<T, OutboxFindUniqueArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutboxFindUniqueOrThrowArgs} args - Arguments to find a Outbox
     * @example
     * // Get one Outbox
     * const outbox = await prisma.outbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, OutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxFindFirstArgs} args - Arguments to find a Outbox
     * @example
     * // Get one Outbox
     * const outbox = await prisma.outbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutboxFindFirstArgs>(args?: SelectSubset<T, OutboxFindFirstArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxFindFirstOrThrowArgs} args - Arguments to find a Outbox
     * @example
     * // Get one Outbox
     * const outbox = await prisma.outbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, OutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outboxes
     * const outboxes = await prisma.outbox.findMany()
     * 
     * // Get first 10 Outboxes
     * const outboxes = await prisma.outbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outboxWithIdOnly = await prisma.outbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutboxFindManyArgs>(args?: SelectSubset<T, OutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outbox.
     * @param {OutboxCreateArgs} args - Arguments to create a Outbox.
     * @example
     * // Create one Outbox
     * const Outbox = await prisma.outbox.create({
     *   data: {
     *     // ... data to create a Outbox
     *   }
     * })
     * 
     */
    create<T extends OutboxCreateArgs>(args: SelectSubset<T, OutboxCreateArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outboxes.
     * @param {OutboxCreateManyArgs} args - Arguments to create many Outboxes.
     * @example
     * // Create many Outboxes
     * const outbox = await prisma.outbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutboxCreateManyArgs>(args?: SelectSubset<T, OutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outboxes and returns the data saved in the database.
     * @param {OutboxCreateManyAndReturnArgs} args - Arguments to create many Outboxes.
     * @example
     * // Create many Outboxes
     * const outbox = await prisma.outbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outboxes and only return the `id`
     * const outboxWithIdOnly = await prisma.outbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, OutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outbox.
     * @param {OutboxDeleteArgs} args - Arguments to delete one Outbox.
     * @example
     * // Delete one Outbox
     * const Outbox = await prisma.outbox.delete({
     *   where: {
     *     // ... filter to delete one Outbox
     *   }
     * })
     * 
     */
    delete<T extends OutboxDeleteArgs>(args: SelectSubset<T, OutboxDeleteArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outbox.
     * @param {OutboxUpdateArgs} args - Arguments to update one Outbox.
     * @example
     * // Update one Outbox
     * const outbox = await prisma.outbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutboxUpdateArgs>(args: SelectSubset<T, OutboxUpdateArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outboxes.
     * @param {OutboxDeleteManyArgs} args - Arguments to filter Outboxes to delete.
     * @example
     * // Delete a few Outboxes
     * const { count } = await prisma.outbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutboxDeleteManyArgs>(args?: SelectSubset<T, OutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outboxes
     * const outbox = await prisma.outbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutboxUpdateManyArgs>(args: SelectSubset<T, OutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outboxes and returns the data updated in the database.
     * @param {OutboxUpdateManyAndReturnArgs} args - Arguments to update many Outboxes.
     * @example
     * // Update many Outboxes
     * const outbox = await prisma.outbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outboxes and only return the `id`
     * const outboxWithIdOnly = await prisma.outbox.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, OutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outbox.
     * @param {OutboxUpsertArgs} args - Arguments to update or create a Outbox.
     * @example
     * // Update or create a Outbox
     * const outbox = await prisma.outbox.upsert({
     *   create: {
     *     // ... data to create a Outbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outbox we want to update
     *   }
     * })
     */
    upsert<T extends OutboxUpsertArgs>(args: SelectSubset<T, OutboxUpsertArgs<ExtArgs>>): Prisma__OutboxClient<$Result.GetResult<Prisma.$OutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxCountArgs} args - Arguments to filter Outboxes to count.
     * @example
     * // Count the number of Outboxes
     * const count = await prisma.outbox.count({
     *   where: {
     *     // ... the filter for the Outboxes we want to count
     *   }
     * })
    **/
    count<T extends OutboxCountArgs>(
      args?: Subset<T, OutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutboxAggregateArgs>(args: Subset<T, OutboxAggregateArgs>): Prisma.PrismaPromise<GetOutboxAggregateType<T>>

    /**
     * Group by Outbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxGroupByArgs} args - Group by arguments.
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
      T extends OutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutboxGroupByArgs['orderBy'] }
        : { orderBy?: OutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outbox model
   */
  readonly fields: OutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Outbox model
   */
  interface OutboxFieldRefs {
    readonly id: FieldRef<"Outbox", 'String'>
    readonly aggregateType: FieldRef<"Outbox", 'String'>
    readonly aggregateId: FieldRef<"Outbox", 'String'>
    readonly type: FieldRef<"Outbox", 'String'>
    readonly version: FieldRef<"Outbox", 'Int'>
    readonly payload: FieldRef<"Outbox", 'Json'>
    readonly occurredAt: FieldRef<"Outbox", 'DateTime'>
    readonly status: FieldRef<"Outbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Outbox findUnique
   */
  export type OutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * Filter, which Outbox to fetch.
     */
    where: OutboxWhereUniqueInput
  }

  /**
   * Outbox findUniqueOrThrow
   */
  export type OutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * Filter, which Outbox to fetch.
     */
    where: OutboxWhereUniqueInput
  }

  /**
   * Outbox findFirst
   */
  export type OutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * Filter, which Outbox to fetch.
     */
    where?: OutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outboxes to fetch.
     */
    orderBy?: OutboxOrderByWithRelationInput | OutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outboxes.
     */
    cursor?: OutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outboxes.
     */
    distinct?: OutboxScalarFieldEnum | OutboxScalarFieldEnum[]
  }

  /**
   * Outbox findFirstOrThrow
   */
  export type OutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * Filter, which Outbox to fetch.
     */
    where?: OutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outboxes to fetch.
     */
    orderBy?: OutboxOrderByWithRelationInput | OutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outboxes.
     */
    cursor?: OutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outboxes.
     */
    distinct?: OutboxScalarFieldEnum | OutboxScalarFieldEnum[]
  }

  /**
   * Outbox findMany
   */
  export type OutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * Filter, which Outboxes to fetch.
     */
    where?: OutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outboxes to fetch.
     */
    orderBy?: OutboxOrderByWithRelationInput | OutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outboxes.
     */
    cursor?: OutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outboxes.
     */
    skip?: number
    distinct?: OutboxScalarFieldEnum | OutboxScalarFieldEnum[]
  }

  /**
   * Outbox create
   */
  export type OutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * The data needed to create a Outbox.
     */
    data: XOR<OutboxCreateInput, OutboxUncheckedCreateInput>
  }

  /**
   * Outbox createMany
   */
  export type OutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outboxes.
     */
    data: OutboxCreateManyInput | OutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outbox createManyAndReturn
   */
  export type OutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * The data used to create many Outboxes.
     */
    data: OutboxCreateManyInput | OutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outbox update
   */
  export type OutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * The data needed to update a Outbox.
     */
    data: XOR<OutboxUpdateInput, OutboxUncheckedUpdateInput>
    /**
     * Choose, which Outbox to update.
     */
    where: OutboxWhereUniqueInput
  }

  /**
   * Outbox updateMany
   */
  export type OutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outboxes.
     */
    data: XOR<OutboxUpdateManyMutationInput, OutboxUncheckedUpdateManyInput>
    /**
     * Filter which Outboxes to update
     */
    where?: OutboxWhereInput
    /**
     * Limit how many Outboxes to update.
     */
    limit?: number
  }

  /**
   * Outbox updateManyAndReturn
   */
  export type OutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * The data used to update Outboxes.
     */
    data: XOR<OutboxUpdateManyMutationInput, OutboxUncheckedUpdateManyInput>
    /**
     * Filter which Outboxes to update
     */
    where?: OutboxWhereInput
    /**
     * Limit how many Outboxes to update.
     */
    limit?: number
  }

  /**
   * Outbox upsert
   */
  export type OutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * The filter to search for the Outbox to update in case it exists.
     */
    where: OutboxWhereUniqueInput
    /**
     * In case the Outbox found by the `where` argument doesn't exist, create a new Outbox with this data.
     */
    create: XOR<OutboxCreateInput, OutboxUncheckedCreateInput>
    /**
     * In case the Outbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutboxUpdateInput, OutboxUncheckedUpdateInput>
  }

  /**
   * Outbox delete
   */
  export type OutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
    /**
     * Filter which Outbox to delete.
     */
    where: OutboxWhereUniqueInput
  }

  /**
   * Outbox deleteMany
   */
  export type OutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outboxes to delete
     */
    where?: OutboxWhereInput
    /**
     * Limit how many Outboxes to delete.
     */
    limit?: number
  }

  /**
   * Outbox without action
   */
  export type OutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbox
     */
    select?: OutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbox
     */
    omit?: OutboxOmit<ExtArgs> | null
  }


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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    itemUuid: 'itemUuid',
    menuItem_name: 'menuItem_name',
    description: 'description',
    basePrice: 'basePrice',
    imageUrl: 'imageUrl',
    displayOrder: 'displayOrder',
    isAvailable: 'isAvailable',
    categoryId: 'categoryId',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const MenuItemCategoriesScalarFieldEnum: {
    menuItemId: 'menuItemId',
    categoryId: 'categoryId'
  };

  export type MenuItemCategoriesScalarFieldEnum = (typeof MenuItemCategoriesScalarFieldEnum)[keyof typeof MenuItemCategoriesScalarFieldEnum]


  export const MenuItemVariationScalarFieldEnum: {
    id: 'id',
    size_name: 'size_name',
    menuItemId: 'menuItemId',
    priceAdjustment: 'priceAdjustment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemVariationScalarFieldEnum = (typeof MenuItemVariationScalarFieldEnum)[keyof typeof MenuItemVariationScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    categoryUuid: 'categoryUuid',
    category_name: 'category_name',
    description: 'description',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const OutboxScalarFieldEnum: {
    id: 'id',
    aggregateType: 'aggregateType',
    aggregateId: 'aggregateId',
    type: 'type',
    version: 'version',
    payload: 'payload',
    occurredAt: 'occurredAt',
    status: 'status'
  };

  export type OutboxScalarFieldEnum = (typeof OutboxScalarFieldEnum)[keyof typeof OutboxScalarFieldEnum]


  export const ProccessedEventScalarFieldEnum: {
    eventId: 'eventId',
    processedAt: 'processedAt'
  };

  export type ProccessedEventScalarFieldEnum = (typeof ProccessedEventScalarFieldEnum)[keyof typeof ProccessedEventScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: IntFilter<"MenuItem"> | number
    itemUuid?: UuidFilter<"MenuItem"> | string
    menuItem_name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    basePrice?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    displayOrder?: IntFilter<"MenuItem"> | number
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    categoryId?: IntFilter<"MenuItem"> | number
    createdBy?: StringNullableFilter<"MenuItem"> | string | null
    updatedBy?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    menuItemVariant?: MenuItemVariationListRelationFilter
    menuItemCategories?: MenuItemCategoriesListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    itemUuid?: SortOrder
    menuItem_name?: SortOrder
    description?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuItemVariant?: MenuItemVariationOrderByRelationAggregateInput
    menuItemCategories?: MenuItemCategoriesOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    itemUuid?: string
    menuItem_name?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    description?: StringNullableFilter<"MenuItem"> | string | null
    basePrice?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    displayOrder?: IntFilter<"MenuItem"> | number
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    categoryId?: IntFilter<"MenuItem"> | number
    createdBy?: StringNullableFilter<"MenuItem"> | string | null
    updatedBy?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    menuItemVariant?: MenuItemVariationListRelationFilter
    menuItemCategories?: MenuItemCategoriesListRelationFilter
  }, "id" | "itemUuid" | "menuItem_name">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    itemUuid?: SortOrder
    menuItem_name?: SortOrder
    description?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuItem"> | number
    itemUuid?: UuidWithAggregatesFilter<"MenuItem"> | string
    menuItem_name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    basePrice?: DecimalWithAggregatesFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    displayOrder?: IntWithAggregatesFilter<"MenuItem"> | number
    isAvailable?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    categoryId?: IntWithAggregatesFilter<"MenuItem"> | number
    createdBy?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type MenuItemCategoriesWhereInput = {
    AND?: MenuItemCategoriesWhereInput | MenuItemCategoriesWhereInput[]
    OR?: MenuItemCategoriesWhereInput[]
    NOT?: MenuItemCategoriesWhereInput | MenuItemCategoriesWhereInput[]
    menuItemId?: IntFilter<"MenuItemCategories"> | number
    categoryId?: IntFilter<"MenuItemCategories"> | number
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }

  export type MenuItemCategoriesOrderByWithRelationInput = {
    menuItemId?: SortOrder
    categoryId?: SortOrder
    menuItem?: MenuItemOrderByWithRelationInput
    category?: CategoriesOrderByWithRelationInput
  }

  export type MenuItemCategoriesWhereUniqueInput = Prisma.AtLeast<{
    menuItemId_categoryId?: MenuItemCategoriesMenuItemIdCategoryIdCompoundUniqueInput
    AND?: MenuItemCategoriesWhereInput | MenuItemCategoriesWhereInput[]
    OR?: MenuItemCategoriesWhereInput[]
    NOT?: MenuItemCategoriesWhereInput | MenuItemCategoriesWhereInput[]
    menuItemId?: IntFilter<"MenuItemCategories"> | number
    categoryId?: IntFilter<"MenuItemCategories"> | number
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }, "menuItemId_categoryId">

  export type MenuItemCategoriesOrderByWithAggregationInput = {
    menuItemId?: SortOrder
    categoryId?: SortOrder
    _count?: MenuItemCategoriesCountOrderByAggregateInput
    _avg?: MenuItemCategoriesAvgOrderByAggregateInput
    _max?: MenuItemCategoriesMaxOrderByAggregateInput
    _min?: MenuItemCategoriesMinOrderByAggregateInput
    _sum?: MenuItemCategoriesSumOrderByAggregateInput
  }

  export type MenuItemCategoriesScalarWhereWithAggregatesInput = {
    AND?: MenuItemCategoriesScalarWhereWithAggregatesInput | MenuItemCategoriesScalarWhereWithAggregatesInput[]
    OR?: MenuItemCategoriesScalarWhereWithAggregatesInput[]
    NOT?: MenuItemCategoriesScalarWhereWithAggregatesInput | MenuItemCategoriesScalarWhereWithAggregatesInput[]
    menuItemId?: IntWithAggregatesFilter<"MenuItemCategories"> | number
    categoryId?: IntWithAggregatesFilter<"MenuItemCategories"> | number
  }

  export type MenuItemVariationWhereInput = {
    AND?: MenuItemVariationWhereInput | MenuItemVariationWhereInput[]
    OR?: MenuItemVariationWhereInput[]
    NOT?: MenuItemVariationWhereInput | MenuItemVariationWhereInput[]
    id?: IntFilter<"MenuItemVariation"> | number
    size_name?: StringNullableFilter<"MenuItemVariation"> | string | null
    menuItemId?: IntFilter<"MenuItemVariation"> | number
    priceAdjustment?: DecimalFilter<"MenuItemVariation"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MenuItemVariation"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItemVariation"> | Date | string
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }

  export type MenuItemVariationOrderByWithRelationInput = {
    id?: SortOrder
    size_name?: SortOrderInput | SortOrder
    menuItemId?: SortOrder
    priceAdjustment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuItem?: MenuItemOrderByWithRelationInput
  }

  export type MenuItemVariationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuItemVariationWhereInput | MenuItemVariationWhereInput[]
    OR?: MenuItemVariationWhereInput[]
    NOT?: MenuItemVariationWhereInput | MenuItemVariationWhereInput[]
    size_name?: StringNullableFilter<"MenuItemVariation"> | string | null
    menuItemId?: IntFilter<"MenuItemVariation"> | number
    priceAdjustment?: DecimalFilter<"MenuItemVariation"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MenuItemVariation"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItemVariation"> | Date | string
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }, "id">

  export type MenuItemVariationOrderByWithAggregationInput = {
    id?: SortOrder
    size_name?: SortOrderInput | SortOrder
    menuItemId?: SortOrder
    priceAdjustment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemVariationCountOrderByAggregateInput
    _avg?: MenuItemVariationAvgOrderByAggregateInput
    _max?: MenuItemVariationMaxOrderByAggregateInput
    _min?: MenuItemVariationMinOrderByAggregateInput
    _sum?: MenuItemVariationSumOrderByAggregateInput
  }

  export type MenuItemVariationScalarWhereWithAggregatesInput = {
    AND?: MenuItemVariationScalarWhereWithAggregatesInput | MenuItemVariationScalarWhereWithAggregatesInput[]
    OR?: MenuItemVariationScalarWhereWithAggregatesInput[]
    NOT?: MenuItemVariationScalarWhereWithAggregatesInput | MenuItemVariationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuItemVariation"> | number
    size_name?: StringNullableWithAggregatesFilter<"MenuItemVariation"> | string | null
    menuItemId?: IntWithAggregatesFilter<"MenuItemVariation"> | number
    priceAdjustment?: DecimalWithAggregatesFilter<"MenuItemVariation"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"MenuItemVariation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItemVariation"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    categoryUuid?: UuidFilter<"Categories"> | string
    category_name?: StringNullableFilter<"Categories"> | string | null
    description?: StringNullableFilter<"Categories"> | string | null
    createdBy?: StringNullableFilter<"Categories"> | string | null
    updatedBy?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    menuItemCategories?: MenuItemCategoriesListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    categoryUuid?: SortOrder
    category_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuItemCategories?: MenuItemCategoriesOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoryUuid?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    category_name?: StringNullableFilter<"Categories"> | string | null
    description?: StringNullableFilter<"Categories"> | string | null
    createdBy?: StringNullableFilter<"Categories"> | string | null
    updatedBy?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    menuItemCategories?: MenuItemCategoriesListRelationFilter
  }, "id" | "categoryUuid">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    categoryUuid?: SortOrder
    category_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    categoryUuid?: UuidWithAggregatesFilter<"Categories"> | string
    category_name?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    description?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type OutboxWhereInput = {
    AND?: OutboxWhereInput | OutboxWhereInput[]
    OR?: OutboxWhereInput[]
    NOT?: OutboxWhereInput | OutboxWhereInput[]
    id?: StringFilter<"Outbox"> | string
    aggregateType?: StringFilter<"Outbox"> | string
    aggregateId?: StringFilter<"Outbox"> | string
    type?: StringFilter<"Outbox"> | string
    version?: IntFilter<"Outbox"> | number
    payload?: JsonFilter<"Outbox">
    occurredAt?: DateTimeFilter<"Outbox"> | Date | string
    status?: StringFilter<"Outbox"> | string
  }

  export type OutboxOrderByWithRelationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    type?: SortOrder
    version?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
    status?: SortOrder
  }

  export type OutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutboxWhereInput | OutboxWhereInput[]
    OR?: OutboxWhereInput[]
    NOT?: OutboxWhereInput | OutboxWhereInput[]
    aggregateType?: StringFilter<"Outbox"> | string
    aggregateId?: StringFilter<"Outbox"> | string
    type?: StringFilter<"Outbox"> | string
    version?: IntFilter<"Outbox"> | number
    payload?: JsonFilter<"Outbox">
    occurredAt?: DateTimeFilter<"Outbox"> | Date | string
    status?: StringFilter<"Outbox"> | string
  }, "id">

  export type OutboxOrderByWithAggregationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    type?: SortOrder
    version?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
    status?: SortOrder
    _count?: OutboxCountOrderByAggregateInput
    _avg?: OutboxAvgOrderByAggregateInput
    _max?: OutboxMaxOrderByAggregateInput
    _min?: OutboxMinOrderByAggregateInput
    _sum?: OutboxSumOrderByAggregateInput
  }

  export type OutboxScalarWhereWithAggregatesInput = {
    AND?: OutboxScalarWhereWithAggregatesInput | OutboxScalarWhereWithAggregatesInput[]
    OR?: OutboxScalarWhereWithAggregatesInput[]
    NOT?: OutboxScalarWhereWithAggregatesInput | OutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outbox"> | string
    aggregateType?: StringWithAggregatesFilter<"Outbox"> | string
    aggregateId?: StringWithAggregatesFilter<"Outbox"> | string
    type?: StringWithAggregatesFilter<"Outbox"> | string
    version?: IntWithAggregatesFilter<"Outbox"> | number
    payload?: JsonWithAggregatesFilter<"Outbox">
    occurredAt?: DateTimeWithAggregatesFilter<"Outbox"> | Date | string
    status?: StringWithAggregatesFilter<"Outbox"> | string
  }

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

  export type MenuItemCreateInput = {
    itemUuid: string
    menuItem_name: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    displayOrder?: number
    isAvailable?: boolean
    categoryId: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemVariant?: MenuItemVariationCreateNestedManyWithoutMenuItemInput
    menuItemCategories?: MenuItemCategoriesCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: number
    itemUuid: string
    menuItem_name: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    displayOrder?: number
    isAvailable?: boolean
    categoryId: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemVariant?: MenuItemVariationUncheckedCreateNestedManyWithoutMenuItemInput
    menuItemCategories?: MenuItemCategoriesUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemVariant?: MenuItemVariationUpdateManyWithoutMenuItemNestedInput
    menuItemCategories?: MenuItemCategoriesUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemVariant?: MenuItemVariationUncheckedUpdateManyWithoutMenuItemNestedInput
    menuItemCategories?: MenuItemCategoriesUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: number
    itemUuid: string
    menuItem_name: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    displayOrder?: number
    isAvailable?: boolean
    categoryId: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCategoriesCreateInput = {
    menuItem: MenuItemCreateNestedOneWithoutMenuItemCategoriesInput
    category: CategoriesCreateNestedOneWithoutMenuItemCategoriesInput
  }

  export type MenuItemCategoriesUncheckedCreateInput = {
    menuItemId: number
    categoryId: number
  }

  export type MenuItemCategoriesUpdateInput = {
    menuItem?: MenuItemUpdateOneRequiredWithoutMenuItemCategoriesNestedInput
    category?: CategoriesUpdateOneRequiredWithoutMenuItemCategoriesNestedInput
  }

  export type MenuItemCategoriesUncheckedUpdateInput = {
    menuItemId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCategoriesCreateManyInput = {
    menuItemId: number
    categoryId: number
  }

  export type MenuItemCategoriesUpdateManyMutationInput = {

  }

  export type MenuItemCategoriesUncheckedUpdateManyInput = {
    menuItemId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemVariationCreateInput = {
    size_name?: string | null
    priceAdjustment: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem: MenuItemCreateNestedOneWithoutMenuItemVariantInput
  }

  export type MenuItemVariationUncheckedCreateInput = {
    id?: number
    size_name?: string | null
    menuItemId: number
    priceAdjustment: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemVariationUpdateInput = {
    size_name?: NullableStringFieldUpdateOperationsInput | string | null
    priceAdjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: MenuItemUpdateOneRequiredWithoutMenuItemVariantNestedInput
  }

  export type MenuItemVariationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    size_name?: NullableStringFieldUpdateOperationsInput | string | null
    menuItemId?: IntFieldUpdateOperationsInput | number
    priceAdjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemVariationCreateManyInput = {
    id?: number
    size_name?: string | null
    menuItemId: number
    priceAdjustment: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemVariationUpdateManyMutationInput = {
    size_name?: NullableStringFieldUpdateOperationsInput | string | null
    priceAdjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemVariationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    size_name?: NullableStringFieldUpdateOperationsInput | string | null
    menuItemId?: IntFieldUpdateOperationsInput | number
    priceAdjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    categoryUuid: string
    category_name?: string | null
    description?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemCategories?: MenuItemCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    categoryUuid: string
    category_name?: string | null
    description?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemCategories?: MenuItemCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    categoryUuid?: StringFieldUpdateOperationsInput | string
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemCategories?: MenuItemCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryUuid?: StringFieldUpdateOperationsInput | string
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemCategories?: MenuItemCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    categoryUuid: string
    category_name?: string | null
    description?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    categoryUuid?: StringFieldUpdateOperationsInput | string
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryUuid?: StringFieldUpdateOperationsInput | string
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboxCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: string
    type: string
    version: number
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
    status?: string
  }

  export type OutboxUncheckedCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: string
    type: string
    version: number
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
    status?: string
  }

  export type OutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OutboxCreateManyInput = {
    id?: string
    aggregateType: string
    aggregateId: string
    type: string
    version: number
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
    status?: string
  }

  export type OutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MenuItemVariationListRelationFilter = {
    every?: MenuItemVariationWhereInput
    some?: MenuItemVariationWhereInput
    none?: MenuItemVariationWhereInput
  }

  export type MenuItemCategoriesListRelationFilter = {
    every?: MenuItemCategoriesWhereInput
    some?: MenuItemCategoriesWhereInput
    none?: MenuItemCategoriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MenuItemVariationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    itemUuid?: SortOrder
    menuItem_name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    displayOrder?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    itemUuid?: SortOrder
    menuItem_name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    itemUuid?: SortOrder
    menuItem_name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    isAvailable?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    displayOrder?: SortOrder
    categoryId?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MenuItemScalarRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type MenuItemCategoriesMenuItemIdCategoryIdCompoundUniqueInput = {
    menuItemId: number
    categoryId: number
  }

  export type MenuItemCategoriesCountOrderByAggregateInput = {
    menuItemId?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemCategoriesAvgOrderByAggregateInput = {
    menuItemId?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemCategoriesMaxOrderByAggregateInput = {
    menuItemId?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemCategoriesMinOrderByAggregateInput = {
    menuItemId?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemCategoriesSumOrderByAggregateInput = {
    menuItemId?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemVariationCountOrderByAggregateInput = {
    id?: SortOrder
    size_name?: SortOrder
    menuItemId?: SortOrder
    priceAdjustment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemVariationAvgOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    priceAdjustment?: SortOrder
  }

  export type MenuItemVariationMaxOrderByAggregateInput = {
    id?: SortOrder
    size_name?: SortOrder
    menuItemId?: SortOrder
    priceAdjustment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemVariationMinOrderByAggregateInput = {
    id?: SortOrder
    size_name?: SortOrder
    menuItemId?: SortOrder
    priceAdjustment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemVariationSumOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    priceAdjustment?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    categoryUuid?: SortOrder
    category_name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryUuid?: SortOrder
    category_name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    categoryUuid?: SortOrder
    category_name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type OutboxCountOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    type?: SortOrder
    version?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
    status?: SortOrder
  }

  export type OutboxAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type OutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    type?: SortOrder
    version?: SortOrder
    occurredAt?: SortOrder
    status?: SortOrder
  }

  export type OutboxMinOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    type?: SortOrder
    version?: SortOrder
    occurredAt?: SortOrder
    status?: SortOrder
  }

  export type OutboxSumOrderByAggregateInput = {
    version?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type MenuItemVariationCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemVariationCreateWithoutMenuItemInput, MenuItemVariationUncheckedCreateWithoutMenuItemInput> | MenuItemVariationCreateWithoutMenuItemInput[] | MenuItemVariationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemVariationCreateOrConnectWithoutMenuItemInput | MenuItemVariationCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemVariationCreateManyMenuItemInputEnvelope
    connect?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
  }

  export type MenuItemCategoriesCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutMenuItemInput, MenuItemCategoriesUncheckedCreateWithoutMenuItemInput> | MenuItemCategoriesCreateWithoutMenuItemInput[] | MenuItemCategoriesUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutMenuItemInput | MenuItemCategoriesCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemCategoriesCreateManyMenuItemInputEnvelope
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
  }

  export type MenuItemVariationUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemVariationCreateWithoutMenuItemInput, MenuItemVariationUncheckedCreateWithoutMenuItemInput> | MenuItemVariationCreateWithoutMenuItemInput[] | MenuItemVariationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemVariationCreateOrConnectWithoutMenuItemInput | MenuItemVariationCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemVariationCreateManyMenuItemInputEnvelope
    connect?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
  }

  export type MenuItemCategoriesUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutMenuItemInput, MenuItemCategoriesUncheckedCreateWithoutMenuItemInput> | MenuItemCategoriesCreateWithoutMenuItemInput[] | MenuItemCategoriesUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutMenuItemInput | MenuItemCategoriesCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemCategoriesCreateManyMenuItemInputEnvelope
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MenuItemVariationUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemVariationCreateWithoutMenuItemInput, MenuItemVariationUncheckedCreateWithoutMenuItemInput> | MenuItemVariationCreateWithoutMenuItemInput[] | MenuItemVariationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemVariationCreateOrConnectWithoutMenuItemInput | MenuItemVariationCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemVariationUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemVariationUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemVariationCreateManyMenuItemInputEnvelope
    set?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    disconnect?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    delete?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    connect?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    update?: MenuItemVariationUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemVariationUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemVariationUpdateManyWithWhereWithoutMenuItemInput | MenuItemVariationUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemVariationScalarWhereInput | MenuItemVariationScalarWhereInput[]
  }

  export type MenuItemCategoriesUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutMenuItemInput, MenuItemCategoriesUncheckedCreateWithoutMenuItemInput> | MenuItemCategoriesCreateWithoutMenuItemInput[] | MenuItemCategoriesUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutMenuItemInput | MenuItemCategoriesCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemCategoriesUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemCategoriesUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemCategoriesCreateManyMenuItemInputEnvelope
    set?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    disconnect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    delete?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    update?: MenuItemCategoriesUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemCategoriesUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemCategoriesUpdateManyWithWhereWithoutMenuItemInput | MenuItemCategoriesUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemCategoriesScalarWhereInput | MenuItemCategoriesScalarWhereInput[]
  }

  export type MenuItemVariationUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemVariationCreateWithoutMenuItemInput, MenuItemVariationUncheckedCreateWithoutMenuItemInput> | MenuItemVariationCreateWithoutMenuItemInput[] | MenuItemVariationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemVariationCreateOrConnectWithoutMenuItemInput | MenuItemVariationCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemVariationUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemVariationUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemVariationCreateManyMenuItemInputEnvelope
    set?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    disconnect?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    delete?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    connect?: MenuItemVariationWhereUniqueInput | MenuItemVariationWhereUniqueInput[]
    update?: MenuItemVariationUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemVariationUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemVariationUpdateManyWithWhereWithoutMenuItemInput | MenuItemVariationUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemVariationScalarWhereInput | MenuItemVariationScalarWhereInput[]
  }

  export type MenuItemCategoriesUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutMenuItemInput, MenuItemCategoriesUncheckedCreateWithoutMenuItemInput> | MenuItemCategoriesCreateWithoutMenuItemInput[] | MenuItemCategoriesUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutMenuItemInput | MenuItemCategoriesCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemCategoriesUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemCategoriesUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemCategoriesCreateManyMenuItemInputEnvelope
    set?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    disconnect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    delete?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    update?: MenuItemCategoriesUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemCategoriesUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemCategoriesUpdateManyWithWhereWithoutMenuItemInput | MenuItemCategoriesUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemCategoriesScalarWhereInput | MenuItemCategoriesScalarWhereInput[]
  }

  export type MenuItemCreateNestedOneWithoutMenuItemCategoriesInput = {
    create?: XOR<MenuItemCreateWithoutMenuItemCategoriesInput, MenuItemUncheckedCreateWithoutMenuItemCategoriesInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuItemCategoriesInput
    connect?: MenuItemWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutMenuItemCategoriesInput = {
    create?: XOR<CategoriesCreateWithoutMenuItemCategoriesInput, CategoriesUncheckedCreateWithoutMenuItemCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMenuItemCategoriesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type MenuItemUpdateOneRequiredWithoutMenuItemCategoriesNestedInput = {
    create?: XOR<MenuItemCreateWithoutMenuItemCategoriesInput, MenuItemUncheckedCreateWithoutMenuItemCategoriesInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuItemCategoriesInput
    upsert?: MenuItemUpsertWithoutMenuItemCategoriesInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutMenuItemCategoriesInput, MenuItemUpdateWithoutMenuItemCategoriesInput>, MenuItemUncheckedUpdateWithoutMenuItemCategoriesInput>
  }

  export type CategoriesUpdateOneRequiredWithoutMenuItemCategoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutMenuItemCategoriesInput, CategoriesUncheckedCreateWithoutMenuItemCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMenuItemCategoriesInput
    upsert?: CategoriesUpsertWithoutMenuItemCategoriesInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutMenuItemCategoriesInput, CategoriesUpdateWithoutMenuItemCategoriesInput>, CategoriesUncheckedUpdateWithoutMenuItemCategoriesInput>
  }

  export type MenuItemCreateNestedOneWithoutMenuItemVariantInput = {
    create?: XOR<MenuItemCreateWithoutMenuItemVariantInput, MenuItemUncheckedCreateWithoutMenuItemVariantInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuItemVariantInput
    connect?: MenuItemWhereUniqueInput
  }

  export type MenuItemUpdateOneRequiredWithoutMenuItemVariantNestedInput = {
    create?: XOR<MenuItemCreateWithoutMenuItemVariantInput, MenuItemUncheckedCreateWithoutMenuItemVariantInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutMenuItemVariantInput
    upsert?: MenuItemUpsertWithoutMenuItemVariantInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutMenuItemVariantInput, MenuItemUpdateWithoutMenuItemVariantInput>, MenuItemUncheckedUpdateWithoutMenuItemVariantInput>
  }

  export type MenuItemCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutCategoryInput, MenuItemCategoriesUncheckedCreateWithoutCategoryInput> | MenuItemCategoriesCreateWithoutCategoryInput[] | MenuItemCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutCategoryInput | MenuItemCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCategoriesCreateManyCategoryInputEnvelope
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
  }

  export type MenuItemCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutCategoryInput, MenuItemCategoriesUncheckedCreateWithoutCategoryInput> | MenuItemCategoriesCreateWithoutCategoryInput[] | MenuItemCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutCategoryInput | MenuItemCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCategoriesCreateManyCategoryInputEnvelope
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
  }

  export type MenuItemCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutCategoryInput, MenuItemCategoriesUncheckedCreateWithoutCategoryInput> | MenuItemCategoriesCreateWithoutCategoryInput[] | MenuItemCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutCategoryInput | MenuItemCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemCategoriesUpsertWithWhereUniqueWithoutCategoryInput | MenuItemCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCategoriesCreateManyCategoryInputEnvelope
    set?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    disconnect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    delete?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    update?: MenuItemCategoriesUpdateWithWhereUniqueWithoutCategoryInput | MenuItemCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemCategoriesUpdateManyWithWhereWithoutCategoryInput | MenuItemCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemCategoriesScalarWhereInput | MenuItemCategoriesScalarWhereInput[]
  }

  export type MenuItemCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCategoriesCreateWithoutCategoryInput, MenuItemCategoriesUncheckedCreateWithoutCategoryInput> | MenuItemCategoriesCreateWithoutCategoryInput[] | MenuItemCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCategoriesCreateOrConnectWithoutCategoryInput | MenuItemCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemCategoriesUpsertWithWhereUniqueWithoutCategoryInput | MenuItemCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCategoriesCreateManyCategoryInputEnvelope
    set?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    disconnect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    delete?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    connect?: MenuItemCategoriesWhereUniqueInput | MenuItemCategoriesWhereUniqueInput[]
    update?: MenuItemCategoriesUpdateWithWhereUniqueWithoutCategoryInput | MenuItemCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemCategoriesUpdateManyWithWhereWithoutCategoryInput | MenuItemCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemCategoriesScalarWhereInput | MenuItemCategoriesScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type MenuItemVariationCreateWithoutMenuItemInput = {
    size_name?: string | null
    priceAdjustment: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemVariationUncheckedCreateWithoutMenuItemInput = {
    id?: number
    size_name?: string | null
    priceAdjustment: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemVariationCreateOrConnectWithoutMenuItemInput = {
    where: MenuItemVariationWhereUniqueInput
    create: XOR<MenuItemVariationCreateWithoutMenuItemInput, MenuItemVariationUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemVariationCreateManyMenuItemInputEnvelope = {
    data: MenuItemVariationCreateManyMenuItemInput | MenuItemVariationCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemCategoriesCreateWithoutMenuItemInput = {
    category: CategoriesCreateNestedOneWithoutMenuItemCategoriesInput
  }

  export type MenuItemCategoriesUncheckedCreateWithoutMenuItemInput = {
    categoryId: number
  }

  export type MenuItemCategoriesCreateOrConnectWithoutMenuItemInput = {
    where: MenuItemCategoriesWhereUniqueInput
    create: XOR<MenuItemCategoriesCreateWithoutMenuItemInput, MenuItemCategoriesUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemCategoriesCreateManyMenuItemInputEnvelope = {
    data: MenuItemCategoriesCreateManyMenuItemInput | MenuItemCategoriesCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemVariationUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemVariationWhereUniqueInput
    update: XOR<MenuItemVariationUpdateWithoutMenuItemInput, MenuItemVariationUncheckedUpdateWithoutMenuItemInput>
    create: XOR<MenuItemVariationCreateWithoutMenuItemInput, MenuItemVariationUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemVariationUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemVariationWhereUniqueInput
    data: XOR<MenuItemVariationUpdateWithoutMenuItemInput, MenuItemVariationUncheckedUpdateWithoutMenuItemInput>
  }

  export type MenuItemVariationUpdateManyWithWhereWithoutMenuItemInput = {
    where: MenuItemVariationScalarWhereInput
    data: XOR<MenuItemVariationUpdateManyMutationInput, MenuItemVariationUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type MenuItemVariationScalarWhereInput = {
    AND?: MenuItemVariationScalarWhereInput | MenuItemVariationScalarWhereInput[]
    OR?: MenuItemVariationScalarWhereInput[]
    NOT?: MenuItemVariationScalarWhereInput | MenuItemVariationScalarWhereInput[]
    id?: IntFilter<"MenuItemVariation"> | number
    size_name?: StringNullableFilter<"MenuItemVariation"> | string | null
    menuItemId?: IntFilter<"MenuItemVariation"> | number
    priceAdjustment?: DecimalFilter<"MenuItemVariation"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MenuItemVariation"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItemVariation"> | Date | string
  }

  export type MenuItemCategoriesUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemCategoriesWhereUniqueInput
    update: XOR<MenuItemCategoriesUpdateWithoutMenuItemInput, MenuItemCategoriesUncheckedUpdateWithoutMenuItemInput>
    create: XOR<MenuItemCategoriesCreateWithoutMenuItemInput, MenuItemCategoriesUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemCategoriesUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemCategoriesWhereUniqueInput
    data: XOR<MenuItemCategoriesUpdateWithoutMenuItemInput, MenuItemCategoriesUncheckedUpdateWithoutMenuItemInput>
  }

  export type MenuItemCategoriesUpdateManyWithWhereWithoutMenuItemInput = {
    where: MenuItemCategoriesScalarWhereInput
    data: XOR<MenuItemCategoriesUpdateManyMutationInput, MenuItemCategoriesUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type MenuItemCategoriesScalarWhereInput = {
    AND?: MenuItemCategoriesScalarWhereInput | MenuItemCategoriesScalarWhereInput[]
    OR?: MenuItemCategoriesScalarWhereInput[]
    NOT?: MenuItemCategoriesScalarWhereInput | MenuItemCategoriesScalarWhereInput[]
    menuItemId?: IntFilter<"MenuItemCategories"> | number
    categoryId?: IntFilter<"MenuItemCategories"> | number
  }

  export type MenuItemCreateWithoutMenuItemCategoriesInput = {
    itemUuid: string
    menuItem_name: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    displayOrder?: number
    isAvailable?: boolean
    categoryId: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemVariant?: MenuItemVariationCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutMenuItemCategoriesInput = {
    id?: number
    itemUuid: string
    menuItem_name: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    displayOrder?: number
    isAvailable?: boolean
    categoryId: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemVariant?: MenuItemVariationUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutMenuItemCategoriesInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutMenuItemCategoriesInput, MenuItemUncheckedCreateWithoutMenuItemCategoriesInput>
  }

  export type CategoriesCreateWithoutMenuItemCategoriesInput = {
    categoryUuid: string
    category_name?: string | null
    description?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutMenuItemCategoriesInput = {
    id?: number
    categoryUuid: string
    category_name?: string | null
    description?: string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutMenuItemCategoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutMenuItemCategoriesInput, CategoriesUncheckedCreateWithoutMenuItemCategoriesInput>
  }

  export type MenuItemUpsertWithoutMenuItemCategoriesInput = {
    update: XOR<MenuItemUpdateWithoutMenuItemCategoriesInput, MenuItemUncheckedUpdateWithoutMenuItemCategoriesInput>
    create: XOR<MenuItemCreateWithoutMenuItemCategoriesInput, MenuItemUncheckedCreateWithoutMenuItemCategoriesInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutMenuItemCategoriesInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutMenuItemCategoriesInput, MenuItemUncheckedUpdateWithoutMenuItemCategoriesInput>
  }

  export type MenuItemUpdateWithoutMenuItemCategoriesInput = {
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemVariant?: MenuItemVariationUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutMenuItemCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemVariant?: MenuItemVariationUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type CategoriesUpsertWithoutMenuItemCategoriesInput = {
    update: XOR<CategoriesUpdateWithoutMenuItemCategoriesInput, CategoriesUncheckedUpdateWithoutMenuItemCategoriesInput>
    create: XOR<CategoriesCreateWithoutMenuItemCategoriesInput, CategoriesUncheckedCreateWithoutMenuItemCategoriesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutMenuItemCategoriesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutMenuItemCategoriesInput, CategoriesUncheckedUpdateWithoutMenuItemCategoriesInput>
  }

  export type CategoriesUpdateWithoutMenuItemCategoriesInput = {
    categoryUuid?: StringFieldUpdateOperationsInput | string
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutMenuItemCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryUuid?: StringFieldUpdateOperationsInput | string
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateWithoutMenuItemVariantInput = {
    itemUuid: string
    menuItem_name: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    displayOrder?: number
    isAvailable?: boolean
    categoryId: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemCategories?: MenuItemCategoriesCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutMenuItemVariantInput = {
    id?: number
    itemUuid: string
    menuItem_name: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    displayOrder?: number
    isAvailable?: boolean
    categoryId: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemCategories?: MenuItemCategoriesUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutMenuItemVariantInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutMenuItemVariantInput, MenuItemUncheckedCreateWithoutMenuItemVariantInput>
  }

  export type MenuItemUpsertWithoutMenuItemVariantInput = {
    update: XOR<MenuItemUpdateWithoutMenuItemVariantInput, MenuItemUncheckedUpdateWithoutMenuItemVariantInput>
    create: XOR<MenuItemCreateWithoutMenuItemVariantInput, MenuItemUncheckedCreateWithoutMenuItemVariantInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutMenuItemVariantInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutMenuItemVariantInput, MenuItemUncheckedUpdateWithoutMenuItemVariantInput>
  }

  export type MenuItemUpdateWithoutMenuItemVariantInput = {
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemCategories?: MenuItemCategoriesUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutMenuItemVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemUuid?: StringFieldUpdateOperationsInput | string
    menuItem_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemCategories?: MenuItemCategoriesUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCategoriesCreateWithoutCategoryInput = {
    menuItem: MenuItemCreateNestedOneWithoutMenuItemCategoriesInput
  }

  export type MenuItemCategoriesUncheckedCreateWithoutCategoryInput = {
    menuItemId: number
  }

  export type MenuItemCategoriesCreateOrConnectWithoutCategoryInput = {
    where: MenuItemCategoriesWhereUniqueInput
    create: XOR<MenuItemCategoriesCreateWithoutCategoryInput, MenuItemCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCategoriesCreateManyCategoryInputEnvelope = {
    data: MenuItemCategoriesCreateManyCategoryInput | MenuItemCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemCategoriesWhereUniqueInput
    update: XOR<MenuItemCategoriesUpdateWithoutCategoryInput, MenuItemCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemCategoriesCreateWithoutCategoryInput, MenuItemCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemCategoriesWhereUniqueInput
    data: XOR<MenuItemCategoriesUpdateWithoutCategoryInput, MenuItemCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemCategoriesScalarWhereInput
    data: XOR<MenuItemCategoriesUpdateManyMutationInput, MenuItemCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MenuItemVariationCreateManyMenuItemInput = {
    id?: number
    size_name?: string | null
    priceAdjustment: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemCategoriesCreateManyMenuItemInput = {
    categoryId: number
  }

  export type MenuItemVariationUpdateWithoutMenuItemInput = {
    size_name?: NullableStringFieldUpdateOperationsInput | string | null
    priceAdjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemVariationUncheckedUpdateWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    size_name?: NullableStringFieldUpdateOperationsInput | string | null
    priceAdjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemVariationUncheckedUpdateManyWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    size_name?: NullableStringFieldUpdateOperationsInput | string | null
    priceAdjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCategoriesUpdateWithoutMenuItemInput = {
    category?: CategoriesUpdateOneRequiredWithoutMenuItemCategoriesNestedInput
  }

  export type MenuItemCategoriesUncheckedUpdateWithoutMenuItemInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCategoriesUncheckedUpdateManyWithoutMenuItemInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCategoriesCreateManyCategoryInput = {
    menuItemId: number
  }

  export type MenuItemCategoriesUpdateWithoutCategoryInput = {
    menuItem?: MenuItemUpdateOneRequiredWithoutMenuItemCategoriesNestedInput
  }

  export type MenuItemCategoriesUncheckedUpdateWithoutCategoryInput = {
    menuItemId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    menuItemId?: IntFieldUpdateOperationsInput | number
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