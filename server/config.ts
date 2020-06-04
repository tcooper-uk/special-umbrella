import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();
export const APP_HOST = env.HOST || "127.0.0.1";
export const APP_PORT = env.PORT || 3000;