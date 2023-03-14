import { Request, Response } from "express";
import httpStatus from "http-status";
export const errorMiddleware = (req: Request, res: Response) => {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json("500 error");
};
