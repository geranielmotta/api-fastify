import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envschema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envschema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid enviroment variables!', _env.error.format())
  throw new Error('Invalid enviroment varieables')
}

export const env = _env.data
