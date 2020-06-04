import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import {APP_HOST, APP_PORT} from './config.ts';
import statsSet from './db/database.ts';

const app = new Application();
const router = new Router();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Oak Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port} ✌`
  );
});

router.get('/api/stats', async (context) => {
  context.response.body = (await statsSet).value();
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen(`${APP_HOST}:${APP_PORT}`);