import { defineConfig } from '@prisma/cli';

export default defineConfig({
  datasource: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL,
  },
  generator: {
    provider: 'prisma-client-js',
  },
  migrations: {
    seed: 'ts-node prisma/seed.ts',
  },
});
