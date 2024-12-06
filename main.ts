import { app } from '@/app.ts';

if (import.meta.main) {
  app(Deno.args, console.log, console.error);
}
