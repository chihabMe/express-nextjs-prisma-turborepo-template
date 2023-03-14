/* eslint-disable turbo/no-undeclared-env-vars */
import dotenv from "dotenv";
dotenv.config();

export const PORT = Number.parseInt(process.env.PORT ?? "3001");
