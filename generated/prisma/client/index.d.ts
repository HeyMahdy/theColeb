
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BasicInfo
 * 
 */
export type BasicInfo = $Result.DefaultSelection<Prisma.$BasicInfoPayload>
/**
 * Model TechnicalProfile
 * 
 */
export type TechnicalProfile = $Result.DefaultSelection<Prisma.$TechnicalProfilePayload>
/**
 * Model BioSummary
 * 
 */
export type BioSummary = $Result.DefaultSelection<Prisma.$BioSummaryPayload>
/**
 * Model Showcase
 * 
 */
export type Showcase = $Result.DefaultSelection<Prisma.$ShowcasePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Collaboration
 * 
 */
export type Collaboration = $Result.DefaultSelection<Prisma.$CollaborationPayload>
/**
 * Model Visuals
 * 
 */
export type Visuals = $Result.DefaultSelection<Prisma.$VisualsPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model InterestedList
 * 
 */
export type InterestedList = $Result.DefaultSelection<Prisma.$InterestedListPayload>
/**
 * Model IncomingConnection
 * 
 */
export type IncomingConnection = $Result.DefaultSelection<Prisma.$IncomingConnectionPayload>
/**
 * Model OutgoingConnection
 * 
 */
export type OutgoingConnection = $Result.DefaultSelection<Prisma.$OutgoingConnectionPayload>
/**
 * Model Connection
 * 
 */
export type Connection = $Result.DefaultSelection<Prisma.$ConnectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostType: {
  IDEA: 'IDEA',
  MVP: 'MVP',
  COFOUNDER_NEEDED: 'COFOUNDER_NEEDED',
  MEETUP: 'MEETUP',
  OTHER: 'OTHER'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ProjectStatus: {
  running: 'running',
  finished: 'finished',
  incomplete: 'incomplete'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]

}

export type PostType = $Enums.PostType

