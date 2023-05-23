import { env } from './env'
import { knex as setupKnex, Knex as knexConf } from 'knex'

export const config: knexConf.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
