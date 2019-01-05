import { Pool } from 'pg'
import { DbContextDbConfig } from 'ava-fixture-docker-db'

export async function createPool (config: DbContextDbConfig) {
  const client = new Pool({
    user: config.username,
    host: 'localhost',
    ...config
  })
  await client.connect()
  return client
}
