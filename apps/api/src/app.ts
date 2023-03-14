import { createServer } from "./utils/server";

const runServer = async () => {
  const app = createServer();
  try {
    app.listen(process.env.PORT ?? 3000, () => {
      console.log(`start the server on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
if (require.main == module) runServer();
