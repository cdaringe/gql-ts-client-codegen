import { Food } from './__tests__/fixture/namespace'

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export type QueryRequest<T> = {
  [P in keyof T]?:
    T[P] extends (any[] | null) ? QueryRequest<Unpacked<T[P]>> :
    T[P] extends (string | null) ? boolean :
    T[P] extends (number | null) ? boolean :
    T[P] extends (boolean | null) ? boolean :
    T[P] extends undefined ? boolean :
    T[P] extends Function ? boolean :
    QueryRequest<T[P]>;
}

export type QueryResult<R, Q extends R> = {
  [P in keyof R]:
    R[P] extends boolean ? Q[P] : QueryResult<R[P], Q[P]>;
}

async function test () {
  const createQueryGenerator = function <Q>() {
    return function exec <P extends Q> (query: QueryRequest<P>) {
      const res: QueryResult<QueryRequest<P>, Q> = { allFoods: [] } as any; // await execQuery(query)
      return res
    }
  }

  const execQuery = createQueryGenerator<Food.IQuery>()
  const res = execQuery({
    nodeId: true,
    node: {
      __typename: true,
      id: true
    }
  })
  res.allFoodTypes // compiles, when it shouldn't :(
  res.bananas // fails, as it should :)
  // ^ res is of type QueryResult<QueryRequest<P>, Food.IQuery>
  // NOT of type QueryResult<QueryRequest<INFERRED_TYPE>, Food.IQuery>,
  // making it seem like all keys are valid
}
test()
