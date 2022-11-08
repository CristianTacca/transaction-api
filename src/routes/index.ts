import { Express } from "express";
import transactionRouter from "./transaction.routes";

export const appRoutes = (app: Express) => {
  app.use("", transactionRouter);
};
