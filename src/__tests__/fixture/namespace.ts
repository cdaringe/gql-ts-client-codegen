// AUTO-GENERATED as side-effect of testing
// tslint:disable
// graphql typescript definitions

export declare namespace Food {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /**
   * The root query type which gives access points into the data universe.
   */
  interface IQuery {
    __typename: 'Query';

    /**
     * Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form.
     */
    query: IQuery;

    /**
     * The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`.
     */
    nodeId: string;

    /**
     * Fetches an object given its globally unique `ID`.
     */
    node: Node | null;

    /**
     * Reads and enables pagination through a set of `Food`.
     */
    allFoods: IFoodsConnection | null;

    /**
     * Reads and enables pagination through a set of `FoodType`.
     */
    allFoodTypes: IFoodTypesConnection | null;
    foodById: IFood | null;
    foodTypeById: IFoodType | null;

    /**
     * Reads a single `Food` using its globally unique `ID`.
     */
    food: IFood | null;

    /**
     * Reads a single `FoodType` using its globally unique `ID`.
     */
    foodType: IFoodType | null;
  }

  interface INodeOnQueryArguments {
    /**
     * The globally unique `ID`.
     */
    nodeId: string;
  }

  interface IAllFoodsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Food`.
     * @default [{"alias":"primary_key_asc","specs":[["id",true]],"unique":true}]
     */
    orderBy?: Array<FoodsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IFoodCondition | null;
  }

  interface IAllFoodTypesOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `FoodType`.
     * @default [{"alias":"primary_key_asc","specs":[["id",true]],"unique":true}]
     */
    orderBy?: Array<FoodTypesOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IFoodTypeCondition | null;
  }

  interface IFoodByIdOnQueryArguments {
    id: number;
  }

  interface IFoodTypeByIdOnQueryArguments {
    id: number;
  }

  interface IFoodOnQueryArguments {
    /**
     * The globally unique `ID` to be used in selecting a single `Food`.
     */
    nodeId: string;
  }

  interface IFoodTypeOnQueryArguments {
    /**
     * The globally unique `ID` to be used in selecting a single `FoodType`.
     */
    nodeId: string;
  }

  /**
   * An object with a globally unique `ID`.
   */
  type Node = IQuery | IFood | IFoodType;

  /**
   * An object with a globally unique `ID`.
   */
  interface INode {
    __typename: 'Node';

    /**
     * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
     */
    nodeId: string;
  }

  /**
   * Methods to use when ordering `Food`.
   */
  const enum FoodsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    NAME_ASC = 'NAME_ASC',
    NAME_DESC = 'NAME_DESC',
    TYPE_ASC = 'TYPE_ASC',
    TYPE_DESC = 'TYPE_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `Food` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IFoodCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: number | null;

    /**
     * Checks for equality with the object’s `name` field.
     */
    name?: string | null;

    /**
     * Checks for equality with the object’s `type` field.
     */
    type?: number | null;
  }

  /**
   * A connection to a list of `Food` values.
   */
  interface IFoodsConnection {
    __typename: 'FoodsConnection';

    /**
     * A list of `Food` objects.
     */
    nodes: Array<IFood | null>;

    /**
     * A list of edges which contains the `Food` and cursor to aid in pagination.
     */
    edges: Array<IFoodsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `Food` you could get from the connection.
     */
    totalCount: number | null;
  }

  interface IFood {
    __typename: 'Food';

    /**
     * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
     */
    nodeId: string;
    id: number;
    name: string | null;
    type: number | null;

    /**
     * Reads a single `FoodType` that is related to this `Food`.
     */
    foodTypeByType: IFoodType | null;
  }

  interface IFoodType {
    __typename: 'FoodType';

    /**
     * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
     */
    nodeId: string;
    id: number;
    name: string | null;
    description: string | null;

    /**
     * Reads and enables pagination through a set of `Food`.
     */
    foodsByType: IFoodsConnection;
  }

  interface IFoodsByTypeOnFoodTypeArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Food`.
     * @default [{"alias":"primary_key_asc","specs":[["id",true]],"unique":true}]
     */
    orderBy?: Array<FoodsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IFoodCondition | null;
  }

  /**
   * A `Food` edge in the connection.
   */
  interface IFoodsEdge {
    __typename: 'FoodsEdge';

    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `Food` at the end of the edge.
     */
    node: IFood | null;
  }

  /**
   * Information about pagination in a connection.
   */
  interface IPageInfo {
    __typename: 'PageInfo';

    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;

    /**
     * When paginating backwards, are there more items?
     */
    hasPreviousPage: boolean;

    /**
     * When paginating backwards, the cursor to continue.
     */
    startCursor: any | null;

    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: any | null;
  }

  /**
   * Methods to use when ordering `FoodType`.
   */
  const enum FoodTypesOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    NAME_ASC = 'NAME_ASC',
    NAME_DESC = 'NAME_DESC',
    DESCRIPTION_ASC = 'DESCRIPTION_ASC',
    DESCRIPTION_DESC = 'DESCRIPTION_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `FoodType` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IFoodTypeCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: number | null;

    /**
     * Checks for equality with the object’s `name` field.
     */
    name?: string | null;

    /**
     * Checks for equality with the object’s `description` field.
     */
    description?: string | null;
  }

  /**
   * A connection to a list of `FoodType` values.
   */
  interface IFoodTypesConnection {
    __typename: 'FoodTypesConnection';

    /**
     * A list of `FoodType` objects.
     */
    nodes: Array<IFoodType | null>;

    /**
     * A list of edges which contains the `FoodType` and cursor to aid in pagination.
     */
    edges: Array<IFoodTypesEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `FoodType` you could get from the connection.
     */
    totalCount: number | null;
  }

  /**
   * A `FoodType` edge in the connection.
   */
  interface IFoodTypesEdge {
    __typename: 'FoodTypesEdge';

    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `FoodType` at the end of the edge.
     */
    node: IFoodType | null;
  }

  /**
   * The root mutation type which contains root level fields which mutate data.
   */
  interface IMutation {
    __typename: 'Mutation';

    /**
     * Creates a single `Food`.
     */
    createFood: ICreateFoodPayload | null;

    /**
     * Creates a single `FoodType`.
     */
    createFoodType: ICreateFoodTypePayload | null;

    /**
     * Updates a single `Food` using its globally unique id and a patch.
     */
    updateFood: IUpdateFoodPayload | null;

    /**
     * Updates a single `Food` using a unique key and a patch.
     */
    updateFoodById: IUpdateFoodPayload | null;

    /**
     * Updates a single `FoodType` using its globally unique id and a patch.
     */
    updateFoodType: IUpdateFoodTypePayload | null;

    /**
     * Updates a single `FoodType` using a unique key and a patch.
     */
    updateFoodTypeById: IUpdateFoodTypePayload | null;

    /**
     * Deletes a single `Food` using its globally unique id.
     */
    deleteFood: IDeleteFoodPayload | null;

    /**
     * Deletes a single `Food` using a unique key.
     */
    deleteFoodById: IDeleteFoodPayload | null;

    /**
     * Deletes a single `FoodType` using its globally unique id.
     */
    deleteFoodType: IDeleteFoodTypePayload | null;

    /**
     * Deletes a single `FoodType` using a unique key.
     */
    deleteFoodTypeById: IDeleteFoodTypePayload | null;
  }

  interface ICreateFoodOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateFoodInput;
  }

  interface ICreateFoodTypeOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateFoodTypeInput;
  }

  interface IUpdateFoodOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateFoodInput;
  }

  interface IUpdateFoodByIdOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateFoodByIdInput;
  }

  interface IUpdateFoodTypeOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateFoodTypeInput;
  }

  interface IUpdateFoodTypeByIdOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateFoodTypeByIdInput;
  }

  interface IDeleteFoodOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteFoodInput;
  }

  interface IDeleteFoodByIdOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteFoodByIdInput;
  }

  interface IDeleteFoodTypeOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteFoodTypeInput;
  }

  interface IDeleteFoodTypeByIdOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteFoodTypeByIdInput;
  }

  /**
   * All input for the create `Food` mutation.
   */
  interface ICreateFoodInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `Food` to be created by this mutation.
     */
    food: IFoodInput;
  }

  /**
   * An input for mutations affecting `Food`
   */
  interface IFoodInput {
    id?: number | null;
    name?: string | null;
    type?: number | null;
  }

  /**
   * The output of our create `Food` mutation.
   */
  interface ICreateFoodPayload {
    __typename: 'CreateFoodPayload';

    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Food` that was created by this mutation.
     */
    food: IFood | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `FoodType` that is related to this `Food`.
     */
    foodTypeByType: IFoodType | null;

    /**
     * An edge for our `Food`. May be used by Relay 1.
     */
    foodEdge: IFoodsEdge | null;
  }

  interface IFoodEdgeOnCreateFoodPayloadArguments {
    /**
     * The method to use when ordering `Food`.
     * @default {"alias":"primary_key_asc","specs":[["id",true]],"unique":true}
     */
    orderBy?: Array<FoodsOrderBy> | null;
  }

  /**
   * All input for the create `FoodType` mutation.
   */
  interface ICreateFoodTypeInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `FoodType` to be created by this mutation.
     */
    foodType: IFoodTypeInput;
  }

  /**
   * An input for mutations affecting `FoodType`
   */
  interface IFoodTypeInput {
    id?: number | null;
    name?: string | null;
    description?: string | null;
  }

  /**
   * The output of our create `FoodType` mutation.
   */
  interface ICreateFoodTypePayload {
    __typename: 'CreateFoodTypePayload';

    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `FoodType` that was created by this mutation.
     */
    foodType: IFoodType | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `FoodType`. May be used by Relay 1.
     */
    foodTypeEdge: IFoodTypesEdge | null;
  }

  interface IFoodTypeEdgeOnCreateFoodTypePayloadArguments {
    /**
     * The method to use when ordering `FoodType`.
     * @default {"alias":"primary_key_asc","specs":[["id",true]],"unique":true}
     */
    orderBy?: Array<FoodTypesOrderBy> | null;
  }

  /**
   * All input for the `updateFood` mutation.
   */
  interface IUpdateFoodInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The globally unique `ID` which will identify a single `Food` to be updated.
     */
    nodeId: string;

    /**
     * An object where the defined keys will be set on the `Food` being updated.
     */
    foodPatch: IFoodPatch;
  }

  /**
   * Represents an update to a `Food`. Fields that are set will be updated.
   */
  interface IFoodPatch {
    id?: number | null;
    name?: string | null;
    type?: number | null;
  }

  /**
   * The output of our update `Food` mutation.
   */
  interface IUpdateFoodPayload {
    __typename: 'UpdateFoodPayload';

    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Food` that was updated by this mutation.
     */
    food: IFood | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `FoodType` that is related to this `Food`.
     */
    foodTypeByType: IFoodType | null;

    /**
     * An edge for our `Food`. May be used by Relay 1.
     */
    foodEdge: IFoodsEdge | null;
  }

  interface IFoodEdgeOnUpdateFoodPayloadArguments {
    /**
     * The method to use when ordering `Food`.
     * @default {"alias":"primary_key_asc","specs":[["id",true]],"unique":true}
     */
    orderBy?: Array<FoodsOrderBy> | null;
  }

  /**
   * All input for the `updateFoodById` mutation.
   */
  interface IUpdateFoodByIdInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `Food` being updated.
     */
    foodPatch: IFoodPatch;
    id: number;
  }

  /**
   * All input for the `updateFoodType` mutation.
   */
  interface IUpdateFoodTypeInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The globally unique `ID` which will identify a single `FoodType` to be updated.
     */
    nodeId: string;

    /**
     * An object where the defined keys will be set on the `FoodType` being updated.
     */
    foodTypePatch: IFoodTypePatch;
  }

  /**
   * Represents an update to a `FoodType`. Fields that are set will be updated.
   */
  interface IFoodTypePatch {
    id?: number | null;
    name?: string | null;
    description?: string | null;
  }

  /**
   * The output of our update `FoodType` mutation.
   */
  interface IUpdateFoodTypePayload {
    __typename: 'UpdateFoodTypePayload';

    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `FoodType` that was updated by this mutation.
     */
    foodType: IFoodType | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `FoodType`. May be used by Relay 1.
     */
    foodTypeEdge: IFoodTypesEdge | null;
  }

  interface IFoodTypeEdgeOnUpdateFoodTypePayloadArguments {
    /**
     * The method to use when ordering `FoodType`.
     * @default {"alias":"primary_key_asc","specs":[["id",true]],"unique":true}
     */
    orderBy?: Array<FoodTypesOrderBy> | null;
  }

  /**
   * All input for the `updateFoodTypeById` mutation.
   */
  interface IUpdateFoodTypeByIdInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `FoodType` being updated.
     */
    foodTypePatch: IFoodTypePatch;
    id: number;
  }

  /**
   * All input for the `deleteFood` mutation.
   */
  interface IDeleteFoodInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The globally unique `ID` which will identify a single `Food` to be deleted.
     */
    nodeId: string;
  }

  /**
   * The output of our delete `Food` mutation.
   */
  interface IDeleteFoodPayload {
    __typename: 'DeleteFoodPayload';

    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Food` that was deleted by this mutation.
     */
    food: IFood | null;
    deletedFoodId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `FoodType` that is related to this `Food`.
     */
    foodTypeByType: IFoodType | null;

    /**
     * An edge for our `Food`. May be used by Relay 1.
     */
    foodEdge: IFoodsEdge | null;
  }

  interface IFoodEdgeOnDeleteFoodPayloadArguments {
    /**
     * The method to use when ordering `Food`.
     * @default {"alias":"primary_key_asc","specs":[["id",true]],"unique":true}
     */
    orderBy?: Array<FoodsOrderBy> | null;
  }

  /**
   * All input for the `deleteFoodById` mutation.
   */
  interface IDeleteFoodByIdInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: number;
  }

  /**
   * All input for the `deleteFoodType` mutation.
   */
  interface IDeleteFoodTypeInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The globally unique `ID` which will identify a single `FoodType` to be deleted.
     */
    nodeId: string;
  }

  /**
   * The output of our delete `FoodType` mutation.
   */
  interface IDeleteFoodTypePayload {
    __typename: 'DeleteFoodTypePayload';

    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `FoodType` that was deleted by this mutation.
     */
    foodType: IFoodType | null;
    deletedFoodTypeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `FoodType`. May be used by Relay 1.
     */
    foodTypeEdge: IFoodTypesEdge | null;
  }

  interface IFoodTypeEdgeOnDeleteFoodTypePayloadArguments {
    /**
     * The method to use when ordering `FoodType`.
     * @default {"alias":"primary_key_asc","specs":[["id",true]],"unique":true}
     */
    orderBy?: Array<FoodTypesOrderBy> | null;
  }

  /**
   * All input for the `deleteFoodTypeById` mutation.
   */
  interface IDeleteFoodTypeByIdInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: number;
  }
}

// tslint:enable
