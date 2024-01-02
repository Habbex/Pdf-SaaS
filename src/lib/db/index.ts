import {neon, neonConfig} from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
neonConfig.fetchConnectionCache= true

if (!process.env.POSTGRES_DATABASE_URL) {
    throw new Error("database URL not found!")
}

const sql = neon(process.env.POSTGRES_DATABASE_URL)

export const db= drizzle(sql)