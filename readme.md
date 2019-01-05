# gql-ts-client-codegen

autogenerate a typescript graphql client compatible with node & the browser

## warning - this package is WIP and non-functional

# usage

```ts
import { generate } from 'gql-ts-client-codegen'
const code = await generate(gqlSchema)
await fs.writeFile('/path/to/client.ts', code)
```
