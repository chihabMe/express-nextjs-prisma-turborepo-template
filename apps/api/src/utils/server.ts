import express, { Express } from "express";
export const createServer = (): Express => {
  const app = express();
  app.get("/hello", (req, res) => {
    res.json("hello world");
  });
  return app;
};

const registerMiddleware = (app: Express) => {};
