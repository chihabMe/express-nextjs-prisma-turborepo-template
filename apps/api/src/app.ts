import { createServer } from "./utils/server";
import * as env from "./utils/env";

const runServer = async () => {
  const app = createServer();
  try {
    app.listen(env.PORT, () => {
      console.log(`start the server on port ${env.PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
if (require.main == module) runServer();
