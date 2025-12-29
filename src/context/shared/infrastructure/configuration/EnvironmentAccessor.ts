import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string().min(1).default('development'),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error('Error:', error.format());
  process.exit(1);
}

export const { NODE_ENV } = data;