export const PostType: typeof $Enums.PostType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.basicInfo`: Exposes CRUD operations for the **BasicInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BasicInfos
    * const basicInfos = await prisma.basicInfo.findMany()
    * ```
    */
  get basicInfo(): Prisma.BasicInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technicalProfile`: Exposes CRUD operations for the **TechnicalProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnicalProfiles
    * const technicalProfiles = await prisma.technicalProfile.findMany()
    * ```
    */
  get technicalProfile(): Prisma.TechnicalProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bioSummary`: Exposes CRUD operations for the **BioSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BioSummaries
    * const bioSummaries = await prisma.bioSummary.findMany()
    * ```
    */
  get bioSummary(): Prisma.BioSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showcase`: Exposes CRUD operations for the **Showcase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Showcases
    * const showcases = await prisma.showcase.findMany()
    * ```
    */
  get showcase(): Prisma.ShowcaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaboration`: Exposes CRUD operations for the **Collaboration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborations
    * const collaborations = await prisma.collaboration.findMany()
    * ```
    */
  get collaboration(): Prisma.CollaborationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visuals`: Exposes CRUD operations for the **Visuals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visuals
    * const visuals = await prisma.visuals.findMany()
    * ```
    */
  get visuals(): Prisma.VisualsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interestedList`: Exposes CRUD operations for the **InterestedList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterestedLists
    * const interestedLists = await prisma.interestedList.findMany()
    * ```
    */
  get interestedList(): Prisma.InterestedListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incomingConnection`: Exposes CRUD operations for the **IncomingConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncomingConnections
    * const incomingConnections = await prisma.incomingConnection.findMany()
    * ```
    */
  get incomingConnection(): Prisma.IncomingConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outgoingConnection`: Exposes CRUD operations for the **OutgoingConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutgoingConnections
    * const outgoingConnections = await prisma.outgoingConnection.findMany()
    * ```
    */
  get outgoingConnection(): Prisma.OutgoingConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    BasicInfo: 'BasicInfo',
    TechnicalProfile: 'TechnicalProfile',
    BioSummary: 'BioSummary',
    Showcase: 'Showcase',
    Project: 'Project',
    Collaboration: 'Collaboration',
    Visuals: 'Visuals',
    Post: 'Post',
    InterestedList: 'InterestedList',
    IncomingConnection: 'IncomingConnection',
    OutgoingConnection: 'OutgoingConnection',
    Connection: 'Connection'
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
      modelProps: "user" | "basicInfo" | "technicalProfile" | "bioSummary" | "showcase" | "project" | "collaboration" | "visuals" | "post" | "interestedList" | "incomingConnection" | "outgoingConnection" | "connection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BasicInfo: {
        payload: Prisma.$BasicInfoPayload<ExtArgs>
        fields: Prisma.BasicInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BasicInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BasicInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          findFirst: {
            args: Prisma.BasicInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BasicInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          findMany: {
            args: Prisma.BasicInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>[]
          }
          create: {
            args: Prisma.BasicInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          createMany: {
            args: Prisma.BasicInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BasicInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>[]
          }
          delete: {
            args: Prisma.BasicInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          update: {
            args: Prisma.BasicInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          deleteMany: {
            args: Prisma.BasicInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BasicInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BasicInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>[]
          }
          upsert: {
            args: Prisma.BasicInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasicInfoPayload>
          }
          aggregate: {
            args: Prisma.BasicInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBasicInfo>
          }
          groupBy: {
            args: Prisma.BasicInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BasicInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BasicInfoCountArgs<ExtArgs>
            result: $Utils.Optional<BasicInfoCountAggregateOutputType> | number
          }
        }
      }
      TechnicalProfile: {
        payload: Prisma.$TechnicalProfilePayload<ExtArgs>
        fields: Prisma.TechnicalProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicalProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicalProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>
          }
          findFirst: {
            args: Prisma.TechnicalProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicalProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>
          }
          findMany: {
            args: Prisma.TechnicalProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>[]
          }
          create: {
            args: Prisma.TechnicalProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>
          }
          createMany: {
            args: Prisma.TechnicalProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnicalProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>[]
          }
          delete: {
            args: Prisma.TechnicalProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>
          }
          update: {
            args: Prisma.TechnicalProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>
          }
          deleteMany: {
            args: Prisma.TechnicalProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicalProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnicalProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>[]
          }
          upsert: {
            args: Prisma.TechnicalProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalProfilePayload>
          }
          aggregate: {
            args: Prisma.TechnicalProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnicalProfile>
          }
          groupBy: {
            args: Prisma.TechnicalProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicalProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnicalProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicalProfileCountAggregateOutputType> | number
          }
        }
      }
      BioSummary: {
        payload: Prisma.$BioSummaryPayload<ExtArgs>
        fields: Prisma.BioSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BioSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BioSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>
          }
          findFirst: {
            args: Prisma.BioSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BioSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>
          }
          findMany: {
            args: Prisma.BioSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>[]
          }
          create: {
            args: Prisma.BioSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>
          }
          createMany: {
            args: Prisma.BioSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BioSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>[]
          }
          delete: {
            args: Prisma.BioSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>
          }
          update: {
            args: Prisma.BioSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>
          }
          deleteMany: {
            args: Prisma.BioSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BioSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BioSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>[]
          }
          upsert: {
            args: Prisma.BioSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioSummaryPayload>
          }
          aggregate: {
            args: Prisma.BioSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBioSummary>
          }
          groupBy: {
            args: Prisma.BioSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BioSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BioSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<BioSummaryCountAggregateOutputType> | number
          }
        }
      }
      Showcase: {
        payload: Prisma.$ShowcasePayload<ExtArgs>
        fields: Prisma.ShowcaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowcaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowcaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>
          }
          findFirst: {
            args: Prisma.ShowcaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowcaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>
          }
          findMany: {
            args: Prisma.ShowcaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>[]
          }
          create: {
            args: Prisma.ShowcaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>
          }
          createMany: {
            args: Prisma.ShowcaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowcaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>[]
          }
          delete: {
            args: Prisma.ShowcaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>
          }
          update: {
            args: Prisma.ShowcaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>
          }
          deleteMany: {
            args: Prisma.ShowcaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowcaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowcaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>[]
          }
          upsert: {
            args: Prisma.ShowcaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowcasePayload>
          }
          aggregate: {
            args: Prisma.ShowcaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowcase>
          }
          groupBy: {
            args: Prisma.ShowcaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowcaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowcaseCountArgs<ExtArgs>
            result: $Utils.Optional<ShowcaseCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Collaboration: {
        payload: Prisma.$CollaborationPayload<ExtArgs>
        fields: Prisma.CollaborationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaborationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaborationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          findFirst: {
            args: Prisma.CollaborationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaborationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          findMany: {
            args: Prisma.CollaborationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>[]
          }
          create: {
            args: Prisma.CollaborationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          createMany: {
            args: Prisma.CollaborationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaborationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>[]
          }
          delete: {
            args: Prisma.CollaborationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          update: {
            args: Prisma.CollaborationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          deleteMany: {
            args: Prisma.CollaborationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaborationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaborationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>[]
          }
          upsert: {
            args: Prisma.CollaborationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          aggregate: {
            args: Prisma.CollaborationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaboration>
          }
          groupBy: {
            args: Prisma.CollaborationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaborationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaborationCountArgs<ExtArgs>
            result: $Utils.Optional<CollaborationCountAggregateOutputType> | number
          }
        }
      }
      Visuals: {
        payload: Prisma.$VisualsPayload<ExtArgs>
        fields: Prisma.VisualsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisualsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisualsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>
          }
          findFirst: {
            args: Prisma.VisualsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisualsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>
          }
          findMany: {
            args: Prisma.VisualsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>[]
          }
          create: {
            args: Prisma.VisualsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>
          }
          createMany: {
            args: Prisma.VisualsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisualsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>[]
          }
          delete: {
            args: Prisma.VisualsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>
          }
          update: {
            args: Prisma.VisualsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>
          }
          deleteMany: {
            args: Prisma.VisualsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisualsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisualsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>[]
          }
          upsert: {
            args: Prisma.VisualsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualsPayload>
          }
          aggregate: {
            args: Prisma.VisualsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisuals>
          }
          groupBy: {
            args: Prisma.VisualsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisualsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisualsCountArgs<ExtArgs>
            result: $Utils.Optional<VisualsCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      InterestedList: {
        payload: Prisma.$InterestedListPayload<ExtArgs>
        fields: Prisma.InterestedListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestedListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestedListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>
          }
          findFirst: {
            args: Prisma.InterestedListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestedListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>
          }
          findMany: {
            args: Prisma.InterestedListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>[]
          }
          create: {
            args: Prisma.InterestedListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>
          }
          createMany: {
            args: Prisma.InterestedListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterestedListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>[]
          }
          delete: {
            args: Prisma.InterestedListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>
          }
          update: {
            args: Prisma.InterestedListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>
          }
          deleteMany: {
            args: Prisma.InterestedListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestedListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterestedListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>[]
          }
          upsert: {
            args: Prisma.InterestedListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestedListPayload>
          }
          aggregate: {
            args: Prisma.InterestedListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterestedList>
          }
          groupBy: {
            args: Prisma.InterestedListGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestedListGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestedListCountArgs<ExtArgs>
            result: $Utils.Optional<InterestedListCountAggregateOutputType> | number
          }
        }
      }
      IncomingConnection: {
        payload: Prisma.$IncomingConnectionPayload<ExtArgs>
        fields: Prisma.IncomingConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomingConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomingConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>
          }
          findFirst: {
            args: Prisma.IncomingConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomingConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>
          }
          findMany: {
            args: Prisma.IncomingConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>[]
          }
          create: {
            args: Prisma.IncomingConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>
          }
          createMany: {
            args: Prisma.IncomingConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomingConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>[]
          }
          delete: {
            args: Prisma.IncomingConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>
          }
          update: {
            args: Prisma.IncomingConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>
          }
          deleteMany: {
            args: Prisma.IncomingConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomingConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncomingConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>[]
          }
          upsert: {
            args: Prisma.IncomingConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingConnectionPayload>
          }
          aggregate: {
            args: Prisma.IncomingConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncomingConnection>
          }
          groupBy: {
            args: Prisma.IncomingConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomingConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomingConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<IncomingConnectionCountAggregateOutputType> | number
          }
        }
      }
      OutgoingConnection: {
        payload: Prisma.$OutgoingConnectionPayload<ExtArgs>
        fields: Prisma.OutgoingConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutgoingConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutgoingConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>
          }
          findFirst: {
            args: Prisma.OutgoingConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutgoingConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>
          }
          findMany: {
            args: Prisma.OutgoingConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>[]
          }
          create: {
            args: Prisma.OutgoingConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>
          }
          createMany: {
            args: Prisma.OutgoingConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutgoingConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>[]
          }
          delete: {
            args: Prisma.OutgoingConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>
          }
          update: {
            args: Prisma.OutgoingConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>
          }
          deleteMany: {
            args: Prisma.OutgoingConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutgoingConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutgoingConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>[]
          }
          upsert: {
            args: Prisma.OutgoingConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutgoingConnectionPayload>
          }
          aggregate: {
            args: Prisma.OutgoingConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutgoingConnection>
          }
          groupBy: {
            args: Prisma.OutgoingConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutgoingConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutgoingConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<OutgoingConnectionCountAggregateOutputType> | number
          }
        }
      }
      Connection: {
        payload: Prisma.$ConnectionPayload<ExtArgs>
        fields: Prisma.ConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findFirst: {
            args: Prisma.ConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findMany: {
            args: Prisma.ConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          create: {
            args: Prisma.ConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          createMany: {
            args: Prisma.ConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          delete: {
            args: Prisma.ConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          update: {
            args: Prisma.ConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.ConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
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
    user?: UserOmit
    basicInfo?: BasicInfoOmit
    technicalProfile?: TechnicalProfileOmit
    bioSummary?: BioSummaryOmit
    showcase?: ShowcaseOmit
    project?: ProjectOmit
    collaboration?: CollaborationOmit
    visuals?: VisualsOmit
    post?: PostOmit
    interestedList?: InterestedListOmit
    incomingConnection?: IncomingConnectionOmit
    outgoingConnection?: OutgoingConnectionOmit
    connection?: ConnectionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ParticipantA: number
    ParticipantB: number
    sentIncomingConnections: number
    incomingConnections: number
    outgoingConnections: number
    ReceiveoutgoingConnections: number
    posts: number
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParticipantA?: boolean | UserCountOutputTypeCountParticipantAArgs
    ParticipantB?: boolean | UserCountOutputTypeCountParticipantBArgs
    sentIncomingConnections?: boolean | UserCountOutputTypeCountSentIncomingConnectionsArgs
    incomingConnections?: boolean | UserCountOutputTypeCountIncomingConnectionsArgs
    outgoingConnections?: boolean | UserCountOutputTypeCountOutgoingConnectionsArgs
    ReceiveoutgoingConnections?: boolean | UserCountOutputTypeCountReceiveoutgoingConnectionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentIncomingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomingConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncomingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomingConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOutgoingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutgoingConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiveoutgoingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutgoingConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    interested: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interested?: boolean | PostCountOutputTypeCountInterestedArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountInterestedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestedListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    isEmailVerified: boolean | null
    otp: string | null
    otpExpiry: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    isEmailVerified: boolean | null
    otp: string | null
    otpExpiry: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    isEmailVerified: number
    otp: number
    otpExpiry: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    isEmailVerified?: true
    otp?: true
    otpExpiry?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    isEmailVerified?: true
    otp?: true
    otpExpiry?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    isEmailVerified?: true
    otp?: true
    otpExpiry?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    isEmailVerified: boolean
    otp: string | null
    otpExpiry: Date | null
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    isEmailVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    role?: boolean
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
    bioSummary?: boolean | User$bioSummaryArgs<ExtArgs>
    collaboration?: boolean | User$collaborationArgs<ExtArgs>
    ParticipantA?: boolean | User$ParticipantAArgs<ExtArgs>
    ParticipantB?: boolean | User$ParticipantBArgs<ExtArgs>
    sentIncomingConnections?: boolean | User$sentIncomingConnectionsArgs<ExtArgs>
    incomingConnections?: boolean | User$incomingConnectionsArgs<ExtArgs>
    outgoingConnections?: boolean | User$outgoingConnectionsArgs<ExtArgs>
    ReceiveoutgoingConnections?: boolean | User$ReceiveoutgoingConnectionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    showcase?: boolean | User$showcaseArgs<ExtArgs>
    technicalProfile?: boolean | User$technicalProfileArgs<ExtArgs>
    visuals?: boolean | User$visualsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    isEmailVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    isEmailVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    isEmailVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "isEmailVerified" | "otp" | "otpExpiry" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    basicInfo?: boolean | User$basicInfoArgs<ExtArgs>
    bioSummary?: boolean | User$bioSummaryArgs<ExtArgs>
    collaboration?: boolean | User$collaborationArgs<ExtArgs>
    ParticipantA?: boolean | User$ParticipantAArgs<ExtArgs>
    ParticipantB?: boolean | User$ParticipantBArgs<ExtArgs>
    sentIncomingConnections?: boolean | User$sentIncomingConnectionsArgs<ExtArgs>
    incomingConnections?: boolean | User$incomingConnectionsArgs<ExtArgs>
    outgoingConnections?: boolean | User$outgoingConnectionsArgs<ExtArgs>
    ReceiveoutgoingConnections?: boolean | User$ReceiveoutgoingConnectionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    showcase?: boolean | User$showcaseArgs<ExtArgs>
    technicalProfile?: boolean | User$technicalProfileArgs<ExtArgs>
    visuals?: boolean | User$visualsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      basicInfo: Prisma.$BasicInfoPayload<ExtArgs> | null
      bioSummary: Prisma.$BioSummaryPayload<ExtArgs> | null
      collaboration: Prisma.$CollaborationPayload<ExtArgs> | null
      ParticipantA: Prisma.$ConnectionPayload<ExtArgs>[]
      ParticipantB: Prisma.$ConnectionPayload<ExtArgs>[]
      sentIncomingConnections: Prisma.$IncomingConnectionPayload<ExtArgs>[]
      incomingConnections: Prisma.$IncomingConnectionPayload<ExtArgs>[]
      outgoingConnections: Prisma.$OutgoingConnectionPayload<ExtArgs>[]
      ReceiveoutgoingConnections: Prisma.$OutgoingConnectionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      showcase: Prisma.$ShowcasePayload<ExtArgs> | null
      technicalProfile: Prisma.$TechnicalProfilePayload<ExtArgs> | null
      visuals: Prisma.$VisualsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
      isEmailVerified: boolean
      otp: string | null
      otpExpiry: Date | null
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    basicInfo<T extends User$basicInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$basicInfoArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bioSummary<T extends User$bioSummaryArgs<ExtArgs> = {}>(args?: Subset<T, User$bioSummaryArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collaboration<T extends User$collaborationArgs<ExtArgs> = {}>(args?: Subset<T, User$collaborationArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ParticipantA<T extends User$ParticipantAArgs<ExtArgs> = {}>(args?: Subset<T, User$ParticipantAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParticipantB<T extends User$ParticipantBArgs<ExtArgs> = {}>(args?: Subset<T, User$ParticipantBArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentIncomingConnections<T extends User$sentIncomingConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentIncomingConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingConnections<T extends User$incomingConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$incomingConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outgoingConnections<T extends User$outgoingConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$outgoingConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReceiveoutgoingConnections<T extends User$ReceiveoutgoingConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$ReceiveoutgoingConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    showcase<T extends User$showcaseArgs<ExtArgs> = {}>(args?: Subset<T, User$showcaseArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    technicalProfile<T extends User$technicalProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$technicalProfileArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    visuals<T extends User$visualsArgs<ExtArgs> = {}>(args?: Subset<T, User$visualsArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiry: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.basicInfo
   */
  export type User$basicInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    where?: BasicInfoWhereInput
  }

  /**
   * User.bioSummary
   */
  export type User$bioSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    where?: BioSummaryWhereInput
  }

  /**
   * User.collaboration
   */
  export type User$collaborationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    where?: CollaborationWhereInput
  }

  /**
   * User.ParticipantA
   */
  export type User$ParticipantAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * User.ParticipantB
   */
  export type User$ParticipantBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * User.sentIncomingConnections
   */
  export type User$sentIncomingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    where?: IncomingConnectionWhereInput
    orderBy?: IncomingConnectionOrderByWithRelationInput | IncomingConnectionOrderByWithRelationInput[]
    cursor?: IncomingConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomingConnectionScalarFieldEnum | IncomingConnectionScalarFieldEnum[]
  }

  /**
   * User.incomingConnections
   */
  export type User$incomingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    where?: IncomingConnectionWhereInput
    orderBy?: IncomingConnectionOrderByWithRelationInput | IncomingConnectionOrderByWithRelationInput[]
    cursor?: IncomingConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomingConnectionScalarFieldEnum | IncomingConnectionScalarFieldEnum[]
  }

  /**
   * User.outgoingConnections
   */
  export type User$outgoingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    where?: OutgoingConnectionWhereInput
    orderBy?: OutgoingConnectionOrderByWithRelationInput | OutgoingConnectionOrderByWithRelationInput[]
    cursor?: OutgoingConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutgoingConnectionScalarFieldEnum | OutgoingConnectionScalarFieldEnum[]
  }

  /**
   * User.ReceiveoutgoingConnections
   */
  export type User$ReceiveoutgoingConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    where?: OutgoingConnectionWhereInput
    orderBy?: OutgoingConnectionOrderByWithRelationInput | OutgoingConnectionOrderByWithRelationInput[]
    cursor?: OutgoingConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutgoingConnectionScalarFieldEnum | OutgoingConnectionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.showcase
   */
  export type User$showcaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    where?: ShowcaseWhereInput
  }

  /**
   * User.technicalProfile
   */
  export type User$technicalProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    where?: TechnicalProfileWhereInput
  }

  /**
   * User.visuals
   */
  export type User$visualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    where?: VisualsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BasicInfo
   */

  export type AggregateBasicInfo = {
    _count: BasicInfoCountAggregateOutputType | null
    _avg: BasicInfoAvgAggregateOutputType | null
    _sum: BasicInfoSumAggregateOutputType | null
    _min: BasicInfoMinAggregateOutputType | null
    _max: BasicInfoMaxAggregateOutputType | null
  }

  export type BasicInfoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BasicInfoSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BasicInfoMinAggregateOutputType = {
    id: number | null
    userId: number | null
    fullName: string | null
    Institute: string | null
    major: string | null
    location: string | null
  }

  export type BasicInfoMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    fullName: string | null
    Institute: string | null
    major: string | null
    location: string | null
  }

  export type BasicInfoCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    Institute: number
    major: number
    location: number
    _all: number
  }


  export type BasicInfoAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BasicInfoSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BasicInfoMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    Institute?: true
    major?: true
    location?: true
  }

  export type BasicInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    Institute?: true
    major?: true
    location?: true
  }

  export type BasicInfoCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    Institute?: true
    major?: true
    location?: true
    _all?: true
  }

  export type BasicInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BasicInfo to aggregate.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BasicInfos
    **/
    _count?: true | BasicInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BasicInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BasicInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BasicInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BasicInfoMaxAggregateInputType
  }

  export type GetBasicInfoAggregateType<T extends BasicInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateBasicInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasicInfo[P]>
      : GetScalarType<T[P], AggregateBasicInfo[P]>
  }




  export type BasicInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BasicInfoWhereInput
    orderBy?: BasicInfoOrderByWithAggregationInput | BasicInfoOrderByWithAggregationInput[]
    by: BasicInfoScalarFieldEnum[] | BasicInfoScalarFieldEnum
    having?: BasicInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BasicInfoCountAggregateInputType | true
    _avg?: BasicInfoAvgAggregateInputType
    _sum?: BasicInfoSumAggregateInputType
    _min?: BasicInfoMinAggregateInputType
    _max?: BasicInfoMaxAggregateInputType
  }

  export type BasicInfoGroupByOutputType = {
    id: number
    userId: number
    fullName: string
    Institute: string | null
    major: string | null
    location: string | null
    _count: BasicInfoCountAggregateOutputType | null
    _avg: BasicInfoAvgAggregateOutputType | null
    _sum: BasicInfoSumAggregateOutputType | null
    _min: BasicInfoMinAggregateOutputType | null
    _max: BasicInfoMaxAggregateOutputType | null
  }

  type GetBasicInfoGroupByPayload<T extends BasicInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BasicInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BasicInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BasicInfoGroupByOutputType[P]>
            : GetScalarType<T[P], BasicInfoGroupByOutputType[P]>
        }
      >
    >


  export type BasicInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    Institute?: boolean
    major?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["basicInfo"]>

  export type BasicInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    Institute?: boolean
    major?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["basicInfo"]>

  export type BasicInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    Institute?: boolean
    major?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["basicInfo"]>

  export type BasicInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    Institute?: boolean
    major?: boolean
    location?: boolean
  }

  export type BasicInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "Institute" | "major" | "location", ExtArgs["result"]["basicInfo"]>
  export type BasicInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BasicInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BasicInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BasicInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BasicInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      fullName: string
      Institute: string | null
      major: string | null
      location: string | null
    }, ExtArgs["result"]["basicInfo"]>
    composites: {}
  }

  type BasicInfoGetPayload<S extends boolean | null | undefined | BasicInfoDefaultArgs> = $Result.GetResult<Prisma.$BasicInfoPayload, S>

  type BasicInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BasicInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: BasicInfoCountAggregateInputType | true
    }

  export interface BasicInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BasicInfo'], meta: { name: 'BasicInfo' } }
    /**
     * Find zero or one BasicInfo that matches the filter.
     * @param {BasicInfoFindUniqueArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BasicInfoFindUniqueArgs>(args: SelectSubset<T, BasicInfoFindUniqueArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BasicInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BasicInfoFindUniqueOrThrowArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BasicInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, BasicInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BasicInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoFindFirstArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BasicInfoFindFirstArgs>(args?: SelectSubset<T, BasicInfoFindFirstArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BasicInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoFindFirstOrThrowArgs} args - Arguments to find a BasicInfo
     * @example
     * // Get one BasicInfo
     * const basicInfo = await prisma.basicInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BasicInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, BasicInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BasicInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BasicInfos
     * const basicInfos = await prisma.basicInfo.findMany()
     * 
     * // Get first 10 BasicInfos
     * const basicInfos = await prisma.basicInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basicInfoWithIdOnly = await prisma.basicInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BasicInfoFindManyArgs>(args?: SelectSubset<T, BasicInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BasicInfo.
     * @param {BasicInfoCreateArgs} args - Arguments to create a BasicInfo.
     * @example
     * // Create one BasicInfo
     * const BasicInfo = await prisma.basicInfo.create({
     *   data: {
     *     // ... data to create a BasicInfo
     *   }
     * })
     * 
     */
    create<T extends BasicInfoCreateArgs>(args: SelectSubset<T, BasicInfoCreateArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BasicInfos.
     * @param {BasicInfoCreateManyArgs} args - Arguments to create many BasicInfos.
     * @example
     * // Create many BasicInfos
     * const basicInfo = await prisma.basicInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BasicInfoCreateManyArgs>(args?: SelectSubset<T, BasicInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BasicInfos and returns the data saved in the database.
     * @param {BasicInfoCreateManyAndReturnArgs} args - Arguments to create many BasicInfos.
     * @example
     * // Create many BasicInfos
     * const basicInfo = await prisma.basicInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BasicInfos and only return the `id`
     * const basicInfoWithIdOnly = await prisma.basicInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BasicInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, BasicInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BasicInfo.
     * @param {BasicInfoDeleteArgs} args - Arguments to delete one BasicInfo.
     * @example
     * // Delete one BasicInfo
     * const BasicInfo = await prisma.basicInfo.delete({
     *   where: {
     *     // ... filter to delete one BasicInfo
     *   }
     * })
     * 
     */
    delete<T extends BasicInfoDeleteArgs>(args: SelectSubset<T, BasicInfoDeleteArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BasicInfo.
     * @param {BasicInfoUpdateArgs} args - Arguments to update one BasicInfo.
     * @example
     * // Update one BasicInfo
     * const basicInfo = await prisma.basicInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BasicInfoUpdateArgs>(args: SelectSubset<T, BasicInfoUpdateArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BasicInfos.
     * @param {BasicInfoDeleteManyArgs} args - Arguments to filter BasicInfos to delete.
     * @example
     * // Delete a few BasicInfos
     * const { count } = await prisma.basicInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BasicInfoDeleteManyArgs>(args?: SelectSubset<T, BasicInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BasicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BasicInfos
     * const basicInfo = await prisma.basicInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BasicInfoUpdateManyArgs>(args: SelectSubset<T, BasicInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BasicInfos and returns the data updated in the database.
     * @param {BasicInfoUpdateManyAndReturnArgs} args - Arguments to update many BasicInfos.
     * @example
     * // Update many BasicInfos
     * const basicInfo = await prisma.basicInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BasicInfos and only return the `id`
     * const basicInfoWithIdOnly = await prisma.basicInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends BasicInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, BasicInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BasicInfo.
     * @param {BasicInfoUpsertArgs} args - Arguments to update or create a BasicInfo.
     * @example
     * // Update or create a BasicInfo
     * const basicInfo = await prisma.basicInfo.upsert({
     *   create: {
     *     // ... data to create a BasicInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BasicInfo we want to update
     *   }
     * })
     */
    upsert<T extends BasicInfoUpsertArgs>(args: SelectSubset<T, BasicInfoUpsertArgs<ExtArgs>>): Prisma__BasicInfoClient<$Result.GetResult<Prisma.$BasicInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BasicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoCountArgs} args - Arguments to filter BasicInfos to count.
     * @example
     * // Count the number of BasicInfos
     * const count = await prisma.basicInfo.count({
     *   where: {
     *     // ... the filter for the BasicInfos we want to count
     *   }
     * })
    **/
    count<T extends BasicInfoCountArgs>(
      args?: Subset<T, BasicInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BasicInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BasicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BasicInfoAggregateArgs>(args: Subset<T, BasicInfoAggregateArgs>): Prisma.PrismaPromise<GetBasicInfoAggregateType<T>>

    /**
     * Group by BasicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicInfoGroupByArgs} args - Group by arguments.
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
      T extends BasicInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BasicInfoGroupByArgs['orderBy'] }
        : { orderBy?: BasicInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BasicInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasicInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BasicInfo model
   */
  readonly fields: BasicInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BasicInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BasicInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BasicInfo model
   */
  interface BasicInfoFieldRefs {
    readonly id: FieldRef<"BasicInfo", 'Int'>
    readonly userId: FieldRef<"BasicInfo", 'Int'>
    readonly fullName: FieldRef<"BasicInfo", 'String'>
    readonly Institute: FieldRef<"BasicInfo", 'String'>
    readonly major: FieldRef<"BasicInfo", 'String'>
    readonly location: FieldRef<"BasicInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BasicInfo findUnique
   */
  export type BasicInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where: BasicInfoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo findUniqueOrThrow
   */
  export type BasicInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where: BasicInfoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo findFirst
   */
  export type BasicInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BasicInfos.
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BasicInfos.
     */
    distinct?: BasicInfoScalarFieldEnum | BasicInfoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo findFirstOrThrow
   */
  export type BasicInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfo to fetch.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BasicInfos.
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BasicInfos.
     */
    distinct?: BasicInfoScalarFieldEnum | BasicInfoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo findMany
   */
  export type BasicInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter, which BasicInfos to fetch.
     */
    where?: BasicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BasicInfos to fetch.
     */
    orderBy?: BasicInfoOrderByWithRelationInput | BasicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BasicInfos.
     */
    cursor?: BasicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BasicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BasicInfos.
     */
    skip?: number
    distinct?: BasicInfoScalarFieldEnum | BasicInfoScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo create
   */
  export type BasicInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a BasicInfo.
     */
    data: XOR<BasicInfoCreateInput, BasicInfoUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo createMany
   */
  export type BasicInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BasicInfos.
     */
    data: BasicInfoCreateManyInput | BasicInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BasicInfo createManyAndReturn
   */
  export type BasicInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * The data used to create many BasicInfos.
     */
    data: BasicInfoCreateManyInput | BasicInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BasicInfo update
   */
  export type BasicInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a BasicInfo.
     */
    data: XOR<BasicInfoUpdateInput, BasicInfoUncheckedUpdateInput>
    /**
     * Choose, which BasicInfo to update.
     */
    where: BasicInfoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo updateMany
   */
  export type BasicInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BasicInfos.
     */
    data: XOR<BasicInfoUpdateManyMutationInput, BasicInfoUncheckedUpdateManyInput>
    /**
     * Filter which BasicInfos to update
     */
    where?: BasicInfoWhereInput
    /**
     * Limit how many BasicInfos to update.
     */
    limit?: number
  }

  /**
   * BasicInfo updateManyAndReturn
   */
  export type BasicInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * The data used to update BasicInfos.
     */
    data: XOR<BasicInfoUpdateManyMutationInput, BasicInfoUncheckedUpdateManyInput>
    /**
     * Filter which BasicInfos to update
     */
    where?: BasicInfoWhereInput
    /**
     * Limit how many BasicInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BasicInfo upsert
   */
  export type BasicInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the BasicInfo to update in case it exists.
     */
    where: BasicInfoWhereUniqueInput
    /**
     * In case the BasicInfo found by the `where` argument doesn't exist, create a new BasicInfo with this data.
     */
    create: XOR<BasicInfoCreateInput, BasicInfoUncheckedCreateInput>
    /**
     * In case the BasicInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BasicInfoUpdateInput, BasicInfoUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo delete
   */
  export type BasicInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
    /**
     * Filter which BasicInfo to delete.
     */
    where: BasicInfoWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BasicInfo deleteMany
   */
  export type BasicInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BasicInfos to delete
     */
    where?: BasicInfoWhereInput
    /**
     * Limit how many BasicInfos to delete.
     */
    limit?: number
  }

  /**
   * BasicInfo without action
   */
  export type BasicInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BasicInfo
     */
    select?: BasicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BasicInfo
     */
    omit?: BasicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BasicInfoInclude<ExtArgs> | null
  }


  /**
   * Model TechnicalProfile
   */

  export type AggregateTechnicalProfile = {
    _count: TechnicalProfileCountAggregateOutputType | null
    _avg: TechnicalProfileAvgAggregateOutputType | null
    _sum: TechnicalProfileSumAggregateOutputType | null
    _min: TechnicalProfileMinAggregateOutputType | null
    _max: TechnicalProfileMaxAggregateOutputType | null
  }

  export type TechnicalProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TechnicalProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TechnicalProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    experienceLevel: string | null
  }

  export type TechnicalProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    experienceLevel: string | null
  }

  export type TechnicalProfileCountAggregateOutputType = {
    id: number
    userId: number
    skills: number
    experienceLevel: number
    _all: number
  }


  export type TechnicalProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TechnicalProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TechnicalProfileMinAggregateInputType = {
    id?: true
    userId?: true
    experienceLevel?: true
  }

  export type TechnicalProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    experienceLevel?: true
  }

  export type TechnicalProfileCountAggregateInputType = {
    id?: true
    userId?: true
    skills?: true
    experienceLevel?: true
    _all?: true
  }

  export type TechnicalProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicalProfile to aggregate.
     */
    where?: TechnicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalProfiles to fetch.
     */
    orderBy?: TechnicalProfileOrderByWithRelationInput | TechnicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechnicalProfiles
    **/
    _count?: true | TechnicalProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicalProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicalProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicalProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicalProfileMaxAggregateInputType
  }

  export type GetTechnicalProfileAggregateType<T extends TechnicalProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicalProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicalProfile[P]>
      : GetScalarType<T[P], AggregateTechnicalProfile[P]>
  }




  export type TechnicalProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicalProfileWhereInput
    orderBy?: TechnicalProfileOrderByWithAggregationInput | TechnicalProfileOrderByWithAggregationInput[]
    by: TechnicalProfileScalarFieldEnum[] | TechnicalProfileScalarFieldEnum
    having?: TechnicalProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicalProfileCountAggregateInputType | true
    _avg?: TechnicalProfileAvgAggregateInputType
    _sum?: TechnicalProfileSumAggregateInputType
    _min?: TechnicalProfileMinAggregateInputType
    _max?: TechnicalProfileMaxAggregateInputType
  }

  export type TechnicalProfileGroupByOutputType = {
    id: number
    userId: number
    skills: string[]
    experienceLevel: string | null
    _count: TechnicalProfileCountAggregateOutputType | null
    _avg: TechnicalProfileAvgAggregateOutputType | null
    _sum: TechnicalProfileSumAggregateOutputType | null
    _min: TechnicalProfileMinAggregateOutputType | null
    _max: TechnicalProfileMaxAggregateOutputType | null
  }

  type GetTechnicalProfileGroupByPayload<T extends TechnicalProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicalProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicalProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicalProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicalProfileGroupByOutputType[P]>
        }
      >
    >


  export type TechnicalProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skills?: boolean
    experienceLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicalProfile"]>

  export type TechnicalProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skills?: boolean
    experienceLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicalProfile"]>

  export type TechnicalProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skills?: boolean
    experienceLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicalProfile"]>

  export type TechnicalProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    skills?: boolean
    experienceLevel?: boolean
  }

  export type TechnicalProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skills" | "experienceLevel", ExtArgs["result"]["technicalProfile"]>
  export type TechnicalProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TechnicalProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TechnicalProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TechnicalProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechnicalProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      skills: string[]
      experienceLevel: string | null
    }, ExtArgs["result"]["technicalProfile"]>
    composites: {}
  }

  type TechnicalProfileGetPayload<S extends boolean | null | undefined | TechnicalProfileDefaultArgs> = $Result.GetResult<Prisma.$TechnicalProfilePayload, S>

  type TechnicalProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnicalProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TechnicalProfileCountAggregateInputType | true
    }

  export interface TechnicalProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechnicalProfile'], meta: { name: 'TechnicalProfile' } }
    /**
     * Find zero or one TechnicalProfile that matches the filter.
     * @param {TechnicalProfileFindUniqueArgs} args - Arguments to find a TechnicalProfile
     * @example
     * // Get one TechnicalProfile
     * const technicalProfile = await prisma.technicalProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicalProfileFindUniqueArgs>(args: SelectSubset<T, TechnicalProfileFindUniqueArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TechnicalProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnicalProfileFindUniqueOrThrowArgs} args - Arguments to find a TechnicalProfile
     * @example
     * // Get one TechnicalProfile
     * const technicalProfile = await prisma.technicalProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicalProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicalProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechnicalProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalProfileFindFirstArgs} args - Arguments to find a TechnicalProfile
     * @example
     * // Get one TechnicalProfile
     * const technicalProfile = await prisma.technicalProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicalProfileFindFirstArgs>(args?: SelectSubset<T, TechnicalProfileFindFirstArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechnicalProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalProfileFindFirstOrThrowArgs} args - Arguments to find a TechnicalProfile
     * @example
     * // Get one TechnicalProfile
     * const technicalProfile = await prisma.technicalProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicalProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicalProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TechnicalProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicalProfiles
     * const technicalProfiles = await prisma.technicalProfile.findMany()
     * 
     * // Get first 10 TechnicalProfiles
     * const technicalProfiles = await prisma.technicalProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicalProfileWithIdOnly = await prisma.technicalProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicalProfileFindManyArgs>(args?: SelectSubset<T, TechnicalProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TechnicalProfile.
     * @param {TechnicalProfileCreateArgs} args - Arguments to create a TechnicalProfile.
     * @example
     * // Create one TechnicalProfile
     * const TechnicalProfile = await prisma.technicalProfile.create({
     *   data: {
     *     // ... data to create a TechnicalProfile
     *   }
     * })
     * 
     */
    create<T extends TechnicalProfileCreateArgs>(args: SelectSubset<T, TechnicalProfileCreateArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TechnicalProfiles.
     * @param {TechnicalProfileCreateManyArgs} args - Arguments to create many TechnicalProfiles.
     * @example
     * // Create many TechnicalProfiles
     * const technicalProfile = await prisma.technicalProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicalProfileCreateManyArgs>(args?: SelectSubset<T, TechnicalProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TechnicalProfiles and returns the data saved in the database.
     * @param {TechnicalProfileCreateManyAndReturnArgs} args - Arguments to create many TechnicalProfiles.
     * @example
     * // Create many TechnicalProfiles
     * const technicalProfile = await prisma.technicalProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TechnicalProfiles and only return the `id`
     * const technicalProfileWithIdOnly = await prisma.technicalProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnicalProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnicalProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TechnicalProfile.
     * @param {TechnicalProfileDeleteArgs} args - Arguments to delete one TechnicalProfile.
     * @example
     * // Delete one TechnicalProfile
     * const TechnicalProfile = await prisma.technicalProfile.delete({
     *   where: {
     *     // ... filter to delete one TechnicalProfile
     *   }
     * })
     * 
     */
    delete<T extends TechnicalProfileDeleteArgs>(args: SelectSubset<T, TechnicalProfileDeleteArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TechnicalProfile.
     * @param {TechnicalProfileUpdateArgs} args - Arguments to update one TechnicalProfile.
     * @example
     * // Update one TechnicalProfile
     * const technicalProfile = await prisma.technicalProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicalProfileUpdateArgs>(args: SelectSubset<T, TechnicalProfileUpdateArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TechnicalProfiles.
     * @param {TechnicalProfileDeleteManyArgs} args - Arguments to filter TechnicalProfiles to delete.
     * @example
     * // Delete a few TechnicalProfiles
     * const { count } = await prisma.technicalProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicalProfileDeleteManyArgs>(args?: SelectSubset<T, TechnicalProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicalProfiles
     * const technicalProfile = await prisma.technicalProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicalProfileUpdateManyArgs>(args: SelectSubset<T, TechnicalProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicalProfiles and returns the data updated in the database.
     * @param {TechnicalProfileUpdateManyAndReturnArgs} args - Arguments to update many TechnicalProfiles.
     * @example
     * // Update many TechnicalProfiles
     * const technicalProfile = await prisma.technicalProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TechnicalProfiles and only return the `id`
     * const technicalProfileWithIdOnly = await prisma.technicalProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TechnicalProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnicalProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TechnicalProfile.
     * @param {TechnicalProfileUpsertArgs} args - Arguments to update or create a TechnicalProfile.
     * @example
     * // Update or create a TechnicalProfile
     * const technicalProfile = await prisma.technicalProfile.upsert({
     *   create: {
     *     // ... data to create a TechnicalProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicalProfile we want to update
     *   }
     * })
     */
    upsert<T extends TechnicalProfileUpsertArgs>(args: SelectSubset<T, TechnicalProfileUpsertArgs<ExtArgs>>): Prisma__TechnicalProfileClient<$Result.GetResult<Prisma.$TechnicalProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TechnicalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalProfileCountArgs} args - Arguments to filter TechnicalProfiles to count.
     * @example
     * // Count the number of TechnicalProfiles
     * const count = await prisma.technicalProfile.count({
     *   where: {
     *     // ... the filter for the TechnicalProfiles we want to count
     *   }
     * })
    **/
    count<T extends TechnicalProfileCountArgs>(
      args?: Subset<T, TechnicalProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicalProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnicalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechnicalProfileAggregateArgs>(args: Subset<T, TechnicalProfileAggregateArgs>): Prisma.PrismaPromise<GetTechnicalProfileAggregateType<T>>

    /**
     * Group by TechnicalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalProfileGroupByArgs} args - Group by arguments.
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
      T extends TechnicalProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicalProfileGroupByArgs['orderBy'] }
        : { orderBy?: TechnicalProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TechnicalProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicalProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechnicalProfile model
   */
  readonly fields: TechnicalProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechnicalProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicalProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TechnicalProfile model
   */
  interface TechnicalProfileFieldRefs {
    readonly id: FieldRef<"TechnicalProfile", 'Int'>
    readonly userId: FieldRef<"TechnicalProfile", 'Int'>
    readonly skills: FieldRef<"TechnicalProfile", 'String[]'>
    readonly experienceLevel: FieldRef<"TechnicalProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TechnicalProfile findUnique
   */
  export type TechnicalProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalProfile to fetch.
     */
    where: TechnicalProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile findUniqueOrThrow
   */
  export type TechnicalProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalProfile to fetch.
     */
    where: TechnicalProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile findFirst
   */
  export type TechnicalProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalProfile to fetch.
     */
    where?: TechnicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalProfiles to fetch.
     */
    orderBy?: TechnicalProfileOrderByWithRelationInput | TechnicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicalProfiles.
     */
    cursor?: TechnicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicalProfiles.
     */
    distinct?: TechnicalProfileScalarFieldEnum | TechnicalProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile findFirstOrThrow
   */
  export type TechnicalProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalProfile to fetch.
     */
    where?: TechnicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalProfiles to fetch.
     */
    orderBy?: TechnicalProfileOrderByWithRelationInput | TechnicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicalProfiles.
     */
    cursor?: TechnicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicalProfiles.
     */
    distinct?: TechnicalProfileScalarFieldEnum | TechnicalProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile findMany
   */
  export type TechnicalProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalProfiles to fetch.
     */
    where?: TechnicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalProfiles to fetch.
     */
    orderBy?: TechnicalProfileOrderByWithRelationInput | TechnicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechnicalProfiles.
     */
    cursor?: TechnicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalProfiles.
     */
    skip?: number
    distinct?: TechnicalProfileScalarFieldEnum | TechnicalProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile create
   */
  export type TechnicalProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TechnicalProfile.
     */
    data: XOR<TechnicalProfileCreateInput, TechnicalProfileUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile createMany
   */
  export type TechnicalProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechnicalProfiles.
     */
    data: TechnicalProfileCreateManyInput | TechnicalProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TechnicalProfile createManyAndReturn
   */
  export type TechnicalProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TechnicalProfiles.
     */
    data: TechnicalProfileCreateManyInput | TechnicalProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TechnicalProfile update
   */
  export type TechnicalProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TechnicalProfile.
     */
    data: XOR<TechnicalProfileUpdateInput, TechnicalProfileUncheckedUpdateInput>
    /**
     * Choose, which TechnicalProfile to update.
     */
    where: TechnicalProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile updateMany
   */
  export type TechnicalProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnicalProfiles.
     */
    data: XOR<TechnicalProfileUpdateManyMutationInput, TechnicalProfileUncheckedUpdateManyInput>
    /**
     * Filter which TechnicalProfiles to update
     */
    where?: TechnicalProfileWhereInput
    /**
     * Limit how many TechnicalProfiles to update.
     */
    limit?: number
  }

  /**
   * TechnicalProfile updateManyAndReturn
   */
  export type TechnicalProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * The data used to update TechnicalProfiles.
     */
    data: XOR<TechnicalProfileUpdateManyMutationInput, TechnicalProfileUncheckedUpdateManyInput>
    /**
     * Filter which TechnicalProfiles to update
     */
    where?: TechnicalProfileWhereInput
    /**
     * Limit how many TechnicalProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TechnicalProfile upsert
   */
  export type TechnicalProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TechnicalProfile to update in case it exists.
     */
    where: TechnicalProfileWhereUniqueInput
    /**
     * In case the TechnicalProfile found by the `where` argument doesn't exist, create a new TechnicalProfile with this data.
     */
    create: XOR<TechnicalProfileCreateInput, TechnicalProfileUncheckedCreateInput>
    /**
     * In case the TechnicalProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicalProfileUpdateInput, TechnicalProfileUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile delete
   */
  export type TechnicalProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
    /**
     * Filter which TechnicalProfile to delete.
     */
    where: TechnicalProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TechnicalProfile deleteMany
   */
  export type TechnicalProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicalProfiles to delete
     */
    where?: TechnicalProfileWhereInput
    /**
     * Limit how many TechnicalProfiles to delete.
     */
    limit?: number
  }

  /**
   * TechnicalProfile without action
   */
  export type TechnicalProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalProfile
     */
    select?: TechnicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalProfile
     */
    omit?: TechnicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalProfileInclude<ExtArgs> | null
  }


  /**
   * Model BioSummary
   */

  export type AggregateBioSummary = {
    _count: BioSummaryCountAggregateOutputType | null
    _avg: BioSummaryAvgAggregateOutputType | null
    _sum: BioSummarySumAggregateOutputType | null
    _min: BioSummaryMinAggregateOutputType | null
    _max: BioSummaryMaxAggregateOutputType | null
  }

  export type BioSummaryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BioSummarySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BioSummaryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    shortBio: string | null
    tagline: string | null
  }

  export type BioSummaryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    shortBio: string | null
    tagline: string | null
  }

  export type BioSummaryCountAggregateOutputType = {
    id: number
    userId: number
    shortBio: number
    tagline: number
    _all: number
  }


  export type BioSummaryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BioSummarySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BioSummaryMinAggregateInputType = {
    id?: true
    userId?: true
    shortBio?: true
    tagline?: true
  }

  export type BioSummaryMaxAggregateInputType = {
    id?: true
    userId?: true
    shortBio?: true
    tagline?: true
  }

  export type BioSummaryCountAggregateInputType = {
    id?: true
    userId?: true
    shortBio?: true
    tagline?: true
    _all?: true
  }

  export type BioSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BioSummary to aggregate.
     */
    where?: BioSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioSummaries to fetch.
     */
    orderBy?: BioSummaryOrderByWithRelationInput | BioSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BioSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BioSummaries
    **/
    _count?: true | BioSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BioSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BioSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BioSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BioSummaryMaxAggregateInputType
  }

  export type GetBioSummaryAggregateType<T extends BioSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateBioSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBioSummary[P]>
      : GetScalarType<T[P], AggregateBioSummary[P]>
  }




  export type BioSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BioSummaryWhereInput
    orderBy?: BioSummaryOrderByWithAggregationInput | BioSummaryOrderByWithAggregationInput[]
    by: BioSummaryScalarFieldEnum[] | BioSummaryScalarFieldEnum
    having?: BioSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BioSummaryCountAggregateInputType | true
    _avg?: BioSummaryAvgAggregateInputType
    _sum?: BioSummarySumAggregateInputType
    _min?: BioSummaryMinAggregateInputType
    _max?: BioSummaryMaxAggregateInputType
  }

  export type BioSummaryGroupByOutputType = {
    id: number
    userId: number
    shortBio: string | null
    tagline: string | null
    _count: BioSummaryCountAggregateOutputType | null
    _avg: BioSummaryAvgAggregateOutputType | null
    _sum: BioSummarySumAggregateOutputType | null
    _min: BioSummaryMinAggregateOutputType | null
    _max: BioSummaryMaxAggregateOutputType | null
  }

  type GetBioSummaryGroupByPayload<T extends BioSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BioSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BioSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BioSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], BioSummaryGroupByOutputType[P]>
        }
      >
    >


  export type BioSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shortBio?: boolean
    tagline?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bioSummary"]>

  export type BioSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shortBio?: boolean
    tagline?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bioSummary"]>

  export type BioSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shortBio?: boolean
    tagline?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bioSummary"]>

  export type BioSummarySelectScalar = {
    id?: boolean
    userId?: boolean
    shortBio?: boolean
    tagline?: boolean
  }

  export type BioSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shortBio" | "tagline", ExtArgs["result"]["bioSummary"]>
  export type BioSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BioSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BioSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BioSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BioSummary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      shortBio: string | null
      tagline: string | null
    }, ExtArgs["result"]["bioSummary"]>
    composites: {}
  }

  type BioSummaryGetPayload<S extends boolean | null | undefined | BioSummaryDefaultArgs> = $Result.GetResult<Prisma.$BioSummaryPayload, S>

  type BioSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BioSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: BioSummaryCountAggregateInputType | true
    }

  export interface BioSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BioSummary'], meta: { name: 'BioSummary' } }
    /**
     * Find zero or one BioSummary that matches the filter.
     * @param {BioSummaryFindUniqueArgs} args - Arguments to find a BioSummary
     * @example
     * // Get one BioSummary
     * const bioSummary = await prisma.bioSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BioSummaryFindUniqueArgs>(args: SelectSubset<T, BioSummaryFindUniqueArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BioSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BioSummaryFindUniqueOrThrowArgs} args - Arguments to find a BioSummary
     * @example
     * // Get one BioSummary
     * const bioSummary = await prisma.bioSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BioSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, BioSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BioSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioSummaryFindFirstArgs} args - Arguments to find a BioSummary
     * @example
     * // Get one BioSummary
     * const bioSummary = await prisma.bioSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BioSummaryFindFirstArgs>(args?: SelectSubset<T, BioSummaryFindFirstArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BioSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioSummaryFindFirstOrThrowArgs} args - Arguments to find a BioSummary
     * @example
     * // Get one BioSummary
     * const bioSummary = await prisma.bioSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BioSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, BioSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BioSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BioSummaries
     * const bioSummaries = await prisma.bioSummary.findMany()
     * 
     * // Get first 10 BioSummaries
     * const bioSummaries = await prisma.bioSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bioSummaryWithIdOnly = await prisma.bioSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BioSummaryFindManyArgs>(args?: SelectSubset<T, BioSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BioSummary.
     * @param {BioSummaryCreateArgs} args - Arguments to create a BioSummary.
     * @example
     * // Create one BioSummary
     * const BioSummary = await prisma.bioSummary.create({
     *   data: {
     *     // ... data to create a BioSummary
     *   }
     * })
     * 
     */
    create<T extends BioSummaryCreateArgs>(args: SelectSubset<T, BioSummaryCreateArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BioSummaries.
     * @param {BioSummaryCreateManyArgs} args - Arguments to create many BioSummaries.
     * @example
     * // Create many BioSummaries
     * const bioSummary = await prisma.bioSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BioSummaryCreateManyArgs>(args?: SelectSubset<T, BioSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BioSummaries and returns the data saved in the database.
     * @param {BioSummaryCreateManyAndReturnArgs} args - Arguments to create many BioSummaries.
     * @example
     * // Create many BioSummaries
     * const bioSummary = await prisma.bioSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BioSummaries and only return the `id`
     * const bioSummaryWithIdOnly = await prisma.bioSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BioSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, BioSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BioSummary.
     * @param {BioSummaryDeleteArgs} args - Arguments to delete one BioSummary.
     * @example
     * // Delete one BioSummary
     * const BioSummary = await prisma.bioSummary.delete({
     *   where: {
     *     // ... filter to delete one BioSummary
     *   }
     * })
     * 
     */
    delete<T extends BioSummaryDeleteArgs>(args: SelectSubset<T, BioSummaryDeleteArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BioSummary.
     * @param {BioSummaryUpdateArgs} args - Arguments to update one BioSummary.
     * @example
     * // Update one BioSummary
     * const bioSummary = await prisma.bioSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BioSummaryUpdateArgs>(args: SelectSubset<T, BioSummaryUpdateArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BioSummaries.
     * @param {BioSummaryDeleteManyArgs} args - Arguments to filter BioSummaries to delete.
     * @example
     * // Delete a few BioSummaries
     * const { count } = await prisma.bioSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BioSummaryDeleteManyArgs>(args?: SelectSubset<T, BioSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BioSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BioSummaries
     * const bioSummary = await prisma.bioSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BioSummaryUpdateManyArgs>(args: SelectSubset<T, BioSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BioSummaries and returns the data updated in the database.
     * @param {BioSummaryUpdateManyAndReturnArgs} args - Arguments to update many BioSummaries.
     * @example
     * // Update many BioSummaries
     * const bioSummary = await prisma.bioSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BioSummaries and only return the `id`
     * const bioSummaryWithIdOnly = await prisma.bioSummary.updateManyAndReturn({
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
    updateManyAndReturn<T extends BioSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, BioSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BioSummary.
     * @param {BioSummaryUpsertArgs} args - Arguments to update or create a BioSummary.
     * @example
     * // Update or create a BioSummary
     * const bioSummary = await prisma.bioSummary.upsert({
     *   create: {
     *     // ... data to create a BioSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BioSummary we want to update
     *   }
     * })
     */
    upsert<T extends BioSummaryUpsertArgs>(args: SelectSubset<T, BioSummaryUpsertArgs<ExtArgs>>): Prisma__BioSummaryClient<$Result.GetResult<Prisma.$BioSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BioSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioSummaryCountArgs} args - Arguments to filter BioSummaries to count.
     * @example
     * // Count the number of BioSummaries
     * const count = await prisma.bioSummary.count({
     *   where: {
     *     // ... the filter for the BioSummaries we want to count
     *   }
     * })
    **/
    count<T extends BioSummaryCountArgs>(
      args?: Subset<T, BioSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BioSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BioSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BioSummaryAggregateArgs>(args: Subset<T, BioSummaryAggregateArgs>): Prisma.PrismaPromise<GetBioSummaryAggregateType<T>>

    /**
     * Group by BioSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioSummaryGroupByArgs} args - Group by arguments.
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
      T extends BioSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BioSummaryGroupByArgs['orderBy'] }
        : { orderBy?: BioSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BioSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBioSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BioSummary model
   */
  readonly fields: BioSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BioSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BioSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BioSummary model
   */
  interface BioSummaryFieldRefs {
    readonly id: FieldRef<"BioSummary", 'Int'>
    readonly userId: FieldRef<"BioSummary", 'Int'>
    readonly shortBio: FieldRef<"BioSummary", 'String'>
    readonly tagline: FieldRef<"BioSummary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BioSummary findUnique
   */
  export type BioSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BioSummary to fetch.
     */
    where: BioSummaryWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary findUniqueOrThrow
   */
  export type BioSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BioSummary to fetch.
     */
    where: BioSummaryWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary findFirst
   */
  export type BioSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BioSummary to fetch.
     */
    where?: BioSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioSummaries to fetch.
     */
    orderBy?: BioSummaryOrderByWithRelationInput | BioSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BioSummaries.
     */
    cursor?: BioSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BioSummaries.
     */
    distinct?: BioSummaryScalarFieldEnum | BioSummaryScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary findFirstOrThrow
   */
  export type BioSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BioSummary to fetch.
     */
    where?: BioSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioSummaries to fetch.
     */
    orderBy?: BioSummaryOrderByWithRelationInput | BioSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BioSummaries.
     */
    cursor?: BioSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BioSummaries.
     */
    distinct?: BioSummaryScalarFieldEnum | BioSummaryScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary findMany
   */
  export type BioSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * Filter, which BioSummaries to fetch.
     */
    where?: BioSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioSummaries to fetch.
     */
    orderBy?: BioSummaryOrderByWithRelationInput | BioSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BioSummaries.
     */
    cursor?: BioSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioSummaries.
     */
    skip?: number
    distinct?: BioSummaryScalarFieldEnum | BioSummaryScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary create
   */
  export type BioSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a BioSummary.
     */
    data: XOR<BioSummaryCreateInput, BioSummaryUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary createMany
   */
  export type BioSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BioSummaries.
     */
    data: BioSummaryCreateManyInput | BioSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BioSummary createManyAndReturn
   */
  export type BioSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many BioSummaries.
     */
    data: BioSummaryCreateManyInput | BioSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BioSummary update
   */
  export type BioSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a BioSummary.
     */
    data: XOR<BioSummaryUpdateInput, BioSummaryUncheckedUpdateInput>
    /**
     * Choose, which BioSummary to update.
     */
    where: BioSummaryWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary updateMany
   */
  export type BioSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BioSummaries.
     */
    data: XOR<BioSummaryUpdateManyMutationInput, BioSummaryUncheckedUpdateManyInput>
    /**
     * Filter which BioSummaries to update
     */
    where?: BioSummaryWhereInput
    /**
     * Limit how many BioSummaries to update.
     */
    limit?: number
  }

  /**
   * BioSummary updateManyAndReturn
   */
  export type BioSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * The data used to update BioSummaries.
     */
    data: XOR<BioSummaryUpdateManyMutationInput, BioSummaryUncheckedUpdateManyInput>
    /**
     * Filter which BioSummaries to update
     */
    where?: BioSummaryWhereInput
    /**
     * Limit how many BioSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BioSummary upsert
   */
  export type BioSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the BioSummary to update in case it exists.
     */
    where: BioSummaryWhereUniqueInput
    /**
     * In case the BioSummary found by the `where` argument doesn't exist, create a new BioSummary with this data.
     */
    create: XOR<BioSummaryCreateInput, BioSummaryUncheckedCreateInput>
    /**
     * In case the BioSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BioSummaryUpdateInput, BioSummaryUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary delete
   */
  export type BioSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
    /**
     * Filter which BioSummary to delete.
     */
    where: BioSummaryWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * BioSummary deleteMany
   */
  export type BioSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BioSummaries to delete
     */
    where?: BioSummaryWhereInput
    /**
     * Limit how many BioSummaries to delete.
     */
    limit?: number
  }

  /**
   * BioSummary without action
   */
  export type BioSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioSummary
     */
    select?: BioSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioSummary
     */
    omit?: BioSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioSummaryInclude<ExtArgs> | null
  }


  /**
   * Model Showcase
   */

  export type AggregateShowcase = {
    _count: ShowcaseCountAggregateOutputType | null
    _avg: ShowcaseAvgAggregateOutputType | null
    _sum: ShowcaseSumAggregateOutputType | null
    _min: ShowcaseMinAggregateOutputType | null
    _max: ShowcaseMaxAggregateOutputType | null
  }

  export type ShowcaseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShowcaseSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShowcaseMinAggregateOutputType = {
    id: number | null
    userId: number | null
    github: string | null
    portfolio: string | null
    linkedin: string | null
    email: string | null
    whatsapp: string | null
  }

  export type ShowcaseMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    github: string | null
    portfolio: string | null
    linkedin: string | null
    email: string | null
    whatsapp: string | null
  }

  export type ShowcaseCountAggregateOutputType = {
    id: number
    userId: number
    github: number
    portfolio: number
    linkedin: number
    email: number
    whatsapp: number
    _all: number
  }


  export type ShowcaseAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShowcaseSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShowcaseMinAggregateInputType = {
    id?: true
    userId?: true
    github?: true
    portfolio?: true
    linkedin?: true
    email?: true
    whatsapp?: true
  }

  export type ShowcaseMaxAggregateInputType = {
    id?: true
    userId?: true
    github?: true
    portfolio?: true
    linkedin?: true
    email?: true
    whatsapp?: true
  }

  export type ShowcaseCountAggregateInputType = {
    id?: true
    userId?: true
    github?: true
    portfolio?: true
    linkedin?: true
    email?: true
    whatsapp?: true
    _all?: true
  }

  export type ShowcaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showcase to aggregate.
     */
    where?: ShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showcases to fetch.
     */
    orderBy?: ShowcaseOrderByWithRelationInput | ShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Showcases
    **/
    _count?: true | ShowcaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowcaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowcaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowcaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowcaseMaxAggregateInputType
  }

  export type GetShowcaseAggregateType<T extends ShowcaseAggregateArgs> = {
        [P in keyof T & keyof AggregateShowcase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowcase[P]>
      : GetScalarType<T[P], AggregateShowcase[P]>
  }




  export type ShowcaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowcaseWhereInput
    orderBy?: ShowcaseOrderByWithAggregationInput | ShowcaseOrderByWithAggregationInput[]
    by: ShowcaseScalarFieldEnum[] | ShowcaseScalarFieldEnum
    having?: ShowcaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowcaseCountAggregateInputType | true
    _avg?: ShowcaseAvgAggregateInputType
    _sum?: ShowcaseSumAggregateInputType
    _min?: ShowcaseMinAggregateInputType
    _max?: ShowcaseMaxAggregateInputType
  }

  export type ShowcaseGroupByOutputType = {
    id: number
    userId: number
    github: string | null
    portfolio: string | null
    linkedin: string | null
    email: string | null
    whatsapp: string | null
    _count: ShowcaseCountAggregateOutputType | null
    _avg: ShowcaseAvgAggregateOutputType | null
    _sum: ShowcaseSumAggregateOutputType | null
    _min: ShowcaseMinAggregateOutputType | null
    _max: ShowcaseMaxAggregateOutputType | null
  }

  type GetShowcaseGroupByPayload<T extends ShowcaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowcaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowcaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowcaseGroupByOutputType[P]>
            : GetScalarType<T[P], ShowcaseGroupByOutputType[P]>
        }
      >
    >


  export type ShowcaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    github?: boolean
    portfolio?: boolean
    linkedin?: boolean
    email?: boolean
    whatsapp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showcase"]>

  export type ShowcaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    github?: boolean
    portfolio?: boolean
    linkedin?: boolean
    email?: boolean
    whatsapp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showcase"]>

  export type ShowcaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    github?: boolean
    portfolio?: boolean
    linkedin?: boolean
    email?: boolean
    whatsapp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showcase"]>

  export type ShowcaseSelectScalar = {
    id?: boolean
    userId?: boolean
    github?: boolean
    portfolio?: boolean
    linkedin?: boolean
    email?: boolean
    whatsapp?: boolean
  }

  export type ShowcaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "github" | "portfolio" | "linkedin" | "email" | "whatsapp", ExtArgs["result"]["showcase"]>
  export type ShowcaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShowcaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShowcaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShowcasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Showcase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      github: string | null
      portfolio: string | null
      linkedin: string | null
      email: string | null
      whatsapp: string | null
    }, ExtArgs["result"]["showcase"]>
    composites: {}
  }

  type ShowcaseGetPayload<S extends boolean | null | undefined | ShowcaseDefaultArgs> = $Result.GetResult<Prisma.$ShowcasePayload, S>

  type ShowcaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowcaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ShowcaseCountAggregateInputType | true
    }

  export interface ShowcaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Showcase'], meta: { name: 'Showcase' } }
    /**
     * Find zero or one Showcase that matches the filter.
     * @param {ShowcaseFindUniqueArgs} args - Arguments to find a Showcase
     * @example
     * // Get one Showcase
     * const showcase = await prisma.showcase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowcaseFindUniqueArgs>(args: SelectSubset<T, ShowcaseFindUniqueArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Showcase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowcaseFindUniqueOrThrowArgs} args - Arguments to find a Showcase
     * @example
     * // Get one Showcase
     * const showcase = await prisma.showcase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowcaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowcaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showcase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowcaseFindFirstArgs} args - Arguments to find a Showcase
     * @example
     * // Get one Showcase
     * const showcase = await prisma.showcase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowcaseFindFirstArgs>(args?: SelectSubset<T, ShowcaseFindFirstArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showcase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowcaseFindFirstOrThrowArgs} args - Arguments to find a Showcase
     * @example
     * // Get one Showcase
     * const showcase = await prisma.showcase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowcaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowcaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Showcases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowcaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Showcases
     * const showcases = await prisma.showcase.findMany()
     * 
     * // Get first 10 Showcases
     * const showcases = await prisma.showcase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showcaseWithIdOnly = await prisma.showcase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowcaseFindManyArgs>(args?: SelectSubset<T, ShowcaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Showcase.
     * @param {ShowcaseCreateArgs} args - Arguments to create a Showcase.
     * @example
     * // Create one Showcase
     * const Showcase = await prisma.showcase.create({
     *   data: {
     *     // ... data to create a Showcase
     *   }
     * })
     * 
     */
    create<T extends ShowcaseCreateArgs>(args: SelectSubset<T, ShowcaseCreateArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Showcases.
     * @param {ShowcaseCreateManyArgs} args - Arguments to create many Showcases.
     * @example
     * // Create many Showcases
     * const showcase = await prisma.showcase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowcaseCreateManyArgs>(args?: SelectSubset<T, ShowcaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Showcases and returns the data saved in the database.
     * @param {ShowcaseCreateManyAndReturnArgs} args - Arguments to create many Showcases.
     * @example
     * // Create many Showcases
     * const showcase = await prisma.showcase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Showcases and only return the `id`
     * const showcaseWithIdOnly = await prisma.showcase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowcaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowcaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Showcase.
     * @param {ShowcaseDeleteArgs} args - Arguments to delete one Showcase.
     * @example
     * // Delete one Showcase
     * const Showcase = await prisma.showcase.delete({
     *   where: {
     *     // ... filter to delete one Showcase
     *   }
     * })
     * 
     */
    delete<T extends ShowcaseDeleteArgs>(args: SelectSubset<T, ShowcaseDeleteArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Showcase.
     * @param {ShowcaseUpdateArgs} args - Arguments to update one Showcase.
     * @example
     * // Update one Showcase
     * const showcase = await prisma.showcase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowcaseUpdateArgs>(args: SelectSubset<T, ShowcaseUpdateArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Showcases.
     * @param {ShowcaseDeleteManyArgs} args - Arguments to filter Showcases to delete.
     * @example
     * // Delete a few Showcases
     * const { count } = await prisma.showcase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowcaseDeleteManyArgs>(args?: SelectSubset<T, ShowcaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Showcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowcaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Showcases
     * const showcase = await prisma.showcase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowcaseUpdateManyArgs>(args: SelectSubset<T, ShowcaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Showcases and returns the data updated in the database.
     * @param {ShowcaseUpdateManyAndReturnArgs} args - Arguments to update many Showcases.
     * @example
     * // Update many Showcases
     * const showcase = await prisma.showcase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Showcases and only return the `id`
     * const showcaseWithIdOnly = await prisma.showcase.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShowcaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowcaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Showcase.
     * @param {ShowcaseUpsertArgs} args - Arguments to update or create a Showcase.
     * @example
     * // Update or create a Showcase
     * const showcase = await prisma.showcase.upsert({
     *   create: {
     *     // ... data to create a Showcase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Showcase we want to update
     *   }
     * })
     */
    upsert<T extends ShowcaseUpsertArgs>(args: SelectSubset<T, ShowcaseUpsertArgs<ExtArgs>>): Prisma__ShowcaseClient<$Result.GetResult<Prisma.$ShowcasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Showcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowcaseCountArgs} args - Arguments to filter Showcases to count.
     * @example
     * // Count the number of Showcases
     * const count = await prisma.showcase.count({
     *   where: {
     *     // ... the filter for the Showcases we want to count
     *   }
     * })
    **/
    count<T extends ShowcaseCountArgs>(
      args?: Subset<T, ShowcaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowcaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Showcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowcaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowcaseAggregateArgs>(args: Subset<T, ShowcaseAggregateArgs>): Prisma.PrismaPromise<GetShowcaseAggregateType<T>>

    /**
     * Group by Showcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowcaseGroupByArgs} args - Group by arguments.
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
      T extends ShowcaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowcaseGroupByArgs['orderBy'] }
        : { orderBy?: ShowcaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowcaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowcaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Showcase model
   */
  readonly fields: ShowcaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Showcase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowcaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Showcase model
   */
  interface ShowcaseFieldRefs {
    readonly id: FieldRef<"Showcase", 'Int'>
    readonly userId: FieldRef<"Showcase", 'Int'>
    readonly github: FieldRef<"Showcase", 'String'>
    readonly portfolio: FieldRef<"Showcase", 'String'>
    readonly linkedin: FieldRef<"Showcase", 'String'>
    readonly email: FieldRef<"Showcase", 'String'>
    readonly whatsapp: FieldRef<"Showcase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Showcase findUnique
   */
  export type ShowcaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which Showcase to fetch.
     */
    where: ShowcaseWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase findUniqueOrThrow
   */
  export type ShowcaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which Showcase to fetch.
     */
    where: ShowcaseWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase findFirst
   */
  export type ShowcaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which Showcase to fetch.
     */
    where?: ShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showcases to fetch.
     */
    orderBy?: ShowcaseOrderByWithRelationInput | ShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showcases.
     */
    cursor?: ShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showcases.
     */
    distinct?: ShowcaseScalarFieldEnum | ShowcaseScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase findFirstOrThrow
   */
  export type ShowcaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which Showcase to fetch.
     */
    where?: ShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showcases to fetch.
     */
    orderBy?: ShowcaseOrderByWithRelationInput | ShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showcases.
     */
    cursor?: ShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showcases.
     */
    distinct?: ShowcaseScalarFieldEnum | ShowcaseScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase findMany
   */
  export type ShowcaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * Filter, which Showcases to fetch.
     */
    where?: ShowcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showcases to fetch.
     */
    orderBy?: ShowcaseOrderByWithRelationInput | ShowcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Showcases.
     */
    cursor?: ShowcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showcases.
     */
    skip?: number
    distinct?: ShowcaseScalarFieldEnum | ShowcaseScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase create
   */
  export type ShowcaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Showcase.
     */
    data: XOR<ShowcaseCreateInput, ShowcaseUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase createMany
   */
  export type ShowcaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Showcases.
     */
    data: ShowcaseCreateManyInput | ShowcaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Showcase createManyAndReturn
   */
  export type ShowcaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * The data used to create many Showcases.
     */
    data: ShowcaseCreateManyInput | ShowcaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Showcase update
   */
  export type ShowcaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Showcase.
     */
    data: XOR<ShowcaseUpdateInput, ShowcaseUncheckedUpdateInput>
    /**
     * Choose, which Showcase to update.
     */
    where: ShowcaseWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase updateMany
   */
  export type ShowcaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Showcases.
     */
    data: XOR<ShowcaseUpdateManyMutationInput, ShowcaseUncheckedUpdateManyInput>
    /**
     * Filter which Showcases to update
     */
    where?: ShowcaseWhereInput
    /**
     * Limit how many Showcases to update.
     */
    limit?: number
  }

  /**
   * Showcase updateManyAndReturn
   */
  export type ShowcaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * The data used to update Showcases.
     */
    data: XOR<ShowcaseUpdateManyMutationInput, ShowcaseUncheckedUpdateManyInput>
    /**
     * Filter which Showcases to update
     */
    where?: ShowcaseWhereInput
    /**
     * Limit how many Showcases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Showcase upsert
   */
  export type ShowcaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Showcase to update in case it exists.
     */
    where: ShowcaseWhereUniqueInput
    /**
     * In case the Showcase found by the `where` argument doesn't exist, create a new Showcase with this data.
     */
    create: XOR<ShowcaseCreateInput, ShowcaseUncheckedCreateInput>
    /**
     * In case the Showcase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowcaseUpdateInput, ShowcaseUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase delete
   */
  export type ShowcaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
    /**
     * Filter which Showcase to delete.
     */
    where: ShowcaseWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Showcase deleteMany
   */
  export type ShowcaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showcases to delete
     */
    where?: ShowcaseWhereInput
    /**
     * Limit how many Showcases to delete.
     */
    limit?: number
  }

  /**
   * Showcase without action
   */
  export type ShowcaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showcase
     */
    select?: ShowcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showcase
     */
    omit?: ShowcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowcaseInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    link: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    link: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    techUsed: number
    status: number
    link: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    status?: true
    link?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    status?: true
    link?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    techUsed?: true
    status?: true
    link?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string | null
    techUsed: string[]
    status: $Enums.ProjectStatus
    link: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    techUsed?: boolean
    status?: boolean
    link?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    techUsed?: boolean
    status?: boolean
    link?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    techUsed?: boolean
    status?: boolean
    link?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    techUsed?: boolean
    status?: boolean
    link?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "techUsed" | "status" | "link", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string | null
      techUsed: string[]
      status: $Enums.ProjectStatus
      link: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly userId: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly techUsed: FieldRef<"Project", 'String[]'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly link: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Collaboration
   */

  export type AggregateCollaboration = {
    _count: CollaborationCountAggregateOutputType | null
    _avg: CollaborationAvgAggregateOutputType | null
    _sum: CollaborationSumAggregateOutputType | null
    _min: CollaborationMinAggregateOutputType | null
    _max: CollaborationMaxAggregateOutputType | null
  }

  export type CollaborationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CollaborationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CollaborationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    openToCollaboration: boolean | null
    ideaInterests: string | null
  }

  export type CollaborationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    openToCollaboration: boolean | null
    ideaInterests: string | null
  }

  export type CollaborationCountAggregateOutputType = {
    id: number
    userId: number
    openToCollaboration: number
    ideaInterests: number
    _all: number
  }


  export type CollaborationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CollaborationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CollaborationMinAggregateInputType = {
    id?: true
    userId?: true
    openToCollaboration?: true
    ideaInterests?: true
  }

  export type CollaborationMaxAggregateInputType = {
    id?: true
    userId?: true
    openToCollaboration?: true
    ideaInterests?: true
  }

  export type CollaborationCountAggregateInputType = {
    id?: true
    userId?: true
    openToCollaboration?: true
    ideaInterests?: true
    _all?: true
  }

  export type CollaborationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaboration to aggregate.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborations
    **/
    _count?: true | CollaborationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollaborationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollaborationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaborationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaborationMaxAggregateInputType
  }

  export type GetCollaborationAggregateType<T extends CollaborationAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaboration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaboration[P]>
      : GetScalarType<T[P], AggregateCollaboration[P]>
  }




  export type CollaborationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationWhereInput
    orderBy?: CollaborationOrderByWithAggregationInput | CollaborationOrderByWithAggregationInput[]
    by: CollaborationScalarFieldEnum[] | CollaborationScalarFieldEnum
    having?: CollaborationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaborationCountAggregateInputType | true
    _avg?: CollaborationAvgAggregateInputType
    _sum?: CollaborationSumAggregateInputType
    _min?: CollaborationMinAggregateInputType
    _max?: CollaborationMaxAggregateInputType
  }

  export type CollaborationGroupByOutputType = {
    id: number
    userId: number
    openToCollaboration: boolean | null
    ideaInterests: string | null
    _count: CollaborationCountAggregateOutputType | null
    _avg: CollaborationAvgAggregateOutputType | null
    _sum: CollaborationSumAggregateOutputType | null
    _min: CollaborationMinAggregateOutputType | null
    _max: CollaborationMaxAggregateOutputType | null
  }

  type GetCollaborationGroupByPayload<T extends CollaborationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaborationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaborationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaborationGroupByOutputType[P]>
            : GetScalarType<T[P], CollaborationGroupByOutputType[P]>
        }
      >
    >


  export type CollaborationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    openToCollaboration?: boolean
    ideaInterests?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaboration"]>

  export type CollaborationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    openToCollaboration?: boolean
    ideaInterests?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaboration"]>

  export type CollaborationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    openToCollaboration?: boolean
    ideaInterests?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaboration"]>

  export type CollaborationSelectScalar = {
    id?: boolean
    userId?: boolean
    openToCollaboration?: boolean
    ideaInterests?: boolean
  }

  export type CollaborationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "openToCollaboration" | "ideaInterests", ExtArgs["result"]["collaboration"]>
  export type CollaborationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollaborationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollaborationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollaborationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaboration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      openToCollaboration: boolean | null
      ideaInterests: string | null
    }, ExtArgs["result"]["collaboration"]>
    composites: {}
  }

  type CollaborationGetPayload<S extends boolean | null | undefined | CollaborationDefaultArgs> = $Result.GetResult<Prisma.$CollaborationPayload, S>

  type CollaborationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaborationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CollaborationCountAggregateInputType | true
    }

  export interface CollaborationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaboration'], meta: { name: 'Collaboration' } }
    /**
     * Find zero or one Collaboration that matches the filter.
     * @param {CollaborationFindUniqueArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaborationFindUniqueArgs>(args: SelectSubset<T, CollaborationFindUniqueArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaboration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaborationFindUniqueOrThrowArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaborationFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaborationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaboration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationFindFirstArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaborationFindFirstArgs>(args?: SelectSubset<T, CollaborationFindFirstArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaboration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationFindFirstOrThrowArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaborationFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaborationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborations
     * const collaborations = await prisma.collaboration.findMany()
     * 
     * // Get first 10 Collaborations
     * const collaborations = await prisma.collaboration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaborationWithIdOnly = await prisma.collaboration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaborationFindManyArgs>(args?: SelectSubset<T, CollaborationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaboration.
     * @param {CollaborationCreateArgs} args - Arguments to create a Collaboration.
     * @example
     * // Create one Collaboration
     * const Collaboration = await prisma.collaboration.create({
     *   data: {
     *     // ... data to create a Collaboration
     *   }
     * })
     * 
     */
    create<T extends CollaborationCreateArgs>(args: SelectSubset<T, CollaborationCreateArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborations.
     * @param {CollaborationCreateManyArgs} args - Arguments to create many Collaborations.
     * @example
     * // Create many Collaborations
     * const collaboration = await prisma.collaboration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaborationCreateManyArgs>(args?: SelectSubset<T, CollaborationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborations and returns the data saved in the database.
     * @param {CollaborationCreateManyAndReturnArgs} args - Arguments to create many Collaborations.
     * @example
     * // Create many Collaborations
     * const collaboration = await prisma.collaboration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborations and only return the `id`
     * const collaborationWithIdOnly = await prisma.collaboration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaborationCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaborationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collaboration.
     * @param {CollaborationDeleteArgs} args - Arguments to delete one Collaboration.
     * @example
     * // Delete one Collaboration
     * const Collaboration = await prisma.collaboration.delete({
     *   where: {
     *     // ... filter to delete one Collaboration
     *   }
     * })
     * 
     */
    delete<T extends CollaborationDeleteArgs>(args: SelectSubset<T, CollaborationDeleteArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaboration.
     * @param {CollaborationUpdateArgs} args - Arguments to update one Collaboration.
     * @example
     * // Update one Collaboration
     * const collaboration = await prisma.collaboration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaborationUpdateArgs>(args: SelectSubset<T, CollaborationUpdateArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborations.
     * @param {CollaborationDeleteManyArgs} args - Arguments to filter Collaborations to delete.
     * @example
     * // Delete a few Collaborations
     * const { count } = await prisma.collaboration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaborationDeleteManyArgs>(args?: SelectSubset<T, CollaborationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborations
     * const collaboration = await prisma.collaboration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaborationUpdateManyArgs>(args: SelectSubset<T, CollaborationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborations and returns the data updated in the database.
     * @param {CollaborationUpdateManyAndReturnArgs} args - Arguments to update many Collaborations.
     * @example
     * // Update many Collaborations
     * const collaboration = await prisma.collaboration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collaborations and only return the `id`
     * const collaborationWithIdOnly = await prisma.collaboration.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollaborationUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaborationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collaboration.
     * @param {CollaborationUpsertArgs} args - Arguments to update or create a Collaboration.
     * @example
     * // Update or create a Collaboration
     * const collaboration = await prisma.collaboration.upsert({
     *   create: {
     *     // ... data to create a Collaboration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaboration we want to update
     *   }
     * })
     */
    upsert<T extends CollaborationUpsertArgs>(args: SelectSubset<T, CollaborationUpsertArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationCountArgs} args - Arguments to filter Collaborations to count.
     * @example
     * // Count the number of Collaborations
     * const count = await prisma.collaboration.count({
     *   where: {
     *     // ... the filter for the Collaborations we want to count
     *   }
     * })
    **/
    count<T extends CollaborationCountArgs>(
      args?: Subset<T, CollaborationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaborationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaboration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollaborationAggregateArgs>(args: Subset<T, CollaborationAggregateArgs>): Prisma.PrismaPromise<GetCollaborationAggregateType<T>>

    /**
     * Group by Collaboration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationGroupByArgs} args - Group by arguments.
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
      T extends CollaborationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaborationGroupByArgs['orderBy'] }
        : { orderBy?: CollaborationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollaborationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaborationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaboration model
   */
  readonly fields: CollaborationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaboration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaborationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Collaboration model
   */
  interface CollaborationFieldRefs {
    readonly id: FieldRef<"Collaboration", 'Int'>
    readonly userId: FieldRef<"Collaboration", 'Int'>
    readonly openToCollaboration: FieldRef<"Collaboration", 'Boolean'>
    readonly ideaInterests: FieldRef<"Collaboration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Collaboration findUnique
   */
  export type CollaborationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where: CollaborationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration findUniqueOrThrow
   */
  export type CollaborationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where: CollaborationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration findFirst
   */
  export type CollaborationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborations.
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborations.
     */
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration findFirstOrThrow
   */
  export type CollaborationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborations.
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborations.
     */
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration findMany
   */
  export type CollaborationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaborations to fetch.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborations.
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration create
   */
  export type CollaborationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * The data needed to create a Collaboration.
     */
    data: XOR<CollaborationCreateInput, CollaborationUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration createMany
   */
  export type CollaborationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborations.
     */
    data: CollaborationCreateManyInput | CollaborationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaboration createManyAndReturn
   */
  export type CollaborationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * The data used to create many Collaborations.
     */
    data: CollaborationCreateManyInput | CollaborationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaboration update
   */
  export type CollaborationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * The data needed to update a Collaboration.
     */
    data: XOR<CollaborationUpdateInput, CollaborationUncheckedUpdateInput>
    /**
     * Choose, which Collaboration to update.
     */
    where: CollaborationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration updateMany
   */
  export type CollaborationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborations.
     */
    data: XOR<CollaborationUpdateManyMutationInput, CollaborationUncheckedUpdateManyInput>
    /**
     * Filter which Collaborations to update
     */
    where?: CollaborationWhereInput
    /**
     * Limit how many Collaborations to update.
     */
    limit?: number
  }

  /**
   * Collaboration updateManyAndReturn
   */
  export type CollaborationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * The data used to update Collaborations.
     */
    data: XOR<CollaborationUpdateManyMutationInput, CollaborationUncheckedUpdateManyInput>
    /**
     * Filter which Collaborations to update
     */
    where?: CollaborationWhereInput
    /**
     * Limit how many Collaborations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaboration upsert
   */
  export type CollaborationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * The filter to search for the Collaboration to update in case it exists.
     */
    where: CollaborationWhereUniqueInput
    /**
     * In case the Collaboration found by the `where` argument doesn't exist, create a new Collaboration with this data.
     */
    create: XOR<CollaborationCreateInput, CollaborationUncheckedCreateInput>
    /**
     * In case the Collaboration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaborationUpdateInput, CollaborationUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration delete
   */
  export type CollaborationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter which Collaboration to delete.
     */
    where: CollaborationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Collaboration deleteMany
   */
  export type CollaborationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborations to delete
     */
    where?: CollaborationWhereInput
    /**
     * Limit how many Collaborations to delete.
     */
    limit?: number
  }

  /**
   * Collaboration without action
   */
  export type CollaborationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
  }


  /**
   * Model Visuals
   */

  export type AggregateVisuals = {
    _count: VisualsCountAggregateOutputType | null
    _avg: VisualsAvgAggregateOutputType | null
    _sum: VisualsSumAggregateOutputType | null
    _min: VisualsMinAggregateOutputType | null
    _max: VisualsMaxAggregateOutputType | null
  }

  export type VisualsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VisualsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VisualsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    profilePicture: string | null
    coverImage: string | null
  }

  export type VisualsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    profilePicture: string | null
    coverImage: string | null
  }

  export type VisualsCountAggregateOutputType = {
    id: number
    userId: number
    profilePicture: number
    coverImage: number
    _all: number
  }


  export type VisualsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VisualsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VisualsMinAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    coverImage?: true
  }

  export type VisualsMaxAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    coverImage?: true
  }

  export type VisualsCountAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    coverImage?: true
    _all?: true
  }

  export type VisualsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visuals to aggregate.
     */
    where?: VisualsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visuals to fetch.
     */
    orderBy?: VisualsOrderByWithRelationInput | VisualsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisualsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visuals
    **/
    _count?: true | VisualsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisualsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisualsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisualsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisualsMaxAggregateInputType
  }

  export type GetVisualsAggregateType<T extends VisualsAggregateArgs> = {
        [P in keyof T & keyof AggregateVisuals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisuals[P]>
      : GetScalarType<T[P], AggregateVisuals[P]>
  }




  export type VisualsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisualsWhereInput
    orderBy?: VisualsOrderByWithAggregationInput | VisualsOrderByWithAggregationInput[]
    by: VisualsScalarFieldEnum[] | VisualsScalarFieldEnum
    having?: VisualsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisualsCountAggregateInputType | true
    _avg?: VisualsAvgAggregateInputType
    _sum?: VisualsSumAggregateInputType
    _min?: VisualsMinAggregateInputType
    _max?: VisualsMaxAggregateInputType
  }

  export type VisualsGroupByOutputType = {
    id: number
    userId: number
    profilePicture: string | null
    coverImage: string | null
    _count: VisualsCountAggregateOutputType | null
    _avg: VisualsAvgAggregateOutputType | null
    _sum: VisualsSumAggregateOutputType | null
    _min: VisualsMinAggregateOutputType | null
    _max: VisualsMaxAggregateOutputType | null
  }

  type GetVisualsGroupByPayload<T extends VisualsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisualsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisualsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisualsGroupByOutputType[P]>
            : GetScalarType<T[P], VisualsGroupByOutputType[P]>
        }
      >
    >


  export type VisualsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    coverImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visuals"]>

  export type VisualsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    coverImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visuals"]>

  export type VisualsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    coverImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visuals"]>

  export type VisualsSelectScalar = {
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    coverImage?: boolean
  }

  export type VisualsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "profilePicture" | "coverImage", ExtArgs["result"]["visuals"]>
  export type VisualsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VisualsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VisualsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VisualsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visuals"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      profilePicture: string | null
      coverImage: string | null
    }, ExtArgs["result"]["visuals"]>
    composites: {}
  }

  type VisualsGetPayload<S extends boolean | null | undefined | VisualsDefaultArgs> = $Result.GetResult<Prisma.$VisualsPayload, S>

  type VisualsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisualsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: VisualsCountAggregateInputType | true
    }

  export interface VisualsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visuals'], meta: { name: 'Visuals' } }
    /**
     * Find zero or one Visuals that matches the filter.
     * @param {VisualsFindUniqueArgs} args - Arguments to find a Visuals
     * @example
     * // Get one Visuals
     * const visuals = await prisma.visuals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisualsFindUniqueArgs>(args: SelectSubset<T, VisualsFindUniqueArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visuals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisualsFindUniqueOrThrowArgs} args - Arguments to find a Visuals
     * @example
     * // Get one Visuals
     * const visuals = await prisma.visuals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisualsFindUniqueOrThrowArgs>(args: SelectSubset<T, VisualsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualsFindFirstArgs} args - Arguments to find a Visuals
     * @example
     * // Get one Visuals
     * const visuals = await prisma.visuals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisualsFindFirstArgs>(args?: SelectSubset<T, VisualsFindFirstArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visuals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualsFindFirstOrThrowArgs} args - Arguments to find a Visuals
     * @example
     * // Get one Visuals
     * const visuals = await prisma.visuals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisualsFindFirstOrThrowArgs>(args?: SelectSubset<T, VisualsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visuals
     * const visuals = await prisma.visuals.findMany()
     * 
     * // Get first 10 Visuals
     * const visuals = await prisma.visuals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visualsWithIdOnly = await prisma.visuals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisualsFindManyArgs>(args?: SelectSubset<T, VisualsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visuals.
     * @param {VisualsCreateArgs} args - Arguments to create a Visuals.
     * @example
     * // Create one Visuals
     * const Visuals = await prisma.visuals.create({
     *   data: {
     *     // ... data to create a Visuals
     *   }
     * })
     * 
     */
    create<T extends VisualsCreateArgs>(args: SelectSubset<T, VisualsCreateArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visuals.
     * @param {VisualsCreateManyArgs} args - Arguments to create many Visuals.
     * @example
     * // Create many Visuals
     * const visuals = await prisma.visuals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisualsCreateManyArgs>(args?: SelectSubset<T, VisualsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visuals and returns the data saved in the database.
     * @param {VisualsCreateManyAndReturnArgs} args - Arguments to create many Visuals.
     * @example
     * // Create many Visuals
     * const visuals = await prisma.visuals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visuals and only return the `id`
     * const visualsWithIdOnly = await prisma.visuals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisualsCreateManyAndReturnArgs>(args?: SelectSubset<T, VisualsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visuals.
     * @param {VisualsDeleteArgs} args - Arguments to delete one Visuals.
     * @example
     * // Delete one Visuals
     * const Visuals = await prisma.visuals.delete({
     *   where: {
     *     // ... filter to delete one Visuals
     *   }
     * })
     * 
     */
    delete<T extends VisualsDeleteArgs>(args: SelectSubset<T, VisualsDeleteArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visuals.
     * @param {VisualsUpdateArgs} args - Arguments to update one Visuals.
     * @example
     * // Update one Visuals
     * const visuals = await prisma.visuals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisualsUpdateArgs>(args: SelectSubset<T, VisualsUpdateArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visuals.
     * @param {VisualsDeleteManyArgs} args - Arguments to filter Visuals to delete.
     * @example
     * // Delete a few Visuals
     * const { count } = await prisma.visuals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisualsDeleteManyArgs>(args?: SelectSubset<T, VisualsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visuals
     * const visuals = await prisma.visuals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisualsUpdateManyArgs>(args: SelectSubset<T, VisualsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visuals and returns the data updated in the database.
     * @param {VisualsUpdateManyAndReturnArgs} args - Arguments to update many Visuals.
     * @example
     * // Update many Visuals
     * const visuals = await prisma.visuals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visuals and only return the `id`
     * const visualsWithIdOnly = await prisma.visuals.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisualsUpdateManyAndReturnArgs>(args: SelectSubset<T, VisualsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visuals.
     * @param {VisualsUpsertArgs} args - Arguments to update or create a Visuals.
     * @example
     * // Update or create a Visuals
     * const visuals = await prisma.visuals.upsert({
     *   create: {
     *     // ... data to create a Visuals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visuals we want to update
     *   }
     * })
     */
    upsert<T extends VisualsUpsertArgs>(args: SelectSubset<T, VisualsUpsertArgs<ExtArgs>>): Prisma__VisualsClient<$Result.GetResult<Prisma.$VisualsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualsCountArgs} args - Arguments to filter Visuals to count.
     * @example
     * // Count the number of Visuals
     * const count = await prisma.visuals.count({
     *   where: {
     *     // ... the filter for the Visuals we want to count
     *   }
     * })
    **/
    count<T extends VisualsCountArgs>(
      args?: Subset<T, VisualsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisualsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisualsAggregateArgs>(args: Subset<T, VisualsAggregateArgs>): Prisma.PrismaPromise<GetVisualsAggregateType<T>>

    /**
     * Group by Visuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualsGroupByArgs} args - Group by arguments.
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
      T extends VisualsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisualsGroupByArgs['orderBy'] }
        : { orderBy?: VisualsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisualsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisualsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visuals model
   */
  readonly fields: VisualsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visuals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisualsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Visuals model
   */
  interface VisualsFieldRefs {
    readonly id: FieldRef<"Visuals", 'Int'>
    readonly userId: FieldRef<"Visuals", 'Int'>
    readonly profilePicture: FieldRef<"Visuals", 'String'>
    readonly coverImage: FieldRef<"Visuals", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Visuals findUnique
   */
  export type VisualsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * Filter, which Visuals to fetch.
     */
    where: VisualsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals findUniqueOrThrow
   */
  export type VisualsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * Filter, which Visuals to fetch.
     */
    where: VisualsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals findFirst
   */
  export type VisualsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * Filter, which Visuals to fetch.
     */
    where?: VisualsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visuals to fetch.
     */
    orderBy?: VisualsOrderByWithRelationInput | VisualsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visuals.
     */
    cursor?: VisualsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visuals.
     */
    distinct?: VisualsScalarFieldEnum | VisualsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals findFirstOrThrow
   */
  export type VisualsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * Filter, which Visuals to fetch.
     */
    where?: VisualsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visuals to fetch.
     */
    orderBy?: VisualsOrderByWithRelationInput | VisualsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visuals.
     */
    cursor?: VisualsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visuals.
     */
    distinct?: VisualsScalarFieldEnum | VisualsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals findMany
   */
  export type VisualsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * Filter, which Visuals to fetch.
     */
    where?: VisualsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visuals to fetch.
     */
    orderBy?: VisualsOrderByWithRelationInput | VisualsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visuals.
     */
    cursor?: VisualsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visuals.
     */
    skip?: number
    distinct?: VisualsScalarFieldEnum | VisualsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals create
   */
  export type VisualsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * The data needed to create a Visuals.
     */
    data: XOR<VisualsCreateInput, VisualsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals createMany
   */
  export type VisualsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visuals.
     */
    data: VisualsCreateManyInput | VisualsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visuals createManyAndReturn
   */
  export type VisualsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * The data used to create many Visuals.
     */
    data: VisualsCreateManyInput | VisualsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visuals update
   */
  export type VisualsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * The data needed to update a Visuals.
     */
    data: XOR<VisualsUpdateInput, VisualsUncheckedUpdateInput>
    /**
     * Choose, which Visuals to update.
     */
    where: VisualsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals updateMany
   */
  export type VisualsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visuals.
     */
    data: XOR<VisualsUpdateManyMutationInput, VisualsUncheckedUpdateManyInput>
    /**
     * Filter which Visuals to update
     */
    where?: VisualsWhereInput
    /**
     * Limit how many Visuals to update.
     */
    limit?: number
  }

  /**
   * Visuals updateManyAndReturn
   */
  export type VisualsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * The data used to update Visuals.
     */
    data: XOR<VisualsUpdateManyMutationInput, VisualsUncheckedUpdateManyInput>
    /**
     * Filter which Visuals to update
     */
    where?: VisualsWhereInput
    /**
     * Limit how many Visuals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visuals upsert
   */
  export type VisualsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * The filter to search for the Visuals to update in case it exists.
     */
    where: VisualsWhereUniqueInput
    /**
     * In case the Visuals found by the `where` argument doesn't exist, create a new Visuals with this data.
     */
    create: XOR<VisualsCreateInput, VisualsUncheckedCreateInput>
    /**
     * In case the Visuals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisualsUpdateInput, VisualsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals delete
   */
  export type VisualsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
    /**
     * Filter which Visuals to delete.
     */
    where: VisualsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Visuals deleteMany
   */
  export type VisualsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visuals to delete
     */
    where?: VisualsWhereInput
    /**
     * Limit how many Visuals to delete.
     */
    limit?: number
  }

  /**
   * Visuals without action
   */
  export type VisualsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visuals
     */
    select?: VisualsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visuals
     */
    omit?: VisualsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualsInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    type: $Enums.PostType | null
    description: string | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    type: $Enums.PostType | null
    description: string | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    type: number
    description: number
    createdAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    type?: true
    description?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    type?: true
    description?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    type?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    userId: number
    title: string
    type: $Enums.PostType
    description: string | null
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    interested?: boolean | Post$interestedArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "type" | "description" | "createdAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interested?: boolean | Post$interestedArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      interested: Prisma.$InterestedListPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      type: $Enums.PostType
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interested<T extends Post$interestedArgs<ExtArgs> = {}>(args?: Subset<T, Post$interestedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly type: FieldRef<"Post", 'PostType'>
    readonly description: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.interested
   */
  export type Post$interestedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    where?: InterestedListWhereInput
    orderBy?: InterestedListOrderByWithRelationInput | InterestedListOrderByWithRelationInput[]
    cursor?: InterestedListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestedListScalarFieldEnum | InterestedListScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model InterestedList
   */

  export type AggregateInterestedList = {
    _count: InterestedListCountAggregateOutputType | null
    _avg: InterestedListAvgAggregateOutputType | null
    _sum: InterestedListSumAggregateOutputType | null
    _min: InterestedListMinAggregateOutputType | null
    _max: InterestedListMaxAggregateOutputType | null
  }

  export type InterestedListAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type InterestedListSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type InterestedListMinAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type InterestedListMaxAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type InterestedListCountAggregateOutputType = {
    id: number
    postId: number
    _all: number
  }


  export type InterestedListAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type InterestedListSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type InterestedListMinAggregateInputType = {
    id?: true
    postId?: true
  }

  export type InterestedListMaxAggregateInputType = {
    id?: true
    postId?: true
  }

  export type InterestedListCountAggregateInputType = {
    id?: true
    postId?: true
    _all?: true
  }

  export type InterestedListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestedList to aggregate.
     */
    where?: InterestedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestedLists to fetch.
     */
    orderBy?: InterestedListOrderByWithRelationInput | InterestedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestedLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterestedLists
    **/
    _count?: true | InterestedListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestedListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestedListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestedListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestedListMaxAggregateInputType
  }

  export type GetInterestedListAggregateType<T extends InterestedListAggregateArgs> = {
        [P in keyof T & keyof AggregateInterestedList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterestedList[P]>
      : GetScalarType<T[P], AggregateInterestedList[P]>
  }




  export type InterestedListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestedListWhereInput
    orderBy?: InterestedListOrderByWithAggregationInput | InterestedListOrderByWithAggregationInput[]
    by: InterestedListScalarFieldEnum[] | InterestedListScalarFieldEnum
    having?: InterestedListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestedListCountAggregateInputType | true
    _avg?: InterestedListAvgAggregateInputType
    _sum?: InterestedListSumAggregateInputType
    _min?: InterestedListMinAggregateInputType
    _max?: InterestedListMaxAggregateInputType
  }

  export type InterestedListGroupByOutputType = {
    id: number
    postId: number
    _count: InterestedListCountAggregateOutputType | null
    _avg: InterestedListAvgAggregateOutputType | null
    _sum: InterestedListSumAggregateOutputType | null
    _min: InterestedListMinAggregateOutputType | null
    _max: InterestedListMaxAggregateOutputType | null
  }

  type GetInterestedListGroupByPayload<T extends InterestedListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestedListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestedListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestedListGroupByOutputType[P]>
            : GetScalarType<T[P], InterestedListGroupByOutputType[P]>
        }
      >
    >


  export type InterestedListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestedList"]>

  export type InterestedListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestedList"]>

  export type InterestedListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestedList"]>

  export type InterestedListSelectScalar = {
    id?: boolean
    postId?: boolean
  }

  export type InterestedListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId", ExtArgs["result"]["interestedList"]>
  export type InterestedListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type InterestedListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type InterestedListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $InterestedListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterestedList"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
    }, ExtArgs["result"]["interestedList"]>
    composites: {}
  }

  type InterestedListGetPayload<S extends boolean | null | undefined | InterestedListDefaultArgs> = $Result.GetResult<Prisma.$InterestedListPayload, S>

  type InterestedListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestedListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: InterestedListCountAggregateInputType | true
    }

  export interface InterestedListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterestedList'], meta: { name: 'InterestedList' } }
    /**
     * Find zero or one InterestedList that matches the filter.
     * @param {InterestedListFindUniqueArgs} args - Arguments to find a InterestedList
     * @example
     * // Get one InterestedList
     * const interestedList = await prisma.interestedList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestedListFindUniqueArgs>(args: SelectSubset<T, InterestedListFindUniqueArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterestedList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestedListFindUniqueOrThrowArgs} args - Arguments to find a InterestedList
     * @example
     * // Get one InterestedList
     * const interestedList = await prisma.interestedList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestedListFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestedListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestedList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestedListFindFirstArgs} args - Arguments to find a InterestedList
     * @example
     * // Get one InterestedList
     * const interestedList = await prisma.interestedList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestedListFindFirstArgs>(args?: SelectSubset<T, InterestedListFindFirstArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestedList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestedListFindFirstOrThrowArgs} args - Arguments to find a InterestedList
     * @example
     * // Get one InterestedList
     * const interestedList = await prisma.interestedList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestedListFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestedListFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterestedLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestedListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterestedLists
     * const interestedLists = await prisma.interestedList.findMany()
     * 
     * // Get first 10 InterestedLists
     * const interestedLists = await prisma.interestedList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestedListWithIdOnly = await prisma.interestedList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestedListFindManyArgs>(args?: SelectSubset<T, InterestedListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterestedList.
     * @param {InterestedListCreateArgs} args - Arguments to create a InterestedList.
     * @example
     * // Create one InterestedList
     * const InterestedList = await prisma.interestedList.create({
     *   data: {
     *     // ... data to create a InterestedList
     *   }
     * })
     * 
     */
    create<T extends InterestedListCreateArgs>(args: SelectSubset<T, InterestedListCreateArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterestedLists.
     * @param {InterestedListCreateManyArgs} args - Arguments to create many InterestedLists.
     * @example
     * // Create many InterestedLists
     * const interestedList = await prisma.interestedList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestedListCreateManyArgs>(args?: SelectSubset<T, InterestedListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterestedLists and returns the data saved in the database.
     * @param {InterestedListCreateManyAndReturnArgs} args - Arguments to create many InterestedLists.
     * @example
     * // Create many InterestedLists
     * const interestedList = await prisma.interestedList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterestedLists and only return the `id`
     * const interestedListWithIdOnly = await prisma.interestedList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterestedListCreateManyAndReturnArgs>(args?: SelectSubset<T, InterestedListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterestedList.
     * @param {InterestedListDeleteArgs} args - Arguments to delete one InterestedList.
     * @example
     * // Delete one InterestedList
     * const InterestedList = await prisma.interestedList.delete({
     *   where: {
     *     // ... filter to delete one InterestedList
     *   }
     * })
     * 
     */
    delete<T extends InterestedListDeleteArgs>(args: SelectSubset<T, InterestedListDeleteArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterestedList.
     * @param {InterestedListUpdateArgs} args - Arguments to update one InterestedList.
     * @example
     * // Update one InterestedList
     * const interestedList = await prisma.interestedList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestedListUpdateArgs>(args: SelectSubset<T, InterestedListUpdateArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterestedLists.
     * @param {InterestedListDeleteManyArgs} args - Arguments to filter InterestedLists to delete.
     * @example
     * // Delete a few InterestedLists
     * const { count } = await prisma.interestedList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestedListDeleteManyArgs>(args?: SelectSubset<T, InterestedListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestedLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestedListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterestedLists
     * const interestedList = await prisma.interestedList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestedListUpdateManyArgs>(args: SelectSubset<T, InterestedListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestedLists and returns the data updated in the database.
     * @param {InterestedListUpdateManyAndReturnArgs} args - Arguments to update many InterestedLists.
     * @example
     * // Update many InterestedLists
     * const interestedList = await prisma.interestedList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterestedLists and only return the `id`
     * const interestedListWithIdOnly = await prisma.interestedList.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterestedListUpdateManyAndReturnArgs>(args: SelectSubset<T, InterestedListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterestedList.
     * @param {InterestedListUpsertArgs} args - Arguments to update or create a InterestedList.
     * @example
     * // Update or create a InterestedList
     * const interestedList = await prisma.interestedList.upsert({
     *   create: {
     *     // ... data to create a InterestedList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterestedList we want to update
     *   }
     * })
     */
    upsert<T extends InterestedListUpsertArgs>(args: SelectSubset<T, InterestedListUpsertArgs<ExtArgs>>): Prisma__InterestedListClient<$Result.GetResult<Prisma.$InterestedListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterestedLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestedListCountArgs} args - Arguments to filter InterestedLists to count.
     * @example
     * // Count the number of InterestedLists
     * const count = await prisma.interestedList.count({
     *   where: {
     *     // ... the filter for the InterestedLists we want to count
     *   }
     * })
    **/
    count<T extends InterestedListCountArgs>(
      args?: Subset<T, InterestedListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestedListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterestedList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestedListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterestedListAggregateArgs>(args: Subset<T, InterestedListAggregateArgs>): Prisma.PrismaPromise<GetInterestedListAggregateType<T>>

    /**
     * Group by InterestedList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestedListGroupByArgs} args - Group by arguments.
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
      T extends InterestedListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestedListGroupByArgs['orderBy'] }
        : { orderBy?: InterestedListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterestedListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestedListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterestedList model
   */
  readonly fields: InterestedListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterestedList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestedListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InterestedList model
   */
  interface InterestedListFieldRefs {
    readonly id: FieldRef<"InterestedList", 'Int'>
    readonly postId: FieldRef<"InterestedList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InterestedList findUnique
   */
  export type InterestedListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * Filter, which InterestedList to fetch.
     */
    where: InterestedListWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList findUniqueOrThrow
   */
  export type InterestedListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * Filter, which InterestedList to fetch.
     */
    where: InterestedListWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList findFirst
   */
  export type InterestedListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * Filter, which InterestedList to fetch.
     */
    where?: InterestedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestedLists to fetch.
     */
    orderBy?: InterestedListOrderByWithRelationInput | InterestedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestedLists.
     */
    cursor?: InterestedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestedLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestedLists.
     */
    distinct?: InterestedListScalarFieldEnum | InterestedListScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList findFirstOrThrow
   */
  export type InterestedListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * Filter, which InterestedList to fetch.
     */
    where?: InterestedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestedLists to fetch.
     */
    orderBy?: InterestedListOrderByWithRelationInput | InterestedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestedLists.
     */
    cursor?: InterestedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestedLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestedLists.
     */
    distinct?: InterestedListScalarFieldEnum | InterestedListScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList findMany
   */
  export type InterestedListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * Filter, which InterestedLists to fetch.
     */
    where?: InterestedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestedLists to fetch.
     */
    orderBy?: InterestedListOrderByWithRelationInput | InterestedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterestedLists.
     */
    cursor?: InterestedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestedLists.
     */
    skip?: number
    distinct?: InterestedListScalarFieldEnum | InterestedListScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList create
   */
  export type InterestedListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * The data needed to create a InterestedList.
     */
    data: XOR<InterestedListCreateInput, InterestedListUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList createMany
   */
  export type InterestedListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterestedLists.
     */
    data: InterestedListCreateManyInput | InterestedListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterestedList createManyAndReturn
   */
  export type InterestedListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * The data used to create many InterestedLists.
     */
    data: InterestedListCreateManyInput | InterestedListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterestedList update
   */
  export type InterestedListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * The data needed to update a InterestedList.
     */
    data: XOR<InterestedListUpdateInput, InterestedListUncheckedUpdateInput>
    /**
     * Choose, which InterestedList to update.
     */
    where: InterestedListWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList updateMany
   */
  export type InterestedListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterestedLists.
     */
    data: XOR<InterestedListUpdateManyMutationInput, InterestedListUncheckedUpdateManyInput>
    /**
     * Filter which InterestedLists to update
     */
    where?: InterestedListWhereInput
    /**
     * Limit how many InterestedLists to update.
     */
    limit?: number
  }

  /**
   * InterestedList updateManyAndReturn
   */
  export type InterestedListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * The data used to update InterestedLists.
     */
    data: XOR<InterestedListUpdateManyMutationInput, InterestedListUncheckedUpdateManyInput>
    /**
     * Filter which InterestedLists to update
     */
    where?: InterestedListWhereInput
    /**
     * Limit how many InterestedLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterestedList upsert
   */
  export type InterestedListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * The filter to search for the InterestedList to update in case it exists.
     */
    where: InterestedListWhereUniqueInput
    /**
     * In case the InterestedList found by the `where` argument doesn't exist, create a new InterestedList with this data.
     */
    create: XOR<InterestedListCreateInput, InterestedListUncheckedCreateInput>
    /**
     * In case the InterestedList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestedListUpdateInput, InterestedListUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList delete
   */
  export type InterestedListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
    /**
     * Filter which InterestedList to delete.
     */
    where: InterestedListWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * InterestedList deleteMany
   */
  export type InterestedListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestedLists to delete
     */
    where?: InterestedListWhereInput
    /**
     * Limit how many InterestedLists to delete.
     */
    limit?: number
  }

  /**
   * InterestedList without action
   */
  export type InterestedListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestedList
     */
    select?: InterestedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestedList
     */
    omit?: InterestedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestedListInclude<ExtArgs> | null
  }


  /**
   * Model IncomingConnection
   */

  export type AggregateIncomingConnection = {
    _count: IncomingConnectionCountAggregateOutputType | null
    _avg: IncomingConnectionAvgAggregateOutputType | null
    _sum: IncomingConnectionSumAggregateOutputType | null
    _min: IncomingConnectionMinAggregateOutputType | null
    _max: IncomingConnectionMaxAggregateOutputType | null
  }

  export type IncomingConnectionAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type IncomingConnectionSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type IncomingConnectionMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    requestedAt: Date | null
  }

  export type IncomingConnectionMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    requestedAt: Date | null
  }

  export type IncomingConnectionCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    requestedAt: number
    _all: number
  }


  export type IncomingConnectionAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type IncomingConnectionSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type IncomingConnectionMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    requestedAt?: true
  }

  export type IncomingConnectionMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    requestedAt?: true
  }

  export type IncomingConnectionCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    requestedAt?: true
    _all?: true
  }

  export type IncomingConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomingConnection to aggregate.
     */
    where?: IncomingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingConnections to fetch.
     */
    orderBy?: IncomingConnectionOrderByWithRelationInput | IncomingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncomingConnections
    **/
    _count?: true | IncomingConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomingConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomingConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomingConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomingConnectionMaxAggregateInputType
  }

  export type GetIncomingConnectionAggregateType<T extends IncomingConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateIncomingConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncomingConnection[P]>
      : GetScalarType<T[P], AggregateIncomingConnection[P]>
  }




  export type IncomingConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomingConnectionWhereInput
    orderBy?: IncomingConnectionOrderByWithAggregationInput | IncomingConnectionOrderByWithAggregationInput[]
    by: IncomingConnectionScalarFieldEnum[] | IncomingConnectionScalarFieldEnum
    having?: IncomingConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomingConnectionCountAggregateInputType | true
    _avg?: IncomingConnectionAvgAggregateInputType
    _sum?: IncomingConnectionSumAggregateInputType
    _min?: IncomingConnectionMinAggregateInputType
    _max?: IncomingConnectionMaxAggregateInputType
  }

  export type IncomingConnectionGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    requestedAt: Date
    _count: IncomingConnectionCountAggregateOutputType | null
    _avg: IncomingConnectionAvgAggregateOutputType | null
    _sum: IncomingConnectionSumAggregateOutputType | null
    _min: IncomingConnectionMinAggregateOutputType | null
    _max: IncomingConnectionMaxAggregateOutputType | null
  }

  type GetIncomingConnectionGroupByPayload<T extends IncomingConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomingConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomingConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomingConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], IncomingConnectionGroupByOutputType[P]>
        }
      >
    >


  export type IncomingConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    requestedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomingConnection"]>

  export type IncomingConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    requestedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomingConnection"]>

  export type IncomingConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    requestedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomingConnection"]>

  export type IncomingConnectionSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    requestedAt?: boolean
  }

  export type IncomingConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "requestedAt", ExtArgs["result"]["incomingConnection"]>
  export type IncomingConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomingConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomingConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncomingConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncomingConnection"
    objects: {
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      requestedAt: Date
    }, ExtArgs["result"]["incomingConnection"]>
    composites: {}
  }

  type IncomingConnectionGetPayload<S extends boolean | null | undefined | IncomingConnectionDefaultArgs> = $Result.GetResult<Prisma.$IncomingConnectionPayload, S>

  type IncomingConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncomingConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: IncomingConnectionCountAggregateInputType | true
    }

  export interface IncomingConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncomingConnection'], meta: { name: 'IncomingConnection' } }
    /**
     * Find zero or one IncomingConnection that matches the filter.
     * @param {IncomingConnectionFindUniqueArgs} args - Arguments to find a IncomingConnection
     * @example
     * // Get one IncomingConnection
     * const incomingConnection = await prisma.incomingConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomingConnectionFindUniqueArgs>(args: SelectSubset<T, IncomingConnectionFindUniqueArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncomingConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncomingConnectionFindUniqueOrThrowArgs} args - Arguments to find a IncomingConnection
     * @example
     * // Get one IncomingConnection
     * const incomingConnection = await prisma.incomingConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomingConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomingConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncomingConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingConnectionFindFirstArgs} args - Arguments to find a IncomingConnection
     * @example
     * // Get one IncomingConnection
     * const incomingConnection = await prisma.incomingConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomingConnectionFindFirstArgs>(args?: SelectSubset<T, IncomingConnectionFindFirstArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncomingConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingConnectionFindFirstOrThrowArgs} args - Arguments to find a IncomingConnection
     * @example
     * // Get one IncomingConnection
     * const incomingConnection = await prisma.incomingConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomingConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomingConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncomingConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncomingConnections
     * const incomingConnections = await prisma.incomingConnection.findMany()
     * 
     * // Get first 10 IncomingConnections
     * const incomingConnections = await prisma.incomingConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomingConnectionWithIdOnly = await prisma.incomingConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomingConnectionFindManyArgs>(args?: SelectSubset<T, IncomingConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncomingConnection.
     * @param {IncomingConnectionCreateArgs} args - Arguments to create a IncomingConnection.
     * @example
     * // Create one IncomingConnection
     * const IncomingConnection = await prisma.incomingConnection.create({
     *   data: {
     *     // ... data to create a IncomingConnection
     *   }
     * })
     * 
     */
    create<T extends IncomingConnectionCreateArgs>(args: SelectSubset<T, IncomingConnectionCreateArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncomingConnections.
     * @param {IncomingConnectionCreateManyArgs} args - Arguments to create many IncomingConnections.
     * @example
     * // Create many IncomingConnections
     * const incomingConnection = await prisma.incomingConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomingConnectionCreateManyArgs>(args?: SelectSubset<T, IncomingConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncomingConnections and returns the data saved in the database.
     * @param {IncomingConnectionCreateManyAndReturnArgs} args - Arguments to create many IncomingConnections.
     * @example
     * // Create many IncomingConnections
     * const incomingConnection = await prisma.incomingConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncomingConnections and only return the `id`
     * const incomingConnectionWithIdOnly = await prisma.incomingConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomingConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomingConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncomingConnection.
     * @param {IncomingConnectionDeleteArgs} args - Arguments to delete one IncomingConnection.
     * @example
     * // Delete one IncomingConnection
     * const IncomingConnection = await prisma.incomingConnection.delete({
     *   where: {
     *     // ... filter to delete one IncomingConnection
     *   }
     * })
     * 
     */
    delete<T extends IncomingConnectionDeleteArgs>(args: SelectSubset<T, IncomingConnectionDeleteArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncomingConnection.
     * @param {IncomingConnectionUpdateArgs} args - Arguments to update one IncomingConnection.
     * @example
     * // Update one IncomingConnection
     * const incomingConnection = await prisma.incomingConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomingConnectionUpdateArgs>(args: SelectSubset<T, IncomingConnectionUpdateArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncomingConnections.
     * @param {IncomingConnectionDeleteManyArgs} args - Arguments to filter IncomingConnections to delete.
     * @example
     * // Delete a few IncomingConnections
     * const { count } = await prisma.incomingConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomingConnectionDeleteManyArgs>(args?: SelectSubset<T, IncomingConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncomingConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncomingConnections
     * const incomingConnection = await prisma.incomingConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomingConnectionUpdateManyArgs>(args: SelectSubset<T, IncomingConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncomingConnections and returns the data updated in the database.
     * @param {IncomingConnectionUpdateManyAndReturnArgs} args - Arguments to update many IncomingConnections.
     * @example
     * // Update many IncomingConnections
     * const incomingConnection = await prisma.incomingConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncomingConnections and only return the `id`
     * const incomingConnectionWithIdOnly = await prisma.incomingConnection.updateManyAndReturn({
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
    updateManyAndReturn<T extends IncomingConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, IncomingConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncomingConnection.
     * @param {IncomingConnectionUpsertArgs} args - Arguments to update or create a IncomingConnection.
     * @example
     * // Update or create a IncomingConnection
     * const incomingConnection = await prisma.incomingConnection.upsert({
     *   create: {
     *     // ... data to create a IncomingConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncomingConnection we want to update
     *   }
     * })
     */
    upsert<T extends IncomingConnectionUpsertArgs>(args: SelectSubset<T, IncomingConnectionUpsertArgs<ExtArgs>>): Prisma__IncomingConnectionClient<$Result.GetResult<Prisma.$IncomingConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncomingConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingConnectionCountArgs} args - Arguments to filter IncomingConnections to count.
     * @example
     * // Count the number of IncomingConnections
     * const count = await prisma.incomingConnection.count({
     *   where: {
     *     // ... the filter for the IncomingConnections we want to count
     *   }
     * })
    **/
    count<T extends IncomingConnectionCountArgs>(
      args?: Subset<T, IncomingConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomingConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncomingConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncomingConnectionAggregateArgs>(args: Subset<T, IncomingConnectionAggregateArgs>): Prisma.PrismaPromise<GetIncomingConnectionAggregateType<T>>

    /**
     * Group by IncomingConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingConnectionGroupByArgs} args - Group by arguments.
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
      T extends IncomingConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomingConnectionGroupByArgs['orderBy'] }
        : { orderBy?: IncomingConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncomingConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomingConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncomingConnection model
   */
  readonly fields: IncomingConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncomingConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomingConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IncomingConnection model
   */
  interface IncomingConnectionFieldRefs {
    readonly id: FieldRef<"IncomingConnection", 'Int'>
    readonly senderId: FieldRef<"IncomingConnection", 'Int'>
    readonly receiverId: FieldRef<"IncomingConnection", 'Int'>
    readonly requestedAt: FieldRef<"IncomingConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncomingConnection findUnique
   */
  export type IncomingConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which IncomingConnection to fetch.
     */
    where: IncomingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection findUniqueOrThrow
   */
  export type IncomingConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which IncomingConnection to fetch.
     */
    where: IncomingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection findFirst
   */
  export type IncomingConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which IncomingConnection to fetch.
     */
    where?: IncomingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingConnections to fetch.
     */
    orderBy?: IncomingConnectionOrderByWithRelationInput | IncomingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomingConnections.
     */
    cursor?: IncomingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomingConnections.
     */
    distinct?: IncomingConnectionScalarFieldEnum | IncomingConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection findFirstOrThrow
   */
  export type IncomingConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which IncomingConnection to fetch.
     */
    where?: IncomingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingConnections to fetch.
     */
    orderBy?: IncomingConnectionOrderByWithRelationInput | IncomingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomingConnections.
     */
    cursor?: IncomingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomingConnections.
     */
    distinct?: IncomingConnectionScalarFieldEnum | IncomingConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection findMany
   */
  export type IncomingConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which IncomingConnections to fetch.
     */
    where?: IncomingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingConnections to fetch.
     */
    orderBy?: IncomingConnectionOrderByWithRelationInput | IncomingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncomingConnections.
     */
    cursor?: IncomingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingConnections.
     */
    skip?: number
    distinct?: IncomingConnectionScalarFieldEnum | IncomingConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection create
   */
  export type IncomingConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a IncomingConnection.
     */
    data: XOR<IncomingConnectionCreateInput, IncomingConnectionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection createMany
   */
  export type IncomingConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncomingConnections.
     */
    data: IncomingConnectionCreateManyInput | IncomingConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncomingConnection createManyAndReturn
   */
  export type IncomingConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many IncomingConnections.
     */
    data: IncomingConnectionCreateManyInput | IncomingConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncomingConnection update
   */
  export type IncomingConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a IncomingConnection.
     */
    data: XOR<IncomingConnectionUpdateInput, IncomingConnectionUncheckedUpdateInput>
    /**
     * Choose, which IncomingConnection to update.
     */
    where: IncomingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection updateMany
   */
  export type IncomingConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncomingConnections.
     */
    data: XOR<IncomingConnectionUpdateManyMutationInput, IncomingConnectionUncheckedUpdateManyInput>
    /**
     * Filter which IncomingConnections to update
     */
    where?: IncomingConnectionWhereInput
    /**
     * Limit how many IncomingConnections to update.
     */
    limit?: number
  }

  /**
   * IncomingConnection updateManyAndReturn
   */
  export type IncomingConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * The data used to update IncomingConnections.
     */
    data: XOR<IncomingConnectionUpdateManyMutationInput, IncomingConnectionUncheckedUpdateManyInput>
    /**
     * Filter which IncomingConnections to update
     */
    where?: IncomingConnectionWhereInput
    /**
     * Limit how many IncomingConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncomingConnection upsert
   */
  export type IncomingConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the IncomingConnection to update in case it exists.
     */
    where: IncomingConnectionWhereUniqueInput
    /**
     * In case the IncomingConnection found by the `where` argument doesn't exist, create a new IncomingConnection with this data.
     */
    create: XOR<IncomingConnectionCreateInput, IncomingConnectionUncheckedCreateInput>
    /**
     * In case the IncomingConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomingConnectionUpdateInput, IncomingConnectionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection delete
   */
  export type IncomingConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
    /**
     * Filter which IncomingConnection to delete.
     */
    where: IncomingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * IncomingConnection deleteMany
   */
  export type IncomingConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomingConnections to delete
     */
    where?: IncomingConnectionWhereInput
    /**
     * Limit how many IncomingConnections to delete.
     */
    limit?: number
  }

  /**
   * IncomingConnection without action
   */
  export type IncomingConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingConnection
     */
    select?: IncomingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomingConnection
     */
    omit?: IncomingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingConnectionInclude<ExtArgs> | null
  }


  /**
   * Model OutgoingConnection
   */

  export type AggregateOutgoingConnection = {
    _count: OutgoingConnectionCountAggregateOutputType | null
    _avg: OutgoingConnectionAvgAggregateOutputType | null
    _sum: OutgoingConnectionSumAggregateOutputType | null
    _min: OutgoingConnectionMinAggregateOutputType | null
    _max: OutgoingConnectionMaxAggregateOutputType | null
  }

  export type OutgoingConnectionAvgAggregateOutputType = {
    id: number | null
    receiverId: number | null
    senderId: number | null
  }

  export type OutgoingConnectionSumAggregateOutputType = {
    id: number | null
    receiverId: number | null
    senderId: number | null
  }

  export type OutgoingConnectionMinAggregateOutputType = {
    id: number | null
    receiverId: number | null
    senderId: number | null
    requestedAt: Date | null
  }

  export type OutgoingConnectionMaxAggregateOutputType = {
    id: number | null
    receiverId: number | null
    senderId: number | null
    requestedAt: Date | null
  }

  export type OutgoingConnectionCountAggregateOutputType = {
    id: number
    receiverId: number
    senderId: number
    requestedAt: number
    _all: number
  }


  export type OutgoingConnectionAvgAggregateInputType = {
    id?: true
    receiverId?: true
    senderId?: true
  }

  export type OutgoingConnectionSumAggregateInputType = {
    id?: true
    receiverId?: true
    senderId?: true
  }

  export type OutgoingConnectionMinAggregateInputType = {
    id?: true
    receiverId?: true
    senderId?: true
    requestedAt?: true
  }

  export type OutgoingConnectionMaxAggregateInputType = {
    id?: true
    receiverId?: true
    senderId?: true
    requestedAt?: true
  }

  export type OutgoingConnectionCountAggregateInputType = {
    id?: true
    receiverId?: true
    senderId?: true
    requestedAt?: true
    _all?: true
  }

  export type OutgoingConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutgoingConnection to aggregate.
     */
    where?: OutgoingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutgoingConnections to fetch.
     */
    orderBy?: OutgoingConnectionOrderByWithRelationInput | OutgoingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutgoingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutgoingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutgoingConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutgoingConnections
    **/
    _count?: true | OutgoingConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutgoingConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutgoingConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutgoingConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutgoingConnectionMaxAggregateInputType
  }

  export type GetOutgoingConnectionAggregateType<T extends OutgoingConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateOutgoingConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutgoingConnection[P]>
      : GetScalarType<T[P], AggregateOutgoingConnection[P]>
  }




  export type OutgoingConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutgoingConnectionWhereInput
    orderBy?: OutgoingConnectionOrderByWithAggregationInput | OutgoingConnectionOrderByWithAggregationInput[]
    by: OutgoingConnectionScalarFieldEnum[] | OutgoingConnectionScalarFieldEnum
    having?: OutgoingConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutgoingConnectionCountAggregateInputType | true
    _avg?: OutgoingConnectionAvgAggregateInputType
    _sum?: OutgoingConnectionSumAggregateInputType
    _min?: OutgoingConnectionMinAggregateInputType
    _max?: OutgoingConnectionMaxAggregateInputType
  }

  export type OutgoingConnectionGroupByOutputType = {
    id: number
    receiverId: number
    senderId: number
    requestedAt: Date
    _count: OutgoingConnectionCountAggregateOutputType | null
    _avg: OutgoingConnectionAvgAggregateOutputType | null
    _sum: OutgoingConnectionSumAggregateOutputType | null
    _min: OutgoingConnectionMinAggregateOutputType | null
    _max: OutgoingConnectionMaxAggregateOutputType | null
  }

  type GetOutgoingConnectionGroupByPayload<T extends OutgoingConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutgoingConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutgoingConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutgoingConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], OutgoingConnectionGroupByOutputType[P]>
        }
      >
    >


  export type OutgoingConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverId?: boolean
    senderId?: boolean
    requestedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outgoingConnection"]>

  export type OutgoingConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverId?: boolean
    senderId?: boolean
    requestedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outgoingConnection"]>

  export type OutgoingConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverId?: boolean
    senderId?: boolean
    requestedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outgoingConnection"]>

  export type OutgoingConnectionSelectScalar = {
    id?: boolean
    receiverId?: boolean
    senderId?: boolean
    requestedAt?: boolean
  }

  export type OutgoingConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiverId" | "senderId" | "requestedAt", ExtArgs["result"]["outgoingConnection"]>
  export type OutgoingConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutgoingConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutgoingConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OutgoingConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutgoingConnection"
    objects: {
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      receiverId: number
      senderId: number
      requestedAt: Date
    }, ExtArgs["result"]["outgoingConnection"]>
    composites: {}
  }

  type OutgoingConnectionGetPayload<S extends boolean | null | undefined | OutgoingConnectionDefaultArgs> = $Result.GetResult<Prisma.$OutgoingConnectionPayload, S>

  type OutgoingConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutgoingConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: OutgoingConnectionCountAggregateInputType | true
    }

  export interface OutgoingConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutgoingConnection'], meta: { name: 'OutgoingConnection' } }
    /**
     * Find zero or one OutgoingConnection that matches the filter.
     * @param {OutgoingConnectionFindUniqueArgs} args - Arguments to find a OutgoingConnection
     * @example
     * // Get one OutgoingConnection
     * const outgoingConnection = await prisma.outgoingConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutgoingConnectionFindUniqueArgs>(args: SelectSubset<T, OutgoingConnectionFindUniqueArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutgoingConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutgoingConnectionFindUniqueOrThrowArgs} args - Arguments to find a OutgoingConnection
     * @example
     * // Get one OutgoingConnection
     * const outgoingConnection = await prisma.outgoingConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutgoingConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, OutgoingConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutgoingConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutgoingConnectionFindFirstArgs} args - Arguments to find a OutgoingConnection
     * @example
     * // Get one OutgoingConnection
     * const outgoingConnection = await prisma.outgoingConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutgoingConnectionFindFirstArgs>(args?: SelectSubset<T, OutgoingConnectionFindFirstArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutgoingConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutgoingConnectionFindFirstOrThrowArgs} args - Arguments to find a OutgoingConnection
     * @example
     * // Get one OutgoingConnection
     * const outgoingConnection = await prisma.outgoingConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutgoingConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, OutgoingConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutgoingConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutgoingConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutgoingConnections
     * const outgoingConnections = await prisma.outgoingConnection.findMany()
     * 
     * // Get first 10 OutgoingConnections
     * const outgoingConnections = await prisma.outgoingConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outgoingConnectionWithIdOnly = await prisma.outgoingConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutgoingConnectionFindManyArgs>(args?: SelectSubset<T, OutgoingConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutgoingConnection.
     * @param {OutgoingConnectionCreateArgs} args - Arguments to create a OutgoingConnection.
     * @example
     * // Create one OutgoingConnection
     * const OutgoingConnection = await prisma.outgoingConnection.create({
     *   data: {
     *     // ... data to create a OutgoingConnection
     *   }
     * })
     * 
     */
    create<T extends OutgoingConnectionCreateArgs>(args: SelectSubset<T, OutgoingConnectionCreateArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutgoingConnections.
     * @param {OutgoingConnectionCreateManyArgs} args - Arguments to create many OutgoingConnections.
     * @example
     * // Create many OutgoingConnections
     * const outgoingConnection = await prisma.outgoingConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutgoingConnectionCreateManyArgs>(args?: SelectSubset<T, OutgoingConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutgoingConnections and returns the data saved in the database.
     * @param {OutgoingConnectionCreateManyAndReturnArgs} args - Arguments to create many OutgoingConnections.
     * @example
     * // Create many OutgoingConnections
     * const outgoingConnection = await prisma.outgoingConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutgoingConnections and only return the `id`
     * const outgoingConnectionWithIdOnly = await prisma.outgoingConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutgoingConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, OutgoingConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutgoingConnection.
     * @param {OutgoingConnectionDeleteArgs} args - Arguments to delete one OutgoingConnection.
     * @example
     * // Delete one OutgoingConnection
     * const OutgoingConnection = await prisma.outgoingConnection.delete({
     *   where: {
     *     // ... filter to delete one OutgoingConnection
     *   }
     * })
     * 
     */
    delete<T extends OutgoingConnectionDeleteArgs>(args: SelectSubset<T, OutgoingConnectionDeleteArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutgoingConnection.
     * @param {OutgoingConnectionUpdateArgs} args - Arguments to update one OutgoingConnection.
     * @example
     * // Update one OutgoingConnection
     * const outgoingConnection = await prisma.outgoingConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutgoingConnectionUpdateArgs>(args: SelectSubset<T, OutgoingConnectionUpdateArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutgoingConnections.
     * @param {OutgoingConnectionDeleteManyArgs} args - Arguments to filter OutgoingConnections to delete.
     * @example
     * // Delete a few OutgoingConnections
     * const { count } = await prisma.outgoingConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutgoingConnectionDeleteManyArgs>(args?: SelectSubset<T, OutgoingConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutgoingConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutgoingConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutgoingConnections
     * const outgoingConnection = await prisma.outgoingConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutgoingConnectionUpdateManyArgs>(args: SelectSubset<T, OutgoingConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutgoingConnections and returns the data updated in the database.
     * @param {OutgoingConnectionUpdateManyAndReturnArgs} args - Arguments to update many OutgoingConnections.
     * @example
     * // Update many OutgoingConnections
     * const outgoingConnection = await prisma.outgoingConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutgoingConnections and only return the `id`
     * const outgoingConnectionWithIdOnly = await prisma.outgoingConnection.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutgoingConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, OutgoingConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutgoingConnection.
     * @param {OutgoingConnectionUpsertArgs} args - Arguments to update or create a OutgoingConnection.
     * @example
     * // Update or create a OutgoingConnection
     * const outgoingConnection = await prisma.outgoingConnection.upsert({
     *   create: {
     *     // ... data to create a OutgoingConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutgoingConnection we want to update
     *   }
     * })
     */
    upsert<T extends OutgoingConnectionUpsertArgs>(args: SelectSubset<T, OutgoingConnectionUpsertArgs<ExtArgs>>): Prisma__OutgoingConnectionClient<$Result.GetResult<Prisma.$OutgoingConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutgoingConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutgoingConnectionCountArgs} args - Arguments to filter OutgoingConnections to count.
     * @example
     * // Count the number of OutgoingConnections
     * const count = await prisma.outgoingConnection.count({
     *   where: {
     *     // ... the filter for the OutgoingConnections we want to count
     *   }
     * })
    **/
    count<T extends OutgoingConnectionCountArgs>(
      args?: Subset<T, OutgoingConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutgoingConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutgoingConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutgoingConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutgoingConnectionAggregateArgs>(args: Subset<T, OutgoingConnectionAggregateArgs>): Prisma.PrismaPromise<GetOutgoingConnectionAggregateType<T>>

    /**
     * Group by OutgoingConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutgoingConnectionGroupByArgs} args - Group by arguments.
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
      T extends OutgoingConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutgoingConnectionGroupByArgs['orderBy'] }
        : { orderBy?: OutgoingConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutgoingConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutgoingConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutgoingConnection model
   */
  readonly fields: OutgoingConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutgoingConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutgoingConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OutgoingConnection model
   */
  interface OutgoingConnectionFieldRefs {
    readonly id: FieldRef<"OutgoingConnection", 'Int'>
    readonly receiverId: FieldRef<"OutgoingConnection", 'Int'>
    readonly senderId: FieldRef<"OutgoingConnection", 'Int'>
    readonly requestedAt: FieldRef<"OutgoingConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutgoingConnection findUnique
   */
  export type OutgoingConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which OutgoingConnection to fetch.
     */
    where: OutgoingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection findUniqueOrThrow
   */
  export type OutgoingConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which OutgoingConnection to fetch.
     */
    where: OutgoingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection findFirst
   */
  export type OutgoingConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which OutgoingConnection to fetch.
     */
    where?: OutgoingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutgoingConnections to fetch.
     */
    orderBy?: OutgoingConnectionOrderByWithRelationInput | OutgoingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutgoingConnections.
     */
    cursor?: OutgoingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutgoingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutgoingConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutgoingConnections.
     */
    distinct?: OutgoingConnectionScalarFieldEnum | OutgoingConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection findFirstOrThrow
   */
  export type OutgoingConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which OutgoingConnection to fetch.
     */
    where?: OutgoingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutgoingConnections to fetch.
     */
    orderBy?: OutgoingConnectionOrderByWithRelationInput | OutgoingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutgoingConnections.
     */
    cursor?: OutgoingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutgoingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutgoingConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutgoingConnections.
     */
    distinct?: OutgoingConnectionScalarFieldEnum | OutgoingConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection findMany
   */
  export type OutgoingConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * Filter, which OutgoingConnections to fetch.
     */
    where?: OutgoingConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutgoingConnections to fetch.
     */
    orderBy?: OutgoingConnectionOrderByWithRelationInput | OutgoingConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutgoingConnections.
     */
    cursor?: OutgoingConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutgoingConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutgoingConnections.
     */
    skip?: number
    distinct?: OutgoingConnectionScalarFieldEnum | OutgoingConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection create
   */
  export type OutgoingConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a OutgoingConnection.
     */
    data: XOR<OutgoingConnectionCreateInput, OutgoingConnectionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection createMany
   */
  export type OutgoingConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutgoingConnections.
     */
    data: OutgoingConnectionCreateManyInput | OutgoingConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutgoingConnection createManyAndReturn
   */
  export type OutgoingConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many OutgoingConnections.
     */
    data: OutgoingConnectionCreateManyInput | OutgoingConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutgoingConnection update
   */
  export type OutgoingConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a OutgoingConnection.
     */
    data: XOR<OutgoingConnectionUpdateInput, OutgoingConnectionUncheckedUpdateInput>
    /**
     * Choose, which OutgoingConnection to update.
     */
    where: OutgoingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection updateMany
   */
  export type OutgoingConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutgoingConnections.
     */
    data: XOR<OutgoingConnectionUpdateManyMutationInput, OutgoingConnectionUncheckedUpdateManyInput>
    /**
     * Filter which OutgoingConnections to update
     */
    where?: OutgoingConnectionWhereInput
    /**
     * Limit how many OutgoingConnections to update.
     */
    limit?: number
  }

  /**
   * OutgoingConnection updateManyAndReturn
   */
  export type OutgoingConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * The data used to update OutgoingConnections.
     */
    data: XOR<OutgoingConnectionUpdateManyMutationInput, OutgoingConnectionUncheckedUpdateManyInput>
    /**
     * Filter which OutgoingConnections to update
     */
    where?: OutgoingConnectionWhereInput
    /**
     * Limit how many OutgoingConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutgoingConnection upsert
   */
  export type OutgoingConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the OutgoingConnection to update in case it exists.
     */
    where: OutgoingConnectionWhereUniqueInput
    /**
     * In case the OutgoingConnection found by the `where` argument doesn't exist, create a new OutgoingConnection with this data.
     */
    create: XOR<OutgoingConnectionCreateInput, OutgoingConnectionUncheckedCreateInput>
    /**
     * In case the OutgoingConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutgoingConnectionUpdateInput, OutgoingConnectionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection delete
   */
  export type OutgoingConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
    /**
     * Filter which OutgoingConnection to delete.
     */
    where: OutgoingConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * OutgoingConnection deleteMany
   */
  export type OutgoingConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutgoingConnections to delete
     */
    where?: OutgoingConnectionWhereInput
    /**
     * Limit how many OutgoingConnections to delete.
     */
    limit?: number
  }

  /**
   * OutgoingConnection without action
   */
  export type OutgoingConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutgoingConnection
     */
    select?: OutgoingConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutgoingConnection
     */
    omit?: OutgoingConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutgoingConnectionInclude<ExtArgs> | null
  }


  /**
   * Model Connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionAvgAggregateOutputType = {
    id: number | null
    participantAId: number | null
    participantBId: number | null
  }

  export type ConnectionSumAggregateOutputType = {
    id: number | null
    participantAId: number | null
    participantBId: number | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: number | null
    participantAId: number | null
    participantBId: number | null
    connectedAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: number | null
    participantAId: number | null
    participantBId: number | null
    connectedAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    participantAId: number
    participantBId: number
    connectedAt: number
    _all: number
  }


  export type ConnectionAvgAggregateInputType = {
    id?: true
    participantAId?: true
    participantBId?: true
  }

  export type ConnectionSumAggregateInputType = {
    id?: true
    participantAId?: true
    participantBId?: true
  }

  export type ConnectionMinAggregateInputType = {
    id?: true
    participantAId?: true
    participantBId?: true
    connectedAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    participantAId?: true
    participantBId?: true
    connectedAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    participantAId?: true
    participantBId?: true
    connectedAt?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connection to aggregate.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithAggregationInput | ConnectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _avg?: ConnectionAvgAggregateInputType
    _sum?: ConnectionSumAggregateInputType
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: number
    participantAId: number
    participantBId: number
    connectedAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantAId?: boolean
    participantBId?: boolean
    connectedAt?: boolean
    participantA?: boolean | UserDefaultArgs<ExtArgs>
    participantB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantAId?: boolean
    participantBId?: boolean
    connectedAt?: boolean
    participantA?: boolean | UserDefaultArgs<ExtArgs>
    participantB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantAId?: boolean
    participantBId?: boolean
    connectedAt?: boolean
    participantA?: boolean | UserDefaultArgs<ExtArgs>
    participantB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectScalar = {
    id?: boolean
    participantAId?: boolean
    participantBId?: boolean
    connectedAt?: boolean
  }

  export type ConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantAId" | "participantBId" | "connectedAt", ExtArgs["result"]["connection"]>
  export type ConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantA?: boolean | UserDefaultArgs<ExtArgs>
    participantB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantA?: boolean | UserDefaultArgs<ExtArgs>
    participantB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantA?: boolean | UserDefaultArgs<ExtArgs>
    participantB?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connection"
    objects: {
      participantA: Prisma.$UserPayload<ExtArgs>
      participantB: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participantAId: number
      participantBId: number
      connectedAt: Date
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type ConnectionGetPayload<S extends boolean | null | undefined | ConnectionDefaultArgs> = $Result.GetResult<Prisma.$ConnectionPayload, S>

  type ConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface ConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connection'], meta: { name: 'Connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionFindUniqueArgs>(args: SelectSubset<T, ConnectionFindUniqueArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionFindFirstArgs>(args?: SelectSubset<T, ConnectionFindFirstArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionFindManyArgs>(args?: SelectSubset<T, ConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends ConnectionCreateArgs>(args: SelectSubset<T, ConnectionCreateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionCreateManyArgs>(args?: SelectSubset<T, ConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDeleteArgs>(args: SelectSubset<T, ConnectionDeleteArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionUpdateArgs>(args: SelectSubset<T, ConnectionUpdateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDeleteManyArgs>(args?: SelectSubset<T, ConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionUpdateManyArgs>(args: SelectSubset<T, ConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {ConnectionUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionUpsertArgs>(args: SelectSubset<T, ConnectionUpsertArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
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
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connection model
   */
  readonly fields: ConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantA<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participantB<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Connection model
   */
  interface ConnectionFieldRefs {
    readonly id: FieldRef<"Connection", 'Int'>
    readonly participantAId: FieldRef<"Connection", 'Int'>
    readonly participantBId: FieldRef<"Connection", 'Int'>
    readonly connectedAt: FieldRef<"Connection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection findUniqueOrThrow
   */
  export type ConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection findFirstOrThrow
   */
  export type ConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection create
   */
  export type ConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Connection.
     */
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connection createManyAndReturn
   */
  export type ConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection update
   */
  export type ConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Connection.
     */
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     */
    where: ConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connection updateManyAndReturn
   */
  export type ConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Connection to update in case it exists.
     */
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     */
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter which Connection to delete.
     */
    where: ConnectionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connection without action
   */
  export type ConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    isEmailVerified: 'isEmailVerified',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const BasicInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    Institute: 'Institute',
    major: 'major',
    location: 'location'
  };

  export type BasicInfoScalarFieldEnum = (typeof BasicInfoScalarFieldEnum)[keyof typeof BasicInfoScalarFieldEnum]


  export const TechnicalProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skills: 'skills',
    experienceLevel: 'experienceLevel'
  };

  export type TechnicalProfileScalarFieldEnum = (typeof TechnicalProfileScalarFieldEnum)[keyof typeof TechnicalProfileScalarFieldEnum]


  export const BioSummaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shortBio: 'shortBio',
    tagline: 'tagline'
  };

  export type BioSummaryScalarFieldEnum = (typeof BioSummaryScalarFieldEnum)[keyof typeof BioSummaryScalarFieldEnum]


  export const ShowcaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    github: 'github',
    portfolio: 'portfolio',
    linkedin: 'linkedin',
    email: 'email',
    whatsapp: 'whatsapp'
  };

  export type ShowcaseScalarFieldEnum = (typeof ShowcaseScalarFieldEnum)[keyof typeof ShowcaseScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    techUsed: 'techUsed',
    status: 'status',
    link: 'link'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const CollaborationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    openToCollaboration: 'openToCollaboration',
    ideaInterests: 'ideaInterests'
  };

  export type CollaborationScalarFieldEnum = (typeof CollaborationScalarFieldEnum)[keyof typeof CollaborationScalarFieldEnum]


  export const VisualsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    profilePicture: 'profilePicture',
    coverImage: 'coverImage'
  };

  export type VisualsScalarFieldEnum = (typeof VisualsScalarFieldEnum)[keyof typeof VisualsScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const InterestedListScalarFieldEnum: {
    id: 'id',
    postId: 'postId'
  };

  export type InterestedListScalarFieldEnum = (typeof InterestedListScalarFieldEnum)[keyof typeof InterestedListScalarFieldEnum]


  export const IncomingConnectionScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    requestedAt: 'requestedAt'
  };

  export type IncomingConnectionScalarFieldEnum = (typeof IncomingConnectionScalarFieldEnum)[keyof typeof IncomingConnectionScalarFieldEnum]


  export const OutgoingConnectionScalarFieldEnum: {
    id: 'id',
    receiverId: 'receiverId',
    senderId: 'senderId',
    requestedAt: 'requestedAt'
  };

  export type OutgoingConnectionScalarFieldEnum = (typeof OutgoingConnectionScalarFieldEnum)[keyof typeof OutgoingConnectionScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    participantAId: 'participantAId',
    participantBId: 'participantBId',
    connectedAt: 'connectedAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'PostType'
   */
  export type EnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType'>
    


  /**
   * Reference to a field of type 'PostType[]'
   */
  export type ListEnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    basicInfo?: XOR<BasicInfoNullableScalarRelationFilter, BasicInfoWhereInput> | null
    bioSummary?: XOR<BioSummaryNullableScalarRelationFilter, BioSummaryWhereInput> | null
    collaboration?: XOR<CollaborationNullableScalarRelationFilter, CollaborationWhereInput> | null
    ParticipantA?: ConnectionListRelationFilter
    ParticipantB?: ConnectionListRelationFilter
    sentIncomingConnections?: IncomingConnectionListRelationFilter
    incomingConnections?: IncomingConnectionListRelationFilter
    outgoingConnections?: OutgoingConnectionListRelationFilter
    ReceiveoutgoingConnections?: OutgoingConnectionListRelationFilter
    posts?: PostListRelationFilter
    projects?: ProjectListRelationFilter
    showcase?: XOR<ShowcaseNullableScalarRelationFilter, ShowcaseWhereInput> | null
    technicalProfile?: XOR<TechnicalProfileNullableScalarRelationFilter, TechnicalProfileWhereInput> | null
    visuals?: XOR<VisualsNullableScalarRelationFilter, VisualsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isEmailVerified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    role?: SortOrder
    basicInfo?: BasicInfoOrderByWithRelationInput
    bioSummary?: BioSummaryOrderByWithRelationInput
    collaboration?: CollaborationOrderByWithRelationInput
    ParticipantA?: ConnectionOrderByRelationAggregateInput
    ParticipantB?: ConnectionOrderByRelationAggregateInput
    sentIncomingConnections?: IncomingConnectionOrderByRelationAggregateInput
    incomingConnections?: IncomingConnectionOrderByRelationAggregateInput
    outgoingConnections?: OutgoingConnectionOrderByRelationAggregateInput
    ReceiveoutgoingConnections?: OutgoingConnectionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    showcase?: ShowcaseOrderByWithRelationInput
    technicalProfile?: TechnicalProfileOrderByWithRelationInput
    visuals?: VisualsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    basicInfo?: XOR<BasicInfoNullableScalarRelationFilter, BasicInfoWhereInput> | null
    bioSummary?: XOR<BioSummaryNullableScalarRelationFilter, BioSummaryWhereInput> | null
    collaboration?: XOR<CollaborationNullableScalarRelationFilter, CollaborationWhereInput> | null
    ParticipantA?: ConnectionListRelationFilter
    ParticipantB?: ConnectionListRelationFilter
    sentIncomingConnections?: IncomingConnectionListRelationFilter
    incomingConnections?: IncomingConnectionListRelationFilter
    outgoingConnections?: OutgoingConnectionListRelationFilter
    ReceiveoutgoingConnections?: OutgoingConnectionListRelationFilter
    posts?: PostListRelationFilter
    projects?: ProjectListRelationFilter
    showcase?: XOR<ShowcaseNullableScalarRelationFilter, ShowcaseWhereInput> | null
    technicalProfile?: XOR<TechnicalProfileNullableScalarRelationFilter, TechnicalProfileWhereInput> | null
    visuals?: XOR<VisualsNullableScalarRelationFilter, VisualsWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isEmailVerified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type BasicInfoWhereInput = {
    AND?: BasicInfoWhereInput | BasicInfoWhereInput[]
    OR?: BasicInfoWhereInput[]
    NOT?: BasicInfoWhereInput | BasicInfoWhereInput[]
    id?: IntFilter<"BasicInfo"> | number
    userId?: IntFilter<"BasicInfo"> | number
    fullName?: StringFilter<"BasicInfo"> | string
    Institute?: StringNullableFilter<"BasicInfo"> | string | null
    major?: StringNullableFilter<"BasicInfo"> | string | null
    location?: StringNullableFilter<"BasicInfo"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BasicInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    Institute?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BasicInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BasicInfoWhereInput | BasicInfoWhereInput[]
    OR?: BasicInfoWhereInput[]
    NOT?: BasicInfoWhereInput | BasicInfoWhereInput[]
    fullName?: StringFilter<"BasicInfo"> | string
    Institute?: StringNullableFilter<"BasicInfo"> | string | null
    major?: StringNullableFilter<"BasicInfo"> | string | null
    location?: StringNullableFilter<"BasicInfo"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BasicInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    Institute?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: BasicInfoCountOrderByAggregateInput
    _avg?: BasicInfoAvgOrderByAggregateInput
    _max?: BasicInfoMaxOrderByAggregateInput
    _min?: BasicInfoMinOrderByAggregateInput
    _sum?: BasicInfoSumOrderByAggregateInput
  }

  export type BasicInfoScalarWhereWithAggregatesInput = {
    AND?: BasicInfoScalarWhereWithAggregatesInput | BasicInfoScalarWhereWithAggregatesInput[]
    OR?: BasicInfoScalarWhereWithAggregatesInput[]
    NOT?: BasicInfoScalarWhereWithAggregatesInput | BasicInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BasicInfo"> | number
    userId?: IntWithAggregatesFilter<"BasicInfo"> | number
    fullName?: StringWithAggregatesFilter<"BasicInfo"> | string
    Institute?: StringNullableWithAggregatesFilter<"BasicInfo"> | string | null
    major?: StringNullableWithAggregatesFilter<"BasicInfo"> | string | null
    location?: StringNullableWithAggregatesFilter<"BasicInfo"> | string | null
  }

  export type TechnicalProfileWhereInput = {
    AND?: TechnicalProfileWhereInput | TechnicalProfileWhereInput[]
    OR?: TechnicalProfileWhereInput[]
    NOT?: TechnicalProfileWhereInput | TechnicalProfileWhereInput[]
    id?: IntFilter<"TechnicalProfile"> | number
    userId?: IntFilter<"TechnicalProfile"> | number
    skills?: StringNullableListFilter<"TechnicalProfile">
    experienceLevel?: StringNullableFilter<"TechnicalProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TechnicalProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TechnicalProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TechnicalProfileWhereInput | TechnicalProfileWhereInput[]
    OR?: TechnicalProfileWhereInput[]
    NOT?: TechnicalProfileWhereInput | TechnicalProfileWhereInput[]
    skills?: StringNullableListFilter<"TechnicalProfile">
    experienceLevel?: StringNullableFilter<"TechnicalProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TechnicalProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    _count?: TechnicalProfileCountOrderByAggregateInput
    _avg?: TechnicalProfileAvgOrderByAggregateInput
    _max?: TechnicalProfileMaxOrderByAggregateInput
    _min?: TechnicalProfileMinOrderByAggregateInput
    _sum?: TechnicalProfileSumOrderByAggregateInput
  }

  export type TechnicalProfileScalarWhereWithAggregatesInput = {
    AND?: TechnicalProfileScalarWhereWithAggregatesInput | TechnicalProfileScalarWhereWithAggregatesInput[]
    OR?: TechnicalProfileScalarWhereWithAggregatesInput[]
    NOT?: TechnicalProfileScalarWhereWithAggregatesInput | TechnicalProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TechnicalProfile"> | number
    userId?: IntWithAggregatesFilter<"TechnicalProfile"> | number
    skills?: StringNullableListFilter<"TechnicalProfile">
    experienceLevel?: StringNullableWithAggregatesFilter<"TechnicalProfile"> | string | null
  }

  export type BioSummaryWhereInput = {
    AND?: BioSummaryWhereInput | BioSummaryWhereInput[]
    OR?: BioSummaryWhereInput[]
    NOT?: BioSummaryWhereInput | BioSummaryWhereInput[]
    id?: IntFilter<"BioSummary"> | number
    userId?: IntFilter<"BioSummary"> | number
    shortBio?: StringNullableFilter<"BioSummary"> | string | null
    tagline?: StringNullableFilter<"BioSummary"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BioSummaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shortBio?: SortOrderInput | SortOrder
    tagline?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BioSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BioSummaryWhereInput | BioSummaryWhereInput[]
    OR?: BioSummaryWhereInput[]
    NOT?: BioSummaryWhereInput | BioSummaryWhereInput[]
    shortBio?: StringNullableFilter<"BioSummary"> | string | null
    tagline?: StringNullableFilter<"BioSummary"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BioSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shortBio?: SortOrderInput | SortOrder
    tagline?: SortOrderInput | SortOrder
    _count?: BioSummaryCountOrderByAggregateInput
    _avg?: BioSummaryAvgOrderByAggregateInput
    _max?: BioSummaryMaxOrderByAggregateInput
    _min?: BioSummaryMinOrderByAggregateInput
    _sum?: BioSummarySumOrderByAggregateInput
  }

  export type BioSummaryScalarWhereWithAggregatesInput = {
    AND?: BioSummaryScalarWhereWithAggregatesInput | BioSummaryScalarWhereWithAggregatesInput[]
    OR?: BioSummaryScalarWhereWithAggregatesInput[]
    NOT?: BioSummaryScalarWhereWithAggregatesInput | BioSummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BioSummary"> | number
    userId?: IntWithAggregatesFilter<"BioSummary"> | number
    shortBio?: StringNullableWithAggregatesFilter<"BioSummary"> | string | null
    tagline?: StringNullableWithAggregatesFilter<"BioSummary"> | string | null
  }

  export type ShowcaseWhereInput = {
    AND?: ShowcaseWhereInput | ShowcaseWhereInput[]
    OR?: ShowcaseWhereInput[]
    NOT?: ShowcaseWhereInput | ShowcaseWhereInput[]
    id?: IntFilter<"Showcase"> | number
    userId?: IntFilter<"Showcase"> | number
    github?: StringNullableFilter<"Showcase"> | string | null
    portfolio?: StringNullableFilter<"Showcase"> | string | null
    linkedin?: StringNullableFilter<"Showcase"> | string | null
    email?: StringNullableFilter<"Showcase"> | string | null
    whatsapp?: StringNullableFilter<"Showcase"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShowcaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ShowcaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ShowcaseWhereInput | ShowcaseWhereInput[]
    OR?: ShowcaseWhereInput[]
    NOT?: ShowcaseWhereInput | ShowcaseWhereInput[]
    github?: StringNullableFilter<"Showcase"> | string | null
    portfolio?: StringNullableFilter<"Showcase"> | string | null
    linkedin?: StringNullableFilter<"Showcase"> | string | null
    email?: StringNullableFilter<"Showcase"> | string | null
    whatsapp?: StringNullableFilter<"Showcase"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ShowcaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    _count?: ShowcaseCountOrderByAggregateInput
    _avg?: ShowcaseAvgOrderByAggregateInput
    _max?: ShowcaseMaxOrderByAggregateInput
    _min?: ShowcaseMinOrderByAggregateInput
    _sum?: ShowcaseSumOrderByAggregateInput
  }

  export type ShowcaseScalarWhereWithAggregatesInput = {
    AND?: ShowcaseScalarWhereWithAggregatesInput | ShowcaseScalarWhereWithAggregatesInput[]
    OR?: ShowcaseScalarWhereWithAggregatesInput[]
    NOT?: ShowcaseScalarWhereWithAggregatesInput | ShowcaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Showcase"> | number
    userId?: IntWithAggregatesFilter<"Showcase"> | number
    github?: StringNullableWithAggregatesFilter<"Showcase"> | string | null
    portfolio?: StringNullableWithAggregatesFilter<"Showcase"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"Showcase"> | string | null
    email?: StringNullableWithAggregatesFilter<"Showcase"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Showcase"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    userId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    techUsed?: StringNullableListFilter<"Project">
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    link?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    techUsed?: SortOrder
    status?: SortOrder
    link?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    techUsed?: StringNullableListFilter<"Project">
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    link?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    techUsed?: SortOrder
    status?: SortOrder
    link?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    userId?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    techUsed?: StringNullableListFilter<"Project">
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    link?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type CollaborationWhereInput = {
    AND?: CollaborationWhereInput | CollaborationWhereInput[]
    OR?: CollaborationWhereInput[]
    NOT?: CollaborationWhereInput | CollaborationWhereInput[]
    id?: IntFilter<"Collaboration"> | number
    userId?: IntFilter<"Collaboration"> | number
    openToCollaboration?: BoolNullableFilter<"Collaboration"> | boolean | null
    ideaInterests?: StringNullableFilter<"Collaboration"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CollaborationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    openToCollaboration?: SortOrderInput | SortOrder
    ideaInterests?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CollaborationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CollaborationWhereInput | CollaborationWhereInput[]
    OR?: CollaborationWhereInput[]
    NOT?: CollaborationWhereInput | CollaborationWhereInput[]
    openToCollaboration?: BoolNullableFilter<"Collaboration"> | boolean | null
    ideaInterests?: StringNullableFilter<"Collaboration"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CollaborationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    openToCollaboration?: SortOrderInput | SortOrder
    ideaInterests?: SortOrderInput | SortOrder
    _count?: CollaborationCountOrderByAggregateInput
    _avg?: CollaborationAvgOrderByAggregateInput
    _max?: CollaborationMaxOrderByAggregateInput
    _min?: CollaborationMinOrderByAggregateInput
    _sum?: CollaborationSumOrderByAggregateInput
  }

  export type CollaborationScalarWhereWithAggregatesInput = {
    AND?: CollaborationScalarWhereWithAggregatesInput | CollaborationScalarWhereWithAggregatesInput[]
    OR?: CollaborationScalarWhereWithAggregatesInput[]
    NOT?: CollaborationScalarWhereWithAggregatesInput | CollaborationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Collaboration"> | number
    userId?: IntWithAggregatesFilter<"Collaboration"> | number
    openToCollaboration?: BoolNullableWithAggregatesFilter<"Collaboration"> | boolean | null
    ideaInterests?: StringNullableWithAggregatesFilter<"Collaboration"> | string | null
  }

  export type VisualsWhereInput = {
    AND?: VisualsWhereInput | VisualsWhereInput[]
    OR?: VisualsWhereInput[]
    NOT?: VisualsWhereInput | VisualsWhereInput[]
    id?: IntFilter<"Visuals"> | number
    userId?: IntFilter<"Visuals"> | number
    profilePicture?: StringNullableFilter<"Visuals"> | string | null
    coverImage?: StringNullableFilter<"Visuals"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VisualsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VisualsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: VisualsWhereInput | VisualsWhereInput[]
    OR?: VisualsWhereInput[]
    NOT?: VisualsWhereInput | VisualsWhereInput[]
    profilePicture?: StringNullableFilter<"Visuals"> | string | null
    coverImage?: StringNullableFilter<"Visuals"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type VisualsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    _count?: VisualsCountOrderByAggregateInput
    _avg?: VisualsAvgOrderByAggregateInput
    _max?: VisualsMaxOrderByAggregateInput
    _min?: VisualsMinOrderByAggregateInput
    _sum?: VisualsSumOrderByAggregateInput
  }

  export type VisualsScalarWhereWithAggregatesInput = {
    AND?: VisualsScalarWhereWithAggregatesInput | VisualsScalarWhereWithAggregatesInput[]
    OR?: VisualsScalarWhereWithAggregatesInput[]
    NOT?: VisualsScalarWhereWithAggregatesInput | VisualsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visuals"> | number
    userId?: IntWithAggregatesFilter<"Visuals"> | number
    profilePicture?: StringNullableWithAggregatesFilter<"Visuals"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Visuals"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    description?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    interested?: InterestedListListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    interested?: InterestedListOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    description?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    interested?: InterestedListListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    userId?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    type?: EnumPostTypeWithAggregatesFilter<"Post"> | $Enums.PostType
    description?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type InterestedListWhereInput = {
    AND?: InterestedListWhereInput | InterestedListWhereInput[]
    OR?: InterestedListWhereInput[]
    NOT?: InterestedListWhereInput | InterestedListWhereInput[]
    id?: IntFilter<"InterestedList"> | number
    postId?: IntFilter<"InterestedList"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type InterestedListOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type InterestedListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterestedListWhereInput | InterestedListWhereInput[]
    OR?: InterestedListWhereInput[]
    NOT?: InterestedListWhereInput | InterestedListWhereInput[]
    postId?: IntFilter<"InterestedList"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type InterestedListOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    _count?: InterestedListCountOrderByAggregateInput
    _avg?: InterestedListAvgOrderByAggregateInput
    _max?: InterestedListMaxOrderByAggregateInput
    _min?: InterestedListMinOrderByAggregateInput
    _sum?: InterestedListSumOrderByAggregateInput
  }

  export type InterestedListScalarWhereWithAggregatesInput = {
    AND?: InterestedListScalarWhereWithAggregatesInput | InterestedListScalarWhereWithAggregatesInput[]
    OR?: InterestedListScalarWhereWithAggregatesInput[]
    NOT?: InterestedListScalarWhereWithAggregatesInput | InterestedListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InterestedList"> | number
    postId?: IntWithAggregatesFilter<"InterestedList"> | number
  }

  export type IncomingConnectionWhereInput = {
    AND?: IncomingConnectionWhereInput | IncomingConnectionWhereInput[]
    OR?: IncomingConnectionWhereInput[]
    NOT?: IncomingConnectionWhereInput | IncomingConnectionWhereInput[]
    id?: IntFilter<"IncomingConnection"> | number
    senderId?: IntFilter<"IncomingConnection"> | number
    receiverId?: IntFilter<"IncomingConnection"> | number
    requestedAt?: DateTimeFilter<"IncomingConnection"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncomingConnectionOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    requestedAt?: SortOrder
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type IncomingConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    senderId_receiverId?: IncomingConnectionSenderIdReceiverIdCompoundUniqueInput
    AND?: IncomingConnectionWhereInput | IncomingConnectionWhereInput[]
    OR?: IncomingConnectionWhereInput[]
    NOT?: IncomingConnectionWhereInput | IncomingConnectionWhereInput[]
    senderId?: IntFilter<"IncomingConnection"> | number
    receiverId?: IntFilter<"IncomingConnection"> | number
    requestedAt?: DateTimeFilter<"IncomingConnection"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "senderId_receiverId">

  export type IncomingConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    requestedAt?: SortOrder
    _count?: IncomingConnectionCountOrderByAggregateInput
    _avg?: IncomingConnectionAvgOrderByAggregateInput
    _max?: IncomingConnectionMaxOrderByAggregateInput
    _min?: IncomingConnectionMinOrderByAggregateInput
    _sum?: IncomingConnectionSumOrderByAggregateInput
  }

  export type IncomingConnectionScalarWhereWithAggregatesInput = {
    AND?: IncomingConnectionScalarWhereWithAggregatesInput | IncomingConnectionScalarWhereWithAggregatesInput[]
    OR?: IncomingConnectionScalarWhereWithAggregatesInput[]
    NOT?: IncomingConnectionScalarWhereWithAggregatesInput | IncomingConnectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncomingConnection"> | number
    senderId?: IntWithAggregatesFilter<"IncomingConnection"> | number
    receiverId?: IntWithAggregatesFilter<"IncomingConnection"> | number
    requestedAt?: DateTimeWithAggregatesFilter<"IncomingConnection"> | Date | string
  }

  export type OutgoingConnectionWhereInput = {
    AND?: OutgoingConnectionWhereInput | OutgoingConnectionWhereInput[]
    OR?: OutgoingConnectionWhereInput[]
    NOT?: OutgoingConnectionWhereInput | OutgoingConnectionWhereInput[]
    id?: IntFilter<"OutgoingConnection"> | number
    receiverId?: IntFilter<"OutgoingConnection"> | number
    senderId?: IntFilter<"OutgoingConnection"> | number
    requestedAt?: DateTimeFilter<"OutgoingConnection"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OutgoingConnectionOrderByWithRelationInput = {
    id?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    requestedAt?: SortOrder
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type OutgoingConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    senderId_receiverId?: OutgoingConnectionSenderIdReceiverIdCompoundUniqueInput
    AND?: OutgoingConnectionWhereInput | OutgoingConnectionWhereInput[]
    OR?: OutgoingConnectionWhereInput[]
    NOT?: OutgoingConnectionWhereInput | OutgoingConnectionWhereInput[]
    receiverId?: IntFilter<"OutgoingConnection"> | number
    senderId?: IntFilter<"OutgoingConnection"> | number
    requestedAt?: DateTimeFilter<"OutgoingConnection"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "senderId_receiverId">

  export type OutgoingConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    requestedAt?: SortOrder
    _count?: OutgoingConnectionCountOrderByAggregateInput
    _avg?: OutgoingConnectionAvgOrderByAggregateInput
    _max?: OutgoingConnectionMaxOrderByAggregateInput
    _min?: OutgoingConnectionMinOrderByAggregateInput
    _sum?: OutgoingConnectionSumOrderByAggregateInput
  }

  export type OutgoingConnectionScalarWhereWithAggregatesInput = {
    AND?: OutgoingConnectionScalarWhereWithAggregatesInput | OutgoingConnectionScalarWhereWithAggregatesInput[]
    OR?: OutgoingConnectionScalarWhereWithAggregatesInput[]
    NOT?: OutgoingConnectionScalarWhereWithAggregatesInput | OutgoingConnectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OutgoingConnection"> | number
    receiverId?: IntWithAggregatesFilter<"OutgoingConnection"> | number
    senderId?: IntWithAggregatesFilter<"OutgoingConnection"> | number
    requestedAt?: DateTimeWithAggregatesFilter<"OutgoingConnection"> | Date | string
  }

  export type ConnectionWhereInput = {
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id?: IntFilter<"Connection"> | number
    participantAId?: IntFilter<"Connection"> | number
    participantBId?: IntFilter<"Connection"> | number
    connectedAt?: DateTimeFilter<"Connection"> | Date | string
    participantA?: XOR<UserScalarRelationFilter, UserWhereInput>
    participantB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConnectionOrderByWithRelationInput = {
    id?: SortOrder
    participantAId?: SortOrder
    participantBId?: SortOrder
    connectedAt?: SortOrder
    participantA?: UserOrderByWithRelationInput
    participantB?: UserOrderByWithRelationInput
  }

  export type ConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    participantAId_participantBId?: ConnectionParticipantAIdParticipantBIdCompoundUniqueInput
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    participantAId?: IntFilter<"Connection"> | number
    participantBId?: IntFilter<"Connection"> | number
    connectedAt?: DateTimeFilter<"Connection"> | Date | string
    participantA?: XOR<UserScalarRelationFilter, UserWhereInput>
    participantB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "participantAId_participantBId">

  export type ConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    participantAId?: SortOrder
    participantBId?: SortOrder
    connectedAt?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _avg?: ConnectionAvgOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
    _sum?: ConnectionSumOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    OR?: ConnectionScalarWhereWithAggregatesInput[]
    NOT?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Connection"> | number
    participantAId?: IntWithAggregatesFilter<"Connection"> | number
    participantBId?: IntWithAggregatesFilter<"Connection"> | number
    connectedAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type BasicInfoCreateInput = {
    fullName: string
    Institute?: string | null
    major?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutBasicInfoInput
  }

  export type BasicInfoUncheckedCreateInput = {
    id?: number
    userId: number
    fullName: string
    Institute?: string | null
    major?: string | null
    location?: string | null
  }

  export type BasicInfoUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    Institute?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBasicInfoNestedInput
  }

  export type BasicInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    Institute?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BasicInfoCreateManyInput = {
    id?: number
    userId: number
    fullName: string
    Institute?: string | null
    major?: string | null
    location?: string | null
  }

  export type BasicInfoUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    Institute?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BasicInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    Institute?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalProfileCreateInput = {
    skills?: TechnicalProfileCreateskillsInput | string[]
    experienceLevel?: string | null
    user: UserCreateNestedOneWithoutTechnicalProfileInput
  }

  export type TechnicalProfileUncheckedCreateInput = {
    id?: number
    userId: number
    skills?: TechnicalProfileCreateskillsInput | string[]
    experienceLevel?: string | null
  }

  export type TechnicalProfileUpdateInput = {
    skills?: TechnicalProfileUpdateskillsInput | string[]
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTechnicalProfileNestedInput
  }

  export type TechnicalProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    skills?: TechnicalProfileUpdateskillsInput | string[]
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalProfileCreateManyInput = {
    id?: number
    userId: number
    skills?: TechnicalProfileCreateskillsInput | string[]
    experienceLevel?: string | null
  }

  export type TechnicalProfileUpdateManyMutationInput = {
    skills?: TechnicalProfileUpdateskillsInput | string[]
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    skills?: TechnicalProfileUpdateskillsInput | string[]
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioSummaryCreateInput = {
    shortBio?: string | null
    tagline?: string | null
    user: UserCreateNestedOneWithoutBioSummaryInput
  }

  export type BioSummaryUncheckedCreateInput = {
    id?: number
    userId: number
    shortBio?: string | null
    tagline?: string | null
  }

  export type BioSummaryUpdateInput = {
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBioSummaryNestedInput
  }

  export type BioSummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioSummaryCreateManyInput = {
    id?: number
    userId: number
    shortBio?: string | null
    tagline?: string | null
  }

  export type BioSummaryUpdateManyMutationInput = {
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioSummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowcaseCreateInput = {
    github?: string | null
    portfolio?: string | null
    linkedin?: string | null
    email?: string | null
    whatsapp?: string | null
    user: UserCreateNestedOneWithoutShowcaseInput
  }

  export type ShowcaseUncheckedCreateInput = {
    id?: number
    userId: number
    github?: string | null
    portfolio?: string | null
    linkedin?: string | null
    email?: string | null
    whatsapp?: string | null
  }

  export type ShowcaseUpdateInput = {
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutShowcaseNestedInput
  }

  export type ShowcaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowcaseCreateManyInput = {
    id?: number
    userId: number
    github?: string | null
    portfolio?: string | null
    linkedin?: string | null
    email?: string | null
    whatsapp?: string | null
  }

  export type ShowcaseUpdateManyMutationInput = {
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowcaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    techUsed?: ProjectCreatetechUsedInput | string[]
    status?: $Enums.ProjectStatus
    link?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    techUsed?: ProjectCreatetechUsedInput | string[]
    status?: $Enums.ProjectStatus
    link?: string | null
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    techUsed?: ProjectUpdatetechUsedInput | string[]
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    link?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    techUsed?: ProjectUpdatetechUsedInput | string[]
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateManyInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    techUsed?: ProjectCreatetechUsedInput | string[]
    status?: $Enums.ProjectStatus
    link?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    techUsed?: ProjectUpdatetechUsedInput | string[]
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    techUsed?: ProjectUpdatetechUsedInput | string[]
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationCreateInput = {
    openToCollaboration?: boolean | null
    ideaInterests?: string | null
    user: UserCreateNestedOneWithoutCollaborationInput
  }

  export type CollaborationUncheckedCreateInput = {
    id?: number
    userId: number
    openToCollaboration?: boolean | null
    ideaInterests?: string | null
  }

  export type CollaborationUpdateInput = {
    openToCollaboration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ideaInterests?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCollaborationNestedInput
  }

  export type CollaborationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    openToCollaboration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ideaInterests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationCreateManyInput = {
    id?: number
    userId: number
    openToCollaboration?: boolean | null
    ideaInterests?: string | null
  }

  export type CollaborationUpdateManyMutationInput = {
    openToCollaboration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ideaInterests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    openToCollaboration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ideaInterests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualsCreateInput = {
    profilePicture?: string | null
    coverImage?: string | null
    user: UserCreateNestedOneWithoutVisualsInput
  }

  export type VisualsUncheckedCreateInput = {
    id?: number
    userId: number
    profilePicture?: string | null
    coverImage?: string | null
  }

  export type VisualsUpdateInput = {
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutVisualsNestedInput
  }

  export type VisualsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualsCreateManyInput = {
    id?: number
    userId: number
    profilePicture?: string | null
    coverImage?: string | null
  }

  export type VisualsUpdateManyMutationInput = {
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
    interested?: InterestedListCreateNestedManyWithoutPostInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
    interested?: InterestedListUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interested?: InterestedListUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interested?: InterestedListUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    userId: number
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestedListCreateInput = {
    post: PostCreateNestedOneWithoutInterestedInput
  }

  export type InterestedListUncheckedCreateInput = {
    id?: number
    postId: number
  }

  export type InterestedListUpdateInput = {
    post?: PostUpdateOneRequiredWithoutInterestedNestedInput
  }

  export type InterestedListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestedListCreateManyInput = {
    id?: number
    postId: number
  }

  export type InterestedListUpdateManyMutationInput = {

  }

  export type InterestedListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type IncomingConnectionCreateInput = {
    requestedAt?: Date | string
    receiver: UserCreateNestedOneWithoutIncomingConnectionsInput
    sender: UserCreateNestedOneWithoutSentIncomingConnectionsInput
  }

  export type IncomingConnectionUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    requestedAt?: Date | string
  }

  export type IncomingConnectionUpdateInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutIncomingConnectionsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentIncomingConnectionsNestedInput
  }

  export type IncomingConnectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingConnectionCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    requestedAt?: Date | string
  }

  export type IncomingConnectionUpdateManyMutationInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingConnectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutgoingConnectionCreateInput = {
    requestedAt?: Date | string
    receiver: UserCreateNestedOneWithoutOutgoingConnectionsInput
    sender: UserCreateNestedOneWithoutReceiveoutgoingConnectionsInput
  }

  export type OutgoingConnectionUncheckedCreateInput = {
    id?: number
    receiverId: number
    senderId: number
    requestedAt?: Date | string
  }

  export type OutgoingConnectionUpdateInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutOutgoingConnectionsNestedInput
    sender?: UserUpdateOneRequiredWithoutReceiveoutgoingConnectionsNestedInput
  }

  export type OutgoingConnectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutgoingConnectionCreateManyInput = {
    id?: number
    receiverId: number
    senderId: number
    requestedAt?: Date | string
  }

  export type OutgoingConnectionUpdateManyMutationInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutgoingConnectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateInput = {
    connectedAt?: Date | string
    participantA: UserCreateNestedOneWithoutParticipantAInput
    participantB: UserCreateNestedOneWithoutParticipantBInput
  }

  export type ConnectionUncheckedCreateInput = {
    id?: number
    participantAId: number
    participantBId: number
    connectedAt?: Date | string
  }

  export type ConnectionUpdateInput = {
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantA?: UserUpdateOneRequiredWithoutParticipantANestedInput
    participantB?: UserUpdateOneRequiredWithoutParticipantBNestedInput
  }

  export type ConnectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantAId?: IntFieldUpdateOperationsInput | number
    participantBId?: IntFieldUpdateOperationsInput | number
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateManyInput = {
    id?: number
    participantAId: number
    participantBId: number
    connectedAt?: Date | string
  }

  export type ConnectionUpdateManyMutationInput = {
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantAId?: IntFieldUpdateOperationsInput | number
    participantBId?: IntFieldUpdateOperationsInput | number
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BasicInfoNullableScalarRelationFilter = {
    is?: BasicInfoWhereInput | null
    isNot?: BasicInfoWhereInput | null
  }

  export type BioSummaryNullableScalarRelationFilter = {
    is?: BioSummaryWhereInput | null
    isNot?: BioSummaryWhereInput | null
  }

  export type CollaborationNullableScalarRelationFilter = {
    is?: CollaborationWhereInput | null
    isNot?: CollaborationWhereInput | null
  }

  export type ConnectionListRelationFilter = {
    every?: ConnectionWhereInput
    some?: ConnectionWhereInput
    none?: ConnectionWhereInput
  }

  export type IncomingConnectionListRelationFilter = {
    every?: IncomingConnectionWhereInput
    some?: IncomingConnectionWhereInput
    none?: IncomingConnectionWhereInput
  }

  export type OutgoingConnectionListRelationFilter = {
    every?: OutgoingConnectionWhereInput
    some?: OutgoingConnectionWhereInput
    none?: OutgoingConnectionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ShowcaseNullableScalarRelationFilter = {
    is?: ShowcaseWhereInput | null
    isNot?: ShowcaseWhereInput | null
  }

  export type TechnicalProfileNullableScalarRelationFilter = {
    is?: TechnicalProfileWhereInput | null
    isNot?: TechnicalProfileWhereInput | null
  }

  export type VisualsNullableScalarRelationFilter = {
    is?: VisualsWhereInput | null
    isNot?: VisualsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomingConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutgoingConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isEmailVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isEmailVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isEmailVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BasicInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    Institute?: SortOrder
    major?: SortOrder
    location?: SortOrder
  }

  export type BasicInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BasicInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    Institute?: SortOrder
    major?: SortOrder
    location?: SortOrder
  }

  export type BasicInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    Institute?: SortOrder
    major?: SortOrder
    location?: SortOrder
  }

  export type BasicInfoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TechnicalProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    experienceLevel?: SortOrder
  }

  export type TechnicalProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TechnicalProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceLevel?: SortOrder
  }

  export type TechnicalProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceLevel?: SortOrder
  }

  export type TechnicalProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BioSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shortBio?: SortOrder
    tagline?: SortOrder
  }

  export type BioSummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BioSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shortBio?: SortOrder
    tagline?: SortOrder
  }

  export type BioSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shortBio?: SortOrder
    tagline?: SortOrder
  }

  export type BioSummarySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ShowcaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    linkedin?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
  }

  export type ShowcaseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ShowcaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    linkedin?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
  }

  export type ShowcaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    linkedin?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
  }

  export type ShowcaseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    techUsed?: SortOrder
    status?: SortOrder
    link?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    link?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    link?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CollaborationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    openToCollaboration?: SortOrder
    ideaInterests?: SortOrder
  }

  export type CollaborationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CollaborationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    openToCollaboration?: SortOrder
    ideaInterests?: SortOrder
  }

  export type CollaborationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    openToCollaboration?: SortOrder
    ideaInterests?: SortOrder
  }

  export type CollaborationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type VisualsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    coverImage?: SortOrder
  }

  export type VisualsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VisualsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    coverImage?: SortOrder
  }

  export type VisualsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    coverImage?: SortOrder
  }

  export type VisualsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type InterestedListListRelationFilter = {
    every?: InterestedListWhereInput
    some?: InterestedListWhereInput
    none?: InterestedListWhereInput
  }

  export type InterestedListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type InterestedListCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type InterestedListAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type InterestedListMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type InterestedListMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type InterestedListSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type IncomingConnectionSenderIdReceiverIdCompoundUniqueInput = {
    senderId: number
    receiverId: number
  }

  export type IncomingConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    requestedAt?: SortOrder
  }

  export type IncomingConnectionAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type IncomingConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    requestedAt?: SortOrder
  }

  export type IncomingConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    requestedAt?: SortOrder
  }

  export type IncomingConnectionSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type OutgoingConnectionSenderIdReceiverIdCompoundUniqueInput = {
    senderId: number
    receiverId: number
  }

  export type OutgoingConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    requestedAt?: SortOrder
  }

  export type OutgoingConnectionAvgOrderByAggregateInput = {
    id?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
  }

  export type OutgoingConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    requestedAt?: SortOrder
  }

  export type OutgoingConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    requestedAt?: SortOrder
  }

  export type OutgoingConnectionSumOrderByAggregateInput = {
    id?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
  }

  export type ConnectionParticipantAIdParticipantBIdCompoundUniqueInput = {
    participantAId: number
    participantBId: number
  }

  export type ConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    participantAId?: SortOrder
    participantBId?: SortOrder
    connectedAt?: SortOrder
  }

  export type ConnectionAvgOrderByAggregateInput = {
    id?: SortOrder
    participantAId?: SortOrder
    participantBId?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    participantAId?: SortOrder
    participantBId?: SortOrder
    connectedAt?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    participantAId?: SortOrder
    participantBId?: SortOrder
    connectedAt?: SortOrder
  }

  export type ConnectionSumOrderByAggregateInput = {
    id?: SortOrder
    participantAId?: SortOrder
    participantBId?: SortOrder
  }

  export type BasicInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutUserInput
    connect?: BasicInfoWhereUniqueInput
  }

  export type BioSummaryCreateNestedOneWithoutUserInput = {
    create?: XOR<BioSummaryCreateWithoutUserInput, BioSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: BioSummaryCreateOrConnectWithoutUserInput
    connect?: BioSummaryWhereUniqueInput
  }

  export type CollaborationCreateNestedOneWithoutUserInput = {
    create?: XOR<CollaborationCreateWithoutUserInput, CollaborationUncheckedCreateWithoutUserInput>
    connectOrCreate?: CollaborationCreateOrConnectWithoutUserInput
    connect?: CollaborationWhereUniqueInput
  }

  export type ConnectionCreateNestedManyWithoutParticipantAInput = {
    create?: XOR<ConnectionCreateWithoutParticipantAInput, ConnectionUncheckedCreateWithoutParticipantAInput> | ConnectionCreateWithoutParticipantAInput[] | ConnectionUncheckedCreateWithoutParticipantAInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantAInput | ConnectionCreateOrConnectWithoutParticipantAInput[]
    createMany?: ConnectionCreateManyParticipantAInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type ConnectionCreateNestedManyWithoutParticipantBInput = {
    create?: XOR<ConnectionCreateWithoutParticipantBInput, ConnectionUncheckedCreateWithoutParticipantBInput> | ConnectionCreateWithoutParticipantBInput[] | ConnectionUncheckedCreateWithoutParticipantBInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantBInput | ConnectionCreateOrConnectWithoutParticipantBInput[]
    createMany?: ConnectionCreateManyParticipantBInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type IncomingConnectionCreateNestedManyWithoutSenderInput = {
    create?: XOR<IncomingConnectionCreateWithoutSenderInput, IncomingConnectionUncheckedCreateWithoutSenderInput> | IncomingConnectionCreateWithoutSenderInput[] | IncomingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutSenderInput | IncomingConnectionCreateOrConnectWithoutSenderInput[]
    createMany?: IncomingConnectionCreateManySenderInputEnvelope
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
  }

  export type IncomingConnectionCreateNestedManyWithoutReceiverInput = {
    create?: XOR<IncomingConnectionCreateWithoutReceiverInput, IncomingConnectionUncheckedCreateWithoutReceiverInput> | IncomingConnectionCreateWithoutReceiverInput[] | IncomingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutReceiverInput | IncomingConnectionCreateOrConnectWithoutReceiverInput[]
    createMany?: IncomingConnectionCreateManyReceiverInputEnvelope
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
  }

  export type OutgoingConnectionCreateNestedManyWithoutReceiverInput = {
    create?: XOR<OutgoingConnectionCreateWithoutReceiverInput, OutgoingConnectionUncheckedCreateWithoutReceiverInput> | OutgoingConnectionCreateWithoutReceiverInput[] | OutgoingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutReceiverInput | OutgoingConnectionCreateOrConnectWithoutReceiverInput[]
    createMany?: OutgoingConnectionCreateManyReceiverInputEnvelope
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
  }

  export type OutgoingConnectionCreateNestedManyWithoutSenderInput = {
    create?: XOR<OutgoingConnectionCreateWithoutSenderInput, OutgoingConnectionUncheckedCreateWithoutSenderInput> | OutgoingConnectionCreateWithoutSenderInput[] | OutgoingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutSenderInput | OutgoingConnectionCreateOrConnectWithoutSenderInput[]
    createMany?: OutgoingConnectionCreateManySenderInputEnvelope
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ShowcaseCreateNestedOneWithoutUserInput = {
    create?: XOR<ShowcaseCreateWithoutUserInput, ShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShowcaseCreateOrConnectWithoutUserInput
    connect?: ShowcaseWhereUniqueInput
  }

  export type TechnicalProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TechnicalProfileCreateWithoutUserInput, TechnicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicalProfileCreateOrConnectWithoutUserInput
    connect?: TechnicalProfileWhereUniqueInput
  }

  export type VisualsCreateNestedOneWithoutUserInput = {
    create?: XOR<VisualsCreateWithoutUserInput, VisualsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VisualsCreateOrConnectWithoutUserInput
    connect?: VisualsWhereUniqueInput
  }

  export type BasicInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutUserInput
    connect?: BasicInfoWhereUniqueInput
  }

  export type BioSummaryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BioSummaryCreateWithoutUserInput, BioSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: BioSummaryCreateOrConnectWithoutUserInput
    connect?: BioSummaryWhereUniqueInput
  }

  export type CollaborationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CollaborationCreateWithoutUserInput, CollaborationUncheckedCreateWithoutUserInput>
    connectOrCreate?: CollaborationCreateOrConnectWithoutUserInput
    connect?: CollaborationWhereUniqueInput
  }

  export type ConnectionUncheckedCreateNestedManyWithoutParticipantAInput = {
    create?: XOR<ConnectionCreateWithoutParticipantAInput, ConnectionUncheckedCreateWithoutParticipantAInput> | ConnectionCreateWithoutParticipantAInput[] | ConnectionUncheckedCreateWithoutParticipantAInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantAInput | ConnectionCreateOrConnectWithoutParticipantAInput[]
    createMany?: ConnectionCreateManyParticipantAInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type ConnectionUncheckedCreateNestedManyWithoutParticipantBInput = {
    create?: XOR<ConnectionCreateWithoutParticipantBInput, ConnectionUncheckedCreateWithoutParticipantBInput> | ConnectionCreateWithoutParticipantBInput[] | ConnectionUncheckedCreateWithoutParticipantBInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantBInput | ConnectionCreateOrConnectWithoutParticipantBInput[]
    createMany?: ConnectionCreateManyParticipantBInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<IncomingConnectionCreateWithoutSenderInput, IncomingConnectionUncheckedCreateWithoutSenderInput> | IncomingConnectionCreateWithoutSenderInput[] | IncomingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutSenderInput | IncomingConnectionCreateOrConnectWithoutSenderInput[]
    createMany?: IncomingConnectionCreateManySenderInputEnvelope
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
  }

  export type IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<IncomingConnectionCreateWithoutReceiverInput, IncomingConnectionUncheckedCreateWithoutReceiverInput> | IncomingConnectionCreateWithoutReceiverInput[] | IncomingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutReceiverInput | IncomingConnectionCreateOrConnectWithoutReceiverInput[]
    createMany?: IncomingConnectionCreateManyReceiverInputEnvelope
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
  }

  export type OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<OutgoingConnectionCreateWithoutReceiverInput, OutgoingConnectionUncheckedCreateWithoutReceiverInput> | OutgoingConnectionCreateWithoutReceiverInput[] | OutgoingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutReceiverInput | OutgoingConnectionCreateOrConnectWithoutReceiverInput[]
    createMany?: OutgoingConnectionCreateManyReceiverInputEnvelope
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
  }

  export type OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<OutgoingConnectionCreateWithoutSenderInput, OutgoingConnectionUncheckedCreateWithoutSenderInput> | OutgoingConnectionCreateWithoutSenderInput[] | OutgoingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutSenderInput | OutgoingConnectionCreateOrConnectWithoutSenderInput[]
    createMany?: OutgoingConnectionCreateManySenderInputEnvelope
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ShowcaseUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ShowcaseCreateWithoutUserInput, ShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShowcaseCreateOrConnectWithoutUserInput
    connect?: ShowcaseWhereUniqueInput
  }

  export type TechnicalProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TechnicalProfileCreateWithoutUserInput, TechnicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicalProfileCreateOrConnectWithoutUserInput
    connect?: TechnicalProfileWhereUniqueInput
  }

  export type VisualsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VisualsCreateWithoutUserInput, VisualsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VisualsCreateOrConnectWithoutUserInput
    connect?: VisualsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BasicInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutUserInput
    upsert?: BasicInfoUpsertWithoutUserInput
    disconnect?: BasicInfoWhereInput | boolean
    delete?: BasicInfoWhereInput | boolean
    connect?: BasicInfoWhereUniqueInput
    update?: XOR<XOR<BasicInfoUpdateToOneWithWhereWithoutUserInput, BasicInfoUpdateWithoutUserInput>, BasicInfoUncheckedUpdateWithoutUserInput>
  }

  export type BioSummaryUpdateOneWithoutUserNestedInput = {
    create?: XOR<BioSummaryCreateWithoutUserInput, BioSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: BioSummaryCreateOrConnectWithoutUserInput
    upsert?: BioSummaryUpsertWithoutUserInput
    disconnect?: BioSummaryWhereInput | boolean
    delete?: BioSummaryWhereInput | boolean
    connect?: BioSummaryWhereUniqueInput
    update?: XOR<XOR<BioSummaryUpdateToOneWithWhereWithoutUserInput, BioSummaryUpdateWithoutUserInput>, BioSummaryUncheckedUpdateWithoutUserInput>
  }

  export type CollaborationUpdateOneWithoutUserNestedInput = {
    create?: XOR<CollaborationCreateWithoutUserInput, CollaborationUncheckedCreateWithoutUserInput>
    connectOrCreate?: CollaborationCreateOrConnectWithoutUserInput
    upsert?: CollaborationUpsertWithoutUserInput
    disconnect?: CollaborationWhereInput | boolean
    delete?: CollaborationWhereInput | boolean
    connect?: CollaborationWhereUniqueInput
    update?: XOR<XOR<CollaborationUpdateToOneWithWhereWithoutUserInput, CollaborationUpdateWithoutUserInput>, CollaborationUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionUpdateManyWithoutParticipantANestedInput = {
    create?: XOR<ConnectionCreateWithoutParticipantAInput, ConnectionUncheckedCreateWithoutParticipantAInput> | ConnectionCreateWithoutParticipantAInput[] | ConnectionUncheckedCreateWithoutParticipantAInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantAInput | ConnectionCreateOrConnectWithoutParticipantAInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutParticipantAInput | ConnectionUpsertWithWhereUniqueWithoutParticipantAInput[]
    createMany?: ConnectionCreateManyParticipantAInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutParticipantAInput | ConnectionUpdateWithWhereUniqueWithoutParticipantAInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutParticipantAInput | ConnectionUpdateManyWithWhereWithoutParticipantAInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type ConnectionUpdateManyWithoutParticipantBNestedInput = {
    create?: XOR<ConnectionCreateWithoutParticipantBInput, ConnectionUncheckedCreateWithoutParticipantBInput> | ConnectionCreateWithoutParticipantBInput[] | ConnectionUncheckedCreateWithoutParticipantBInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantBInput | ConnectionCreateOrConnectWithoutParticipantBInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutParticipantBInput | ConnectionUpsertWithWhereUniqueWithoutParticipantBInput[]
    createMany?: ConnectionCreateManyParticipantBInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutParticipantBInput | ConnectionUpdateWithWhereUniqueWithoutParticipantBInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutParticipantBInput | ConnectionUpdateManyWithWhereWithoutParticipantBInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type IncomingConnectionUpdateManyWithoutSenderNestedInput = {
    create?: XOR<IncomingConnectionCreateWithoutSenderInput, IncomingConnectionUncheckedCreateWithoutSenderInput> | IncomingConnectionCreateWithoutSenderInput[] | IncomingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutSenderInput | IncomingConnectionCreateOrConnectWithoutSenderInput[]
    upsert?: IncomingConnectionUpsertWithWhereUniqueWithoutSenderInput | IncomingConnectionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: IncomingConnectionCreateManySenderInputEnvelope
    set?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    disconnect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    delete?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    update?: IncomingConnectionUpdateWithWhereUniqueWithoutSenderInput | IncomingConnectionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: IncomingConnectionUpdateManyWithWhereWithoutSenderInput | IncomingConnectionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: IncomingConnectionScalarWhereInput | IncomingConnectionScalarWhereInput[]
  }

  export type IncomingConnectionUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<IncomingConnectionCreateWithoutReceiverInput, IncomingConnectionUncheckedCreateWithoutReceiverInput> | IncomingConnectionCreateWithoutReceiverInput[] | IncomingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutReceiverInput | IncomingConnectionCreateOrConnectWithoutReceiverInput[]
    upsert?: IncomingConnectionUpsertWithWhereUniqueWithoutReceiverInput | IncomingConnectionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: IncomingConnectionCreateManyReceiverInputEnvelope
    set?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    disconnect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    delete?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    update?: IncomingConnectionUpdateWithWhereUniqueWithoutReceiverInput | IncomingConnectionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: IncomingConnectionUpdateManyWithWhereWithoutReceiverInput | IncomingConnectionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: IncomingConnectionScalarWhereInput | IncomingConnectionScalarWhereInput[]
  }

  export type OutgoingConnectionUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<OutgoingConnectionCreateWithoutReceiverInput, OutgoingConnectionUncheckedCreateWithoutReceiverInput> | OutgoingConnectionCreateWithoutReceiverInput[] | OutgoingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutReceiverInput | OutgoingConnectionCreateOrConnectWithoutReceiverInput[]
    upsert?: OutgoingConnectionUpsertWithWhereUniqueWithoutReceiverInput | OutgoingConnectionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: OutgoingConnectionCreateManyReceiverInputEnvelope
    set?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    disconnect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    delete?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    update?: OutgoingConnectionUpdateWithWhereUniqueWithoutReceiverInput | OutgoingConnectionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: OutgoingConnectionUpdateManyWithWhereWithoutReceiverInput | OutgoingConnectionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: OutgoingConnectionScalarWhereInput | OutgoingConnectionScalarWhereInput[]
  }

  export type OutgoingConnectionUpdateManyWithoutSenderNestedInput = {
    create?: XOR<OutgoingConnectionCreateWithoutSenderInput, OutgoingConnectionUncheckedCreateWithoutSenderInput> | OutgoingConnectionCreateWithoutSenderInput[] | OutgoingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutSenderInput | OutgoingConnectionCreateOrConnectWithoutSenderInput[]
    upsert?: OutgoingConnectionUpsertWithWhereUniqueWithoutSenderInput | OutgoingConnectionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: OutgoingConnectionCreateManySenderInputEnvelope
    set?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    disconnect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    delete?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    update?: OutgoingConnectionUpdateWithWhereUniqueWithoutSenderInput | OutgoingConnectionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: OutgoingConnectionUpdateManyWithWhereWithoutSenderInput | OutgoingConnectionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: OutgoingConnectionScalarWhereInput | OutgoingConnectionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ShowcaseUpdateOneWithoutUserNestedInput = {
    create?: XOR<ShowcaseCreateWithoutUserInput, ShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShowcaseCreateOrConnectWithoutUserInput
    upsert?: ShowcaseUpsertWithoutUserInput
    disconnect?: ShowcaseWhereInput | boolean
    delete?: ShowcaseWhereInput | boolean
    connect?: ShowcaseWhereUniqueInput
    update?: XOR<XOR<ShowcaseUpdateToOneWithWhereWithoutUserInput, ShowcaseUpdateWithoutUserInput>, ShowcaseUncheckedUpdateWithoutUserInput>
  }

  export type TechnicalProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TechnicalProfileCreateWithoutUserInput, TechnicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicalProfileCreateOrConnectWithoutUserInput
    upsert?: TechnicalProfileUpsertWithoutUserInput
    disconnect?: TechnicalProfileWhereInput | boolean
    delete?: TechnicalProfileWhereInput | boolean
    connect?: TechnicalProfileWhereUniqueInput
    update?: XOR<XOR<TechnicalProfileUpdateToOneWithWhereWithoutUserInput, TechnicalProfileUpdateWithoutUserInput>, TechnicalProfileUncheckedUpdateWithoutUserInput>
  }

  export type VisualsUpdateOneWithoutUserNestedInput = {
    create?: XOR<VisualsCreateWithoutUserInput, VisualsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VisualsCreateOrConnectWithoutUserInput
    upsert?: VisualsUpsertWithoutUserInput
    disconnect?: VisualsWhereInput | boolean
    delete?: VisualsWhereInput | boolean
    connect?: VisualsWhereUniqueInput
    update?: XOR<XOR<VisualsUpdateToOneWithWhereWithoutUserInput, VisualsUpdateWithoutUserInput>, VisualsUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BasicInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: BasicInfoCreateOrConnectWithoutUserInput
    upsert?: BasicInfoUpsertWithoutUserInput
    disconnect?: BasicInfoWhereInput | boolean
    delete?: BasicInfoWhereInput | boolean
    connect?: BasicInfoWhereUniqueInput
    update?: XOR<XOR<BasicInfoUpdateToOneWithWhereWithoutUserInput, BasicInfoUpdateWithoutUserInput>, BasicInfoUncheckedUpdateWithoutUserInput>
  }

  export type BioSummaryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BioSummaryCreateWithoutUserInput, BioSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: BioSummaryCreateOrConnectWithoutUserInput
    upsert?: BioSummaryUpsertWithoutUserInput
    disconnect?: BioSummaryWhereInput | boolean
    delete?: BioSummaryWhereInput | boolean
    connect?: BioSummaryWhereUniqueInput
    update?: XOR<XOR<BioSummaryUpdateToOneWithWhereWithoutUserInput, BioSummaryUpdateWithoutUserInput>, BioSummaryUncheckedUpdateWithoutUserInput>
  }

  export type CollaborationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CollaborationCreateWithoutUserInput, CollaborationUncheckedCreateWithoutUserInput>
    connectOrCreate?: CollaborationCreateOrConnectWithoutUserInput
    upsert?: CollaborationUpsertWithoutUserInput
    disconnect?: CollaborationWhereInput | boolean
    delete?: CollaborationWhereInput | boolean
    connect?: CollaborationWhereUniqueInput
    update?: XOR<XOR<CollaborationUpdateToOneWithWhereWithoutUserInput, CollaborationUpdateWithoutUserInput>, CollaborationUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionUncheckedUpdateManyWithoutParticipantANestedInput = {
    create?: XOR<ConnectionCreateWithoutParticipantAInput, ConnectionUncheckedCreateWithoutParticipantAInput> | ConnectionCreateWithoutParticipantAInput[] | ConnectionUncheckedCreateWithoutParticipantAInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantAInput | ConnectionCreateOrConnectWithoutParticipantAInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutParticipantAInput | ConnectionUpsertWithWhereUniqueWithoutParticipantAInput[]
    createMany?: ConnectionCreateManyParticipantAInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutParticipantAInput | ConnectionUpdateWithWhereUniqueWithoutParticipantAInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutParticipantAInput | ConnectionUpdateManyWithWhereWithoutParticipantAInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput = {
    create?: XOR<ConnectionCreateWithoutParticipantBInput, ConnectionUncheckedCreateWithoutParticipantBInput> | ConnectionCreateWithoutParticipantBInput[] | ConnectionUncheckedCreateWithoutParticipantBInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutParticipantBInput | ConnectionCreateOrConnectWithoutParticipantBInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutParticipantBInput | ConnectionUpsertWithWhereUniqueWithoutParticipantBInput[]
    createMany?: ConnectionCreateManyParticipantBInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutParticipantBInput | ConnectionUpdateWithWhereUniqueWithoutParticipantBInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutParticipantBInput | ConnectionUpdateManyWithWhereWithoutParticipantBInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<IncomingConnectionCreateWithoutSenderInput, IncomingConnectionUncheckedCreateWithoutSenderInput> | IncomingConnectionCreateWithoutSenderInput[] | IncomingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutSenderInput | IncomingConnectionCreateOrConnectWithoutSenderInput[]
    upsert?: IncomingConnectionUpsertWithWhereUniqueWithoutSenderInput | IncomingConnectionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: IncomingConnectionCreateManySenderInputEnvelope
    set?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    disconnect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    delete?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    update?: IncomingConnectionUpdateWithWhereUniqueWithoutSenderInput | IncomingConnectionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: IncomingConnectionUpdateManyWithWhereWithoutSenderInput | IncomingConnectionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: IncomingConnectionScalarWhereInput | IncomingConnectionScalarWhereInput[]
  }

  export type IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<IncomingConnectionCreateWithoutReceiverInput, IncomingConnectionUncheckedCreateWithoutReceiverInput> | IncomingConnectionCreateWithoutReceiverInput[] | IncomingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: IncomingConnectionCreateOrConnectWithoutReceiverInput | IncomingConnectionCreateOrConnectWithoutReceiverInput[]
    upsert?: IncomingConnectionUpsertWithWhereUniqueWithoutReceiverInput | IncomingConnectionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: IncomingConnectionCreateManyReceiverInputEnvelope
    set?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    disconnect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    delete?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    connect?: IncomingConnectionWhereUniqueInput | IncomingConnectionWhereUniqueInput[]
    update?: IncomingConnectionUpdateWithWhereUniqueWithoutReceiverInput | IncomingConnectionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: IncomingConnectionUpdateManyWithWhereWithoutReceiverInput | IncomingConnectionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: IncomingConnectionScalarWhereInput | IncomingConnectionScalarWhereInput[]
  }

  export type OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<OutgoingConnectionCreateWithoutReceiverInput, OutgoingConnectionUncheckedCreateWithoutReceiverInput> | OutgoingConnectionCreateWithoutReceiverInput[] | OutgoingConnectionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutReceiverInput | OutgoingConnectionCreateOrConnectWithoutReceiverInput[]
    upsert?: OutgoingConnectionUpsertWithWhereUniqueWithoutReceiverInput | OutgoingConnectionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: OutgoingConnectionCreateManyReceiverInputEnvelope
    set?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    disconnect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    delete?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    update?: OutgoingConnectionUpdateWithWhereUniqueWithoutReceiverInput | OutgoingConnectionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: OutgoingConnectionUpdateManyWithWhereWithoutReceiverInput | OutgoingConnectionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: OutgoingConnectionScalarWhereInput | OutgoingConnectionScalarWhereInput[]
  }

  export type OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<OutgoingConnectionCreateWithoutSenderInput, OutgoingConnectionUncheckedCreateWithoutSenderInput> | OutgoingConnectionCreateWithoutSenderInput[] | OutgoingConnectionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OutgoingConnectionCreateOrConnectWithoutSenderInput | OutgoingConnectionCreateOrConnectWithoutSenderInput[]
    upsert?: OutgoingConnectionUpsertWithWhereUniqueWithoutSenderInput | OutgoingConnectionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: OutgoingConnectionCreateManySenderInputEnvelope
    set?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    disconnect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    delete?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    connect?: OutgoingConnectionWhereUniqueInput | OutgoingConnectionWhereUniqueInput[]
    update?: OutgoingConnectionUpdateWithWhereUniqueWithoutSenderInput | OutgoingConnectionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: OutgoingConnectionUpdateManyWithWhereWithoutSenderInput | OutgoingConnectionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: OutgoingConnectionScalarWhereInput | OutgoingConnectionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ShowcaseUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ShowcaseCreateWithoutUserInput, ShowcaseUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShowcaseCreateOrConnectWithoutUserInput
    upsert?: ShowcaseUpsertWithoutUserInput
    disconnect?: ShowcaseWhereInput | boolean
    delete?: ShowcaseWhereInput | boolean
    connect?: ShowcaseWhereUniqueInput
    update?: XOR<XOR<ShowcaseUpdateToOneWithWhereWithoutUserInput, ShowcaseUpdateWithoutUserInput>, ShowcaseUncheckedUpdateWithoutUserInput>
  }

  export type TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TechnicalProfileCreateWithoutUserInput, TechnicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicalProfileCreateOrConnectWithoutUserInput
    upsert?: TechnicalProfileUpsertWithoutUserInput
    disconnect?: TechnicalProfileWhereInput | boolean
    delete?: TechnicalProfileWhereInput | boolean
    connect?: TechnicalProfileWhereUniqueInput
    update?: XOR<XOR<TechnicalProfileUpdateToOneWithWhereWithoutUserInput, TechnicalProfileUpdateWithoutUserInput>, TechnicalProfileUncheckedUpdateWithoutUserInput>
  }

  export type VisualsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VisualsCreateWithoutUserInput, VisualsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VisualsCreateOrConnectWithoutUserInput
    upsert?: VisualsUpsertWithoutUserInput
    disconnect?: VisualsWhereInput | boolean
    delete?: VisualsWhereInput | boolean
    connect?: VisualsWhereUniqueInput
    update?: XOR<XOR<VisualsUpdateToOneWithWhereWithoutUserInput, VisualsUpdateWithoutUserInput>, VisualsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutBasicInfoInput = {
    create?: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasicInfoInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBasicInfoNestedInput = {
    create?: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutBasicInfoInput
    upsert?: UserUpsertWithoutBasicInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBasicInfoInput, UserUpdateWithoutBasicInfoInput>, UserUncheckedUpdateWithoutBasicInfoInput>
  }

  export type TechnicalProfileCreateskillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTechnicalProfileInput = {
    create?: XOR<UserCreateWithoutTechnicalProfileInput, UserUncheckedCreateWithoutTechnicalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechnicalProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TechnicalProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTechnicalProfileNestedInput = {
    create?: XOR<UserCreateWithoutTechnicalProfileInput, UserUncheckedCreateWithoutTechnicalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechnicalProfileInput
    upsert?: UserUpsertWithoutTechnicalProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTechnicalProfileInput, UserUpdateWithoutTechnicalProfileInput>, UserUncheckedUpdateWithoutTechnicalProfileInput>
  }

  export type UserCreateNestedOneWithoutBioSummaryInput = {
    create?: XOR<UserCreateWithoutBioSummaryInput, UserUncheckedCreateWithoutBioSummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBioSummaryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBioSummaryNestedInput = {
    create?: XOR<UserCreateWithoutBioSummaryInput, UserUncheckedCreateWithoutBioSummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBioSummaryInput
    upsert?: UserUpsertWithoutBioSummaryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBioSummaryInput, UserUpdateWithoutBioSummaryInput>, UserUncheckedUpdateWithoutBioSummaryInput>
  }

  export type UserCreateNestedOneWithoutShowcaseInput = {
    create?: XOR<UserCreateWithoutShowcaseInput, UserUncheckedCreateWithoutShowcaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutShowcaseInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShowcaseNestedInput = {
    create?: XOR<UserCreateWithoutShowcaseInput, UserUncheckedCreateWithoutShowcaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutShowcaseInput
    upsert?: UserUpsertWithoutShowcaseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShowcaseInput, UserUpdateWithoutShowcaseInput>, UserUncheckedUpdateWithoutShowcaseInput>
  }

  export type ProjectCreatetechUsedInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdatetechUsedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserCreateNestedOneWithoutCollaborationInput = {
    create?: XOR<UserCreateWithoutCollaborationInput, UserUncheckedCreateWithoutCollaborationInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutCollaborationNestedInput = {
    create?: XOR<UserCreateWithoutCollaborationInput, UserUncheckedCreateWithoutCollaborationInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationInput
    upsert?: UserUpsertWithoutCollaborationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaborationInput, UserUpdateWithoutCollaborationInput>, UserUncheckedUpdateWithoutCollaborationInput>
  }

  export type UserCreateNestedOneWithoutVisualsInput = {
    create?: XOR<UserCreateWithoutVisualsInput, UserUncheckedCreateWithoutVisualsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisualsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVisualsNestedInput = {
    create?: XOR<UserCreateWithoutVisualsInput, UserUncheckedCreateWithoutVisualsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisualsInput
    upsert?: UserUpsertWithoutVisualsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisualsInput, UserUpdateWithoutVisualsInput>, UserUncheckedUpdateWithoutVisualsInput>
  }

  export type InterestedListCreateNestedManyWithoutPostInput = {
    create?: XOR<InterestedListCreateWithoutPostInput, InterestedListUncheckedCreateWithoutPostInput> | InterestedListCreateWithoutPostInput[] | InterestedListUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InterestedListCreateOrConnectWithoutPostInput | InterestedListCreateOrConnectWithoutPostInput[]
    createMany?: InterestedListCreateManyPostInputEnvelope
    connect?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type InterestedListUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<InterestedListCreateWithoutPostInput, InterestedListUncheckedCreateWithoutPostInput> | InterestedListCreateWithoutPostInput[] | InterestedListUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InterestedListCreateOrConnectWithoutPostInput | InterestedListCreateOrConnectWithoutPostInput[]
    createMany?: InterestedListCreateManyPostInputEnvelope
    connect?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostType
  }

  export type InterestedListUpdateManyWithoutPostNestedInput = {
    create?: XOR<InterestedListCreateWithoutPostInput, InterestedListUncheckedCreateWithoutPostInput> | InterestedListCreateWithoutPostInput[] | InterestedListUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InterestedListCreateOrConnectWithoutPostInput | InterestedListCreateOrConnectWithoutPostInput[]
    upsert?: InterestedListUpsertWithWhereUniqueWithoutPostInput | InterestedListUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: InterestedListCreateManyPostInputEnvelope
    set?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    disconnect?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    delete?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    connect?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    update?: InterestedListUpdateWithWhereUniqueWithoutPostInput | InterestedListUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: InterestedListUpdateManyWithWhereWithoutPostInput | InterestedListUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: InterestedListScalarWhereInput | InterestedListScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type InterestedListUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<InterestedListCreateWithoutPostInput, InterestedListUncheckedCreateWithoutPostInput> | InterestedListCreateWithoutPostInput[] | InterestedListUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InterestedListCreateOrConnectWithoutPostInput | InterestedListCreateOrConnectWithoutPostInput[]
    upsert?: InterestedListUpsertWithWhereUniqueWithoutPostInput | InterestedListUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: InterestedListCreateManyPostInputEnvelope
    set?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    disconnect?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    delete?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    connect?: InterestedListWhereUniqueInput | InterestedListWhereUniqueInput[]
    update?: InterestedListUpdateWithWhereUniqueWithoutPostInput | InterestedListUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: InterestedListUpdateManyWithWhereWithoutPostInput | InterestedListUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: InterestedListScalarWhereInput | InterestedListScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutInterestedInput = {
    create?: XOR<PostCreateWithoutInterestedInput, PostUncheckedCreateWithoutInterestedInput>
    connectOrCreate?: PostCreateOrConnectWithoutInterestedInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutInterestedNestedInput = {
    create?: XOR<PostCreateWithoutInterestedInput, PostUncheckedCreateWithoutInterestedInput>
    connectOrCreate?: PostCreateOrConnectWithoutInterestedInput
    upsert?: PostUpsertWithoutInterestedInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutInterestedInput, PostUpdateWithoutInterestedInput>, PostUncheckedUpdateWithoutInterestedInput>
  }

  export type UserCreateNestedOneWithoutIncomingConnectionsInput = {
    create?: XOR<UserCreateWithoutIncomingConnectionsInput, UserUncheckedCreateWithoutIncomingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomingConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentIncomingConnectionsInput = {
    create?: XOR<UserCreateWithoutSentIncomingConnectionsInput, UserUncheckedCreateWithoutSentIncomingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentIncomingConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIncomingConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutIncomingConnectionsInput, UserUncheckedCreateWithoutIncomingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomingConnectionsInput
    upsert?: UserUpsertWithoutIncomingConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncomingConnectionsInput, UserUpdateWithoutIncomingConnectionsInput>, UserUncheckedUpdateWithoutIncomingConnectionsInput>
  }

  export type UserUpdateOneRequiredWithoutSentIncomingConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutSentIncomingConnectionsInput, UserUncheckedCreateWithoutSentIncomingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentIncomingConnectionsInput
    upsert?: UserUpsertWithoutSentIncomingConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentIncomingConnectionsInput, UserUpdateWithoutSentIncomingConnectionsInput>, UserUncheckedUpdateWithoutSentIncomingConnectionsInput>
  }

  export type UserCreateNestedOneWithoutOutgoingConnectionsInput = {
    create?: XOR<UserCreateWithoutOutgoingConnectionsInput, UserUncheckedCreateWithoutOutgoingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutgoingConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiveoutgoingConnectionsInput = {
    create?: XOR<UserCreateWithoutReceiveoutgoingConnectionsInput, UserUncheckedCreateWithoutReceiveoutgoingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiveoutgoingConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOutgoingConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutOutgoingConnectionsInput, UserUncheckedCreateWithoutOutgoingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutgoingConnectionsInput
    upsert?: UserUpsertWithoutOutgoingConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutgoingConnectionsInput, UserUpdateWithoutOutgoingConnectionsInput>, UserUncheckedUpdateWithoutOutgoingConnectionsInput>
  }

  export type UserUpdateOneRequiredWithoutReceiveoutgoingConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutReceiveoutgoingConnectionsInput, UserUncheckedCreateWithoutReceiveoutgoingConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiveoutgoingConnectionsInput
    upsert?: UserUpsertWithoutReceiveoutgoingConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiveoutgoingConnectionsInput, UserUpdateWithoutReceiveoutgoingConnectionsInput>, UserUncheckedUpdateWithoutReceiveoutgoingConnectionsInput>
  }

  export type UserCreateNestedOneWithoutParticipantAInput = {
    create?: XOR<UserCreateWithoutParticipantAInput, UserUncheckedCreateWithoutParticipantAInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantAInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipantBInput = {
    create?: XOR<UserCreateWithoutParticipantBInput, UserUncheckedCreateWithoutParticipantBInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantBInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutParticipantANestedInput = {
    create?: XOR<UserCreateWithoutParticipantAInput, UserUncheckedCreateWithoutParticipantAInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantAInput
    upsert?: UserUpsertWithoutParticipantAInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantAInput, UserUpdateWithoutParticipantAInput>, UserUncheckedUpdateWithoutParticipantAInput>
  }

  export type UserUpdateOneRequiredWithoutParticipantBNestedInput = {
    create?: XOR<UserCreateWithoutParticipantBInput, UserUncheckedCreateWithoutParticipantBInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantBInput
    upsert?: UserUpsertWithoutParticipantBInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantBInput, UserUpdateWithoutParticipantBInput>, UserUncheckedUpdateWithoutParticipantBInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type NestedEnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type BasicInfoCreateWithoutUserInput = {
    fullName: string
    Institute?: string | null
    major?: string | null
    location?: string | null
  }

  export type BasicInfoUncheckedCreateWithoutUserInput = {
    id?: number
    fullName: string
    Institute?: string | null
    major?: string | null
    location?: string | null
  }

  export type BasicInfoCreateOrConnectWithoutUserInput = {
    where: BasicInfoWhereUniqueInput
    create: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
  }

  export type BioSummaryCreateWithoutUserInput = {
    shortBio?: string | null
    tagline?: string | null
  }

  export type BioSummaryUncheckedCreateWithoutUserInput = {
    id?: number
    shortBio?: string | null
    tagline?: string | null
  }

  export type BioSummaryCreateOrConnectWithoutUserInput = {
    where: BioSummaryWhereUniqueInput
    create: XOR<BioSummaryCreateWithoutUserInput, BioSummaryUncheckedCreateWithoutUserInput>
  }

  export type CollaborationCreateWithoutUserInput = {
    openToCollaboration?: boolean | null
    ideaInterests?: string | null
  }

  export type CollaborationUncheckedCreateWithoutUserInput = {
    id?: number
    openToCollaboration?: boolean | null
    ideaInterests?: string | null
  }

  export type CollaborationCreateOrConnectWithoutUserInput = {
    where: CollaborationWhereUniqueInput
    create: XOR<CollaborationCreateWithoutUserInput, CollaborationUncheckedCreateWithoutUserInput>
  }

  export type ConnectionCreateWithoutParticipantAInput = {
    connectedAt?: Date | string
    participantB: UserCreateNestedOneWithoutParticipantBInput
  }

  export type ConnectionUncheckedCreateWithoutParticipantAInput = {
    id?: number
    participantBId: number
    connectedAt?: Date | string
  }

  export type ConnectionCreateOrConnectWithoutParticipantAInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutParticipantAInput, ConnectionUncheckedCreateWithoutParticipantAInput>
  }

  export type ConnectionCreateManyParticipantAInputEnvelope = {
    data: ConnectionCreateManyParticipantAInput | ConnectionCreateManyParticipantAInput[]
    skipDuplicates?: boolean
  }

  export type ConnectionCreateWithoutParticipantBInput = {
    connectedAt?: Date | string
    participantA: UserCreateNestedOneWithoutParticipantAInput
  }

  export type ConnectionUncheckedCreateWithoutParticipantBInput = {
    id?: number
    participantAId: number
    connectedAt?: Date | string
  }

  export type ConnectionCreateOrConnectWithoutParticipantBInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutParticipantBInput, ConnectionUncheckedCreateWithoutParticipantBInput>
  }

  export type ConnectionCreateManyParticipantBInputEnvelope = {
    data: ConnectionCreateManyParticipantBInput | ConnectionCreateManyParticipantBInput[]
    skipDuplicates?: boolean
  }

  export type IncomingConnectionCreateWithoutSenderInput = {
    requestedAt?: Date | string
    receiver: UserCreateNestedOneWithoutIncomingConnectionsInput
  }

  export type IncomingConnectionUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    requestedAt?: Date | string
  }

  export type IncomingConnectionCreateOrConnectWithoutSenderInput = {
    where: IncomingConnectionWhereUniqueInput
    create: XOR<IncomingConnectionCreateWithoutSenderInput, IncomingConnectionUncheckedCreateWithoutSenderInput>
  }

  export type IncomingConnectionCreateManySenderInputEnvelope = {
    data: IncomingConnectionCreateManySenderInput | IncomingConnectionCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type IncomingConnectionCreateWithoutReceiverInput = {
    requestedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentIncomingConnectionsInput
  }

  export type IncomingConnectionUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    requestedAt?: Date | string
  }

  export type IncomingConnectionCreateOrConnectWithoutReceiverInput = {
    where: IncomingConnectionWhereUniqueInput
    create: XOR<IncomingConnectionCreateWithoutReceiverInput, IncomingConnectionUncheckedCreateWithoutReceiverInput>
  }

  export type IncomingConnectionCreateManyReceiverInputEnvelope = {
    data: IncomingConnectionCreateManyReceiverInput | IncomingConnectionCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type OutgoingConnectionCreateWithoutReceiverInput = {
    requestedAt?: Date | string
    sender: UserCreateNestedOneWithoutReceiveoutgoingConnectionsInput
  }

  export type OutgoingConnectionUncheckedCreateWithoutReceiverInput = {
    id?: number
    receiverId: number
    requestedAt?: Date | string
  }

  export type OutgoingConnectionCreateOrConnectWithoutReceiverInput = {
    where: OutgoingConnectionWhereUniqueInput
    create: XOR<OutgoingConnectionCreateWithoutReceiverInput, OutgoingConnectionUncheckedCreateWithoutReceiverInput>
  }

  export type OutgoingConnectionCreateManyReceiverInputEnvelope = {
    data: OutgoingConnectionCreateManyReceiverInput | OutgoingConnectionCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type OutgoingConnectionCreateWithoutSenderInput = {
    requestedAt?: Date | string
    receiver: UserCreateNestedOneWithoutOutgoingConnectionsInput
  }

  export type OutgoingConnectionUncheckedCreateWithoutSenderInput = {
    id?: number
    senderId: number
    requestedAt?: Date | string
  }

  export type OutgoingConnectionCreateOrConnectWithoutSenderInput = {
    where: OutgoingConnectionWhereUniqueInput
    create: XOR<OutgoingConnectionCreateWithoutSenderInput, OutgoingConnectionUncheckedCreateWithoutSenderInput>
  }

  export type OutgoingConnectionCreateManySenderInputEnvelope = {
    data: OutgoingConnectionCreateManySenderInput | OutgoingConnectionCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
    interested?: InterestedListCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
    interested?: InterestedListUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    name: string
    description?: string | null
    techUsed?: ProjectCreatetechUsedInput | string[]
    status?: $Enums.ProjectStatus
    link?: string | null
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    techUsed?: ProjectCreatetechUsedInput | string[]
    status?: $Enums.ProjectStatus
    link?: string | null
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShowcaseCreateWithoutUserInput = {
    github?: string | null
    portfolio?: string | null
    linkedin?: string | null
    email?: string | null
    whatsapp?: string | null
  }

  export type ShowcaseUncheckedCreateWithoutUserInput = {
    id?: number
    github?: string | null
    portfolio?: string | null
    linkedin?: string | null
    email?: string | null
    whatsapp?: string | null
  }

  export type ShowcaseCreateOrConnectWithoutUserInput = {
    where: ShowcaseWhereUniqueInput
    create: XOR<ShowcaseCreateWithoutUserInput, ShowcaseUncheckedCreateWithoutUserInput>
  }

  export type TechnicalProfileCreateWithoutUserInput = {
    skills?: TechnicalProfileCreateskillsInput | string[]
    experienceLevel?: string | null
  }

  export type TechnicalProfileUncheckedCreateWithoutUserInput = {
    id?: number
    skills?: TechnicalProfileCreateskillsInput | string[]
    experienceLevel?: string | null
  }

  export type TechnicalProfileCreateOrConnectWithoutUserInput = {
    where: TechnicalProfileWhereUniqueInput
    create: XOR<TechnicalProfileCreateWithoutUserInput, TechnicalProfileUncheckedCreateWithoutUserInput>
  }

  export type VisualsCreateWithoutUserInput = {
    profilePicture?: string | null
    coverImage?: string | null
  }

  export type VisualsUncheckedCreateWithoutUserInput = {
    id?: number
    profilePicture?: string | null
    coverImage?: string | null
  }

  export type VisualsCreateOrConnectWithoutUserInput = {
    where: VisualsWhereUniqueInput
    create: XOR<VisualsCreateWithoutUserInput, VisualsUncheckedCreateWithoutUserInput>
  }

  export type BasicInfoUpsertWithoutUserInput = {
    update: XOR<BasicInfoUpdateWithoutUserInput, BasicInfoUncheckedUpdateWithoutUserInput>
    create: XOR<BasicInfoCreateWithoutUserInput, BasicInfoUncheckedCreateWithoutUserInput>
    where?: BasicInfoWhereInput
  }

  export type BasicInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: BasicInfoWhereInput
    data: XOR<BasicInfoUpdateWithoutUserInput, BasicInfoUncheckedUpdateWithoutUserInput>
  }

  export type BasicInfoUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    Institute?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BasicInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    Institute?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioSummaryUpsertWithoutUserInput = {
    update: XOR<BioSummaryUpdateWithoutUserInput, BioSummaryUncheckedUpdateWithoutUserInput>
    create: XOR<BioSummaryCreateWithoutUserInput, BioSummaryUncheckedCreateWithoutUserInput>
    where?: BioSummaryWhereInput
  }

  export type BioSummaryUpdateToOneWithWhereWithoutUserInput = {
    where?: BioSummaryWhereInput
    data: XOR<BioSummaryUpdateWithoutUserInput, BioSummaryUncheckedUpdateWithoutUserInput>
  }

  export type BioSummaryUpdateWithoutUserInput = {
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioSummaryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationUpsertWithoutUserInput = {
    update: XOR<CollaborationUpdateWithoutUserInput, CollaborationUncheckedUpdateWithoutUserInput>
    create: XOR<CollaborationCreateWithoutUserInput, CollaborationUncheckedCreateWithoutUserInput>
    where?: CollaborationWhereInput
  }

  export type CollaborationUpdateToOneWithWhereWithoutUserInput = {
    where?: CollaborationWhereInput
    data: XOR<CollaborationUpdateWithoutUserInput, CollaborationUncheckedUpdateWithoutUserInput>
  }

  export type CollaborationUpdateWithoutUserInput = {
    openToCollaboration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ideaInterests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    openToCollaboration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ideaInterests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionUpsertWithWhereUniqueWithoutParticipantAInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutParticipantAInput, ConnectionUncheckedUpdateWithoutParticipantAInput>
    create: XOR<ConnectionCreateWithoutParticipantAInput, ConnectionUncheckedCreateWithoutParticipantAInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutParticipantAInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutParticipantAInput, ConnectionUncheckedUpdateWithoutParticipantAInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutParticipantAInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutParticipantAInput>
  }

  export type ConnectionScalarWhereInput = {
    AND?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    OR?: ConnectionScalarWhereInput[]
    NOT?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    id?: IntFilter<"Connection"> | number
    participantAId?: IntFilter<"Connection"> | number
    participantBId?: IntFilter<"Connection"> | number
    connectedAt?: DateTimeFilter<"Connection"> | Date | string
  }

  export type ConnectionUpsertWithWhereUniqueWithoutParticipantBInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutParticipantBInput, ConnectionUncheckedUpdateWithoutParticipantBInput>
    create: XOR<ConnectionCreateWithoutParticipantBInput, ConnectionUncheckedCreateWithoutParticipantBInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutParticipantBInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutParticipantBInput, ConnectionUncheckedUpdateWithoutParticipantBInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutParticipantBInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutParticipantBInput>
  }

  export type IncomingConnectionUpsertWithWhereUniqueWithoutSenderInput = {
    where: IncomingConnectionWhereUniqueInput
    update: XOR<IncomingConnectionUpdateWithoutSenderInput, IncomingConnectionUncheckedUpdateWithoutSenderInput>
    create: XOR<IncomingConnectionCreateWithoutSenderInput, IncomingConnectionUncheckedCreateWithoutSenderInput>
  }

  export type IncomingConnectionUpdateWithWhereUniqueWithoutSenderInput = {
    where: IncomingConnectionWhereUniqueInput
    data: XOR<IncomingConnectionUpdateWithoutSenderInput, IncomingConnectionUncheckedUpdateWithoutSenderInput>
  }

  export type IncomingConnectionUpdateManyWithWhereWithoutSenderInput = {
    where: IncomingConnectionScalarWhereInput
    data: XOR<IncomingConnectionUpdateManyMutationInput, IncomingConnectionUncheckedUpdateManyWithoutSenderInput>
  }

  export type IncomingConnectionScalarWhereInput = {
    AND?: IncomingConnectionScalarWhereInput | IncomingConnectionScalarWhereInput[]
    OR?: IncomingConnectionScalarWhereInput[]
    NOT?: IncomingConnectionScalarWhereInput | IncomingConnectionScalarWhereInput[]
    id?: IntFilter<"IncomingConnection"> | number
    senderId?: IntFilter<"IncomingConnection"> | number
    receiverId?: IntFilter<"IncomingConnection"> | number
    requestedAt?: DateTimeFilter<"IncomingConnection"> | Date | string
  }

  export type IncomingConnectionUpsertWithWhereUniqueWithoutReceiverInput = {
    where: IncomingConnectionWhereUniqueInput
    update: XOR<IncomingConnectionUpdateWithoutReceiverInput, IncomingConnectionUncheckedUpdateWithoutReceiverInput>
    create: XOR<IncomingConnectionCreateWithoutReceiverInput, IncomingConnectionUncheckedCreateWithoutReceiverInput>
  }

  export type IncomingConnectionUpdateWithWhereUniqueWithoutReceiverInput = {
    where: IncomingConnectionWhereUniqueInput
    data: XOR<IncomingConnectionUpdateWithoutReceiverInput, IncomingConnectionUncheckedUpdateWithoutReceiverInput>
  }

  export type IncomingConnectionUpdateManyWithWhereWithoutReceiverInput = {
    where: IncomingConnectionScalarWhereInput
    data: XOR<IncomingConnectionUpdateManyMutationInput, IncomingConnectionUncheckedUpdateManyWithoutReceiverInput>
  }

  export type OutgoingConnectionUpsertWithWhereUniqueWithoutReceiverInput = {
    where: OutgoingConnectionWhereUniqueInput
    update: XOR<OutgoingConnectionUpdateWithoutReceiverInput, OutgoingConnectionUncheckedUpdateWithoutReceiverInput>
    create: XOR<OutgoingConnectionCreateWithoutReceiverInput, OutgoingConnectionUncheckedCreateWithoutReceiverInput>
  }

  export type OutgoingConnectionUpdateWithWhereUniqueWithoutReceiverInput = {
    where: OutgoingConnectionWhereUniqueInput
    data: XOR<OutgoingConnectionUpdateWithoutReceiverInput, OutgoingConnectionUncheckedUpdateWithoutReceiverInput>
  }

  export type OutgoingConnectionUpdateManyWithWhereWithoutReceiverInput = {
    where: OutgoingConnectionScalarWhereInput
    data: XOR<OutgoingConnectionUpdateManyMutationInput, OutgoingConnectionUncheckedUpdateManyWithoutReceiverInput>
  }

  export type OutgoingConnectionScalarWhereInput = {
    AND?: OutgoingConnectionScalarWhereInput | OutgoingConnectionScalarWhereInput[]
    OR?: OutgoingConnectionScalarWhereInput[]
    NOT?: OutgoingConnectionScalarWhereInput | OutgoingConnectionScalarWhereInput[]
    id?: IntFilter<"OutgoingConnection"> | number
    receiverId?: IntFilter<"OutgoingConnection"> | number
    senderId?: IntFilter<"OutgoingConnection"> | number
    requestedAt?: DateTimeFilter<"OutgoingConnection"> | Date | string
  }

  export type OutgoingConnectionUpsertWithWhereUniqueWithoutSenderInput = {
    where: OutgoingConnectionWhereUniqueInput
    update: XOR<OutgoingConnectionUpdateWithoutSenderInput, OutgoingConnectionUncheckedUpdateWithoutSenderInput>
    create: XOR<OutgoingConnectionCreateWithoutSenderInput, OutgoingConnectionUncheckedCreateWithoutSenderInput>
  }

  export type OutgoingConnectionUpdateWithWhereUniqueWithoutSenderInput = {
    where: OutgoingConnectionWhereUniqueInput
    data: XOR<OutgoingConnectionUpdateWithoutSenderInput, OutgoingConnectionUncheckedUpdateWithoutSenderInput>
  }

  export type OutgoingConnectionUpdateManyWithWhereWithoutSenderInput = {
    where: OutgoingConnectionScalarWhereInput
    data: XOR<OutgoingConnectionUpdateManyMutationInput, OutgoingConnectionUncheckedUpdateManyWithoutSenderInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    description?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    userId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    techUsed?: StringNullableListFilter<"Project">
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    link?: StringNullableFilter<"Project"> | string | null
  }

  export type ShowcaseUpsertWithoutUserInput = {
    update: XOR<ShowcaseUpdateWithoutUserInput, ShowcaseUncheckedUpdateWithoutUserInput>
    create: XOR<ShowcaseCreateWithoutUserInput, ShowcaseUncheckedCreateWithoutUserInput>
    where?: ShowcaseWhereInput
  }

  export type ShowcaseUpdateToOneWithWhereWithoutUserInput = {
    where?: ShowcaseWhereInput
    data: XOR<ShowcaseUpdateWithoutUserInput, ShowcaseUncheckedUpdateWithoutUserInput>
  }

  export type ShowcaseUpdateWithoutUserInput = {
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowcaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalProfileUpsertWithoutUserInput = {
    update: XOR<TechnicalProfileUpdateWithoutUserInput, TechnicalProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TechnicalProfileCreateWithoutUserInput, TechnicalProfileUncheckedCreateWithoutUserInput>
    where?: TechnicalProfileWhereInput
  }

  export type TechnicalProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TechnicalProfileWhereInput
    data: XOR<TechnicalProfileUpdateWithoutUserInput, TechnicalProfileUncheckedUpdateWithoutUserInput>
  }

  export type TechnicalProfileUpdateWithoutUserInput = {
    skills?: TechnicalProfileUpdateskillsInput | string[]
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    skills?: TechnicalProfileUpdateskillsInput | string[]
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualsUpsertWithoutUserInput = {
    update: XOR<VisualsUpdateWithoutUserInput, VisualsUncheckedUpdateWithoutUserInput>
    create: XOR<VisualsCreateWithoutUserInput, VisualsUncheckedCreateWithoutUserInput>
    where?: VisualsWhereInput
  }

  export type VisualsUpdateToOneWithWhereWithoutUserInput = {
    where?: VisualsWhereInput
    data: XOR<VisualsUpdateWithoutUserInput, VisualsUncheckedUpdateWithoutUserInput>
  }

  export type VisualsUpdateWithoutUserInput = {
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisualsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutBasicInfoInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBasicInfoInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBasicInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
  }

  export type UserUpsertWithoutBasicInfoInput = {
    update: XOR<UserUpdateWithoutBasicInfoInput, UserUncheckedUpdateWithoutBasicInfoInput>
    create: XOR<UserCreateWithoutBasicInfoInput, UserUncheckedCreateWithoutBasicInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBasicInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBasicInfoInput, UserUncheckedUpdateWithoutBasicInfoInput>
  }

  export type UserUpdateWithoutBasicInfoInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBasicInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTechnicalProfileInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTechnicalProfileInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTechnicalProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTechnicalProfileInput, UserUncheckedCreateWithoutTechnicalProfileInput>
  }

  export type UserUpsertWithoutTechnicalProfileInput = {
    update: XOR<UserUpdateWithoutTechnicalProfileInput, UserUncheckedUpdateWithoutTechnicalProfileInput>
    create: XOR<UserCreateWithoutTechnicalProfileInput, UserUncheckedCreateWithoutTechnicalProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTechnicalProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTechnicalProfileInput, UserUncheckedUpdateWithoutTechnicalProfileInput>
  }

  export type UserUpdateWithoutTechnicalProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTechnicalProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutBioSummaryInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBioSummaryInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBioSummaryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBioSummaryInput, UserUncheckedCreateWithoutBioSummaryInput>
  }

  export type UserUpsertWithoutBioSummaryInput = {
    update: XOR<UserUpdateWithoutBioSummaryInput, UserUncheckedUpdateWithoutBioSummaryInput>
    create: XOR<UserCreateWithoutBioSummaryInput, UserUncheckedCreateWithoutBioSummaryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBioSummaryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBioSummaryInput, UserUncheckedUpdateWithoutBioSummaryInput>
  }

  export type UserUpdateWithoutBioSummaryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBioSummaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutShowcaseInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShowcaseInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShowcaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShowcaseInput, UserUncheckedCreateWithoutShowcaseInput>
  }

  export type UserUpsertWithoutShowcaseInput = {
    update: XOR<UserUpdateWithoutShowcaseInput, UserUncheckedUpdateWithoutShowcaseInput>
    create: XOR<UserCreateWithoutShowcaseInput, UserUncheckedCreateWithoutShowcaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShowcaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShowcaseInput, UserUncheckedUpdateWithoutShowcaseInput>
  }

  export type UserUpdateWithoutShowcaseInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShowcaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCollaborationInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollaborationInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollaborationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaborationInput, UserUncheckedCreateWithoutCollaborationInput>
  }

  export type UserUpsertWithoutCollaborationInput = {
    update: XOR<UserUpdateWithoutCollaborationInput, UserUncheckedUpdateWithoutCollaborationInput>
    create: XOR<UserCreateWithoutCollaborationInput, UserUncheckedCreateWithoutCollaborationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaborationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaborationInput, UserUncheckedUpdateWithoutCollaborationInput>
  }

  export type UserUpdateWithoutCollaborationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaborationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutVisualsInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVisualsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVisualsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisualsInput, UserUncheckedCreateWithoutVisualsInput>
  }

  export type UserUpsertWithoutVisualsInput = {
    update: XOR<UserUpdateWithoutVisualsInput, UserUncheckedUpdateWithoutVisualsInput>
    create: XOR<UserCreateWithoutVisualsInput, UserUncheckedCreateWithoutVisualsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisualsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisualsInput, UserUncheckedUpdateWithoutVisualsInput>
  }

  export type UserUpdateWithoutVisualsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVisualsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InterestedListCreateWithoutPostInput = {

  }

  export type InterestedListUncheckedCreateWithoutPostInput = {
    id?: number
  }

  export type InterestedListCreateOrConnectWithoutPostInput = {
    where: InterestedListWhereUniqueInput
    create: XOR<InterestedListCreateWithoutPostInput, InterestedListUncheckedCreateWithoutPostInput>
  }

  export type InterestedListCreateManyPostInputEnvelope = {
    data: InterestedListCreateManyPostInput | InterestedListCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type InterestedListUpsertWithWhereUniqueWithoutPostInput = {
    where: InterestedListWhereUniqueInput
    update: XOR<InterestedListUpdateWithoutPostInput, InterestedListUncheckedUpdateWithoutPostInput>
    create: XOR<InterestedListCreateWithoutPostInput, InterestedListUncheckedCreateWithoutPostInput>
  }

  export type InterestedListUpdateWithWhereUniqueWithoutPostInput = {
    where: InterestedListWhereUniqueInput
    data: XOR<InterestedListUpdateWithoutPostInput, InterestedListUncheckedUpdateWithoutPostInput>
  }

  export type InterestedListUpdateManyWithWhereWithoutPostInput = {
    where: InterestedListScalarWhereInput
    data: XOR<InterestedListUpdateManyMutationInput, InterestedListUncheckedUpdateManyWithoutPostInput>
  }

  export type InterestedListScalarWhereInput = {
    AND?: InterestedListScalarWhereInput | InterestedListScalarWhereInput[]
    OR?: InterestedListScalarWhereInput[]
    NOT?: InterestedListScalarWhereInput | InterestedListScalarWhereInput[]
    id?: IntFilter<"InterestedList"> | number
    postId?: IntFilter<"InterestedList"> | number
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PostCreateWithoutInterestedInput = {
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutInterestedInput = {
    id?: number
    userId: number
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
  }

  export type PostCreateOrConnectWithoutInterestedInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutInterestedInput, PostUncheckedCreateWithoutInterestedInput>
  }

  export type PostUpsertWithoutInterestedInput = {
    update: XOR<PostUpdateWithoutInterestedInput, PostUncheckedUpdateWithoutInterestedInput>
    create: XOR<PostCreateWithoutInterestedInput, PostUncheckedCreateWithoutInterestedInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutInterestedInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutInterestedInput, PostUncheckedUpdateWithoutInterestedInput>
  }

  export type PostUpdateWithoutInterestedInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutInterestedInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutIncomingConnectionsInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncomingConnectionsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncomingConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncomingConnectionsInput, UserUncheckedCreateWithoutIncomingConnectionsInput>
  }

  export type UserCreateWithoutSentIncomingConnectionsInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentIncomingConnectionsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentIncomingConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentIncomingConnectionsInput, UserUncheckedCreateWithoutSentIncomingConnectionsInput>
  }

  export type UserUpsertWithoutIncomingConnectionsInput = {
    update: XOR<UserUpdateWithoutIncomingConnectionsInput, UserUncheckedUpdateWithoutIncomingConnectionsInput>
    create: XOR<UserCreateWithoutIncomingConnectionsInput, UserUncheckedCreateWithoutIncomingConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncomingConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncomingConnectionsInput, UserUncheckedUpdateWithoutIncomingConnectionsInput>
  }

  export type UserUpdateWithoutIncomingConnectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncomingConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutSentIncomingConnectionsInput = {
    update: XOR<UserUpdateWithoutSentIncomingConnectionsInput, UserUncheckedUpdateWithoutSentIncomingConnectionsInput>
    create: XOR<UserCreateWithoutSentIncomingConnectionsInput, UserUncheckedCreateWithoutSentIncomingConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentIncomingConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentIncomingConnectionsInput, UserUncheckedUpdateWithoutSentIncomingConnectionsInput>
  }

  export type UserUpdateWithoutSentIncomingConnectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentIncomingConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutOutgoingConnectionsInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOutgoingConnectionsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOutgoingConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutgoingConnectionsInput, UserUncheckedCreateWithoutOutgoingConnectionsInput>
  }

  export type UserCreateWithoutReceiveoutgoingConnectionsInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceiveoutgoingConnectionsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceiveoutgoingConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiveoutgoingConnectionsInput, UserUncheckedCreateWithoutReceiveoutgoingConnectionsInput>
  }

  export type UserUpsertWithoutOutgoingConnectionsInput = {
    update: XOR<UserUpdateWithoutOutgoingConnectionsInput, UserUncheckedUpdateWithoutOutgoingConnectionsInput>
    create: XOR<UserCreateWithoutOutgoingConnectionsInput, UserUncheckedCreateWithoutOutgoingConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutgoingConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutgoingConnectionsInput, UserUncheckedUpdateWithoutOutgoingConnectionsInput>
  }

  export type UserUpdateWithoutOutgoingConnectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOutgoingConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceiveoutgoingConnectionsInput = {
    update: XOR<UserUpdateWithoutReceiveoutgoingConnectionsInput, UserUncheckedUpdateWithoutReceiveoutgoingConnectionsInput>
    create: XOR<UserCreateWithoutReceiveoutgoingConnectionsInput, UserUncheckedCreateWithoutReceiveoutgoingConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiveoutgoingConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiveoutgoingConnectionsInput, UserUncheckedUpdateWithoutReceiveoutgoingConnectionsInput>
  }

  export type UserUpdateWithoutReceiveoutgoingConnectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiveoutgoingConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutParticipantAInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantB?: ConnectionCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantAInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantB?: ConnectionUncheckedCreateNestedManyWithoutParticipantBInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantAInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantAInput, UserUncheckedCreateWithoutParticipantAInput>
  }

  export type UserCreateWithoutParticipantBInput = {
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryCreateNestedOneWithoutUserInput
    collaboration?: CollaborationCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionCreateNestedManyWithoutParticipantAInput
    sentIncomingConnections?: IncomingConnectionCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionCreateNestedManyWithoutSenderInput
    posts?: PostCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    showcase?: ShowcaseCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileCreateNestedOneWithoutUserInput
    visuals?: VisualsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantBInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    isEmailVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    role?: $Enums.Role
    basicInfo?: BasicInfoUncheckedCreateNestedOneWithoutUserInput
    bioSummary?: BioSummaryUncheckedCreateNestedOneWithoutUserInput
    collaboration?: CollaborationUncheckedCreateNestedOneWithoutUserInput
    ParticipantA?: ConnectionUncheckedCreateNestedManyWithoutParticipantAInput
    sentIncomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutSenderInput
    incomingConnections?: IncomingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    outgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutReceiverInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedCreateNestedManyWithoutSenderInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    showcase?: ShowcaseUncheckedCreateNestedOneWithoutUserInput
    technicalProfile?: TechnicalProfileUncheckedCreateNestedOneWithoutUserInput
    visuals?: VisualsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantBInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantBInput, UserUncheckedCreateWithoutParticipantBInput>
  }

  export type UserUpsertWithoutParticipantAInput = {
    update: XOR<UserUpdateWithoutParticipantAInput, UserUncheckedUpdateWithoutParticipantAInput>
    create: XOR<UserCreateWithoutParticipantAInput, UserUncheckedCreateWithoutParticipantAInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantAInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantAInput, UserUncheckedUpdateWithoutParticipantAInput>
  }

  export type UserUpdateWithoutParticipantAInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantB?: ConnectionUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantAInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantB?: ConnectionUncheckedUpdateManyWithoutParticipantBNestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutParticipantBInput = {
    update: XOR<UserUpdateWithoutParticipantBInput, UserUncheckedUpdateWithoutParticipantBInput>
    create: XOR<UserCreateWithoutParticipantBInput, UserUncheckedCreateWithoutParticipantBInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantBInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantBInput, UserUncheckedUpdateWithoutParticipantBInput>
  }

  export type UserUpdateWithoutParticipantBInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUpdateManyWithoutParticipantANestedInput
    sentIncomingConnections?: IncomingConnectionUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUpdateManyWithoutSenderNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUpdateOneWithoutUserNestedInput
    visuals?: VisualsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantBInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    basicInfo?: BasicInfoUncheckedUpdateOneWithoutUserNestedInput
    bioSummary?: BioSummaryUncheckedUpdateOneWithoutUserNestedInput
    collaboration?: CollaborationUncheckedUpdateOneWithoutUserNestedInput
    ParticipantA?: ConnectionUncheckedUpdateManyWithoutParticipantANestedInput
    sentIncomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    incomingConnections?: IncomingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    outgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutReceiverNestedInput
    ReceiveoutgoingConnections?: OutgoingConnectionUncheckedUpdateManyWithoutSenderNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    showcase?: ShowcaseUncheckedUpdateOneWithoutUserNestedInput
    technicalProfile?: TechnicalProfileUncheckedUpdateOneWithoutUserNestedInput
    visuals?: VisualsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ConnectionCreateManyParticipantAInput = {
    id?: number
    participantBId: number
    connectedAt?: Date | string
  }

  export type ConnectionCreateManyParticipantBInput = {
    id?: number
    participantAId: number
    connectedAt?: Date | string
  }

  export type IncomingConnectionCreateManySenderInput = {
    id?: number
    receiverId: number
    requestedAt?: Date | string
  }

  export type IncomingConnectionCreateManyReceiverInput = {
    id?: number
    senderId: number
    requestedAt?: Date | string
  }

  export type OutgoingConnectionCreateManyReceiverInput = {
    id?: number
    receiverId: number
    requestedAt?: Date | string
  }

  export type OutgoingConnectionCreateManySenderInput = {
    id?: number
    senderId: number
    requestedAt?: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    type?: $Enums.PostType
    description?: string | null
    createdAt?: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    techUsed?: ProjectCreatetechUsedInput | string[]
    status?: $Enums.ProjectStatus
    link?: string | null
  }

  export type ConnectionUpdateWithoutParticipantAInput = {
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantB?: UserUpdateOneRequiredWithoutParticipantBNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutParticipantAInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantBId?: IntFieldUpdateOperationsInput | number
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyWithoutParticipantAInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantBId?: IntFieldUpdateOperationsInput | number
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUpdateWithoutParticipantBInput = {
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantA?: UserUpdateOneRequiredWithoutParticipantANestedInput
  }

  export type ConnectionUncheckedUpdateWithoutParticipantBInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantAId?: IntFieldUpdateOperationsInput | number
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyWithoutParticipantBInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantAId?: IntFieldUpdateOperationsInput | number
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingConnectionUpdateWithoutSenderInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutIncomingConnectionsNestedInput
  }

  export type IncomingConnectionUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingConnectionUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingConnectionUpdateWithoutReceiverInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentIncomingConnectionsNestedInput
  }

  export type IncomingConnectionUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingConnectionUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutgoingConnectionUpdateWithoutReceiverInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutReceiveoutgoingConnectionsNestedInput
  }

  export type OutgoingConnectionUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutgoingConnectionUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutgoingConnectionUpdateWithoutSenderInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutOutgoingConnectionsNestedInput
  }

  export type OutgoingConnectionUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutgoingConnectionUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interested?: InterestedListUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interested?: InterestedListUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    techUsed?: ProjectUpdatetechUsedInput | string[]
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    techUsed?: ProjectUpdatetechUsedInput | string[]
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    techUsed?: ProjectUpdatetechUsedInput | string[]
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterestedListCreateManyPostInput = {
    id?: number
  }

  export type InterestedListUpdateWithoutPostInput = {

  }

  export type InterestedListUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type InterestedListUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
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