import { Food } from './__tests__/fixture/namespace'
import { QueryResolver } from './__tests__/fixture/golden'
import { fetchResovler } from './resovler'

export type Unpacked<T> = T extends (infer U)[] ? U : T;

/**
 * prototype of possible input format to client methods.
 * @see `client.foods(...)` below
 */
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

/**
 * resultant payload type.  this type is currently BAD.
 * what we really need is each resolved GQL query to _reflect_
 * the `QueryRequest<T>` (or similar) that was passed to the
 * client method
 */
export type MappedResultFood = Partial<Food.IFood>
export type MappedResult<T> = T extends Food.IFood ? MappedResultFood : never;

/**
 * gql client.  in the future state, all of this code will be generated.  in the
 * current state, i'm exploring what the shape should be, using hard coded _things_
 * to iterate/explore.
 * @param resolver user provided async mechanism to exec the GQL query
 */
export const create = (resolver: QueryResolver) => {
  const resolve: <R>(q: string) => Promise<R> = q => resolver.resolve(q)

  const food: (fields: QueryRequest<Food.IFood>) => Promise<MappedResult<Food.IFood>> = async fields => {
    return resolve(JSON.stringify(fields))
  }
  return {
    food
  }
}

async function test () {
  const client = create(fetchResovler)
  const res = await client.food({
    name: true,
    type: true,
    foodTypeByType: {
      foodsByType: { // non-sensical query. just testing
        nodes: {
          name: true,
          type: true
        }
      }
    },
  })
  console.log(res.name) // PASS - should compile
  console.log(res.nodeId) // FAIL - should not compile. res.nodeId was not present in query
}
test()
