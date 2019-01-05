import { createPool } from './fixture/client'
import { createPostGraphileSchema } from 'postgraphile';
import { db, DbContext } from 'ava-fixture-docker-db'
import { generateNamespace } from '@gql2ts/from-schema'
import { Pool } from 'pg'
import { promises as fsP } from 'fs';
import * as fs from 'fs-extra'
import * as path from 'path'
import ava, { TestInterface } from 'ava'
import bluebird from 'bluebird'

const createSchemaSqlFilename = path.resolve(__dirname, 'fixture/create-schema.sql').replace('build', 'src')

const test = ava as TestInterface<
  DbContext & {
    client: Pool
  }
>

let fixtureSql = ''
test.beforeEach(async t => {
  if (!fixtureSql) fixtureSql = (await fsP.readFile(createSchemaSqlFilename)).toString()
  await db.setup(t.context)
  await bluebird.delay(2000)
  t.context.client = await createPool(t.context.dbConfig)
  await t.context.client.query(fixtureSql)
  const fruits = await t.context.client.query('select food.*, food_type.name as type from food join food_type on food.type=food_type.id ')
  t.true(fruits.rows.length === 3)

  const schema = await createPostGraphileSchema(t.context.client, 'public', {
    includeExtensionResources: true
  })
  const ns = `// AUTO-GENERATED as side-effect of testing\n${generateNamespace('Food', schema)}`
    .replace(/declare/g, 'export declare')
  const filename = path.join(__dirname, 'fixture/namespace.ts')
    .replace('build', 'src')
  await fs.writeFile(filename, ns)
})

test('<add real tests here>', t => t.pass())

test.afterEach(async t => {
  t.context.client.on('error', () => {})
  t.context.client.end()
  await db.teardown(t.context)
})
