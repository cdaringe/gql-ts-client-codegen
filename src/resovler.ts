import fetch from 'node-fetch'

export interface QueryResolver {
  resolve<R>(q: string): Promise<R>
 }

export const fetchResovler: QueryResolver = {
  async resolve<R> (q: string) {
    const raw = await fetch(q)
    const json = await raw.json()
    return json as R
  }
}
