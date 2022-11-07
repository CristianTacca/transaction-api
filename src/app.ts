import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";

import { appRoutes } from "./routes";
import { handleError } from "./errors/appError";

const app = express();

app.use(express.json());

appRoutes(app);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  return handleError(err, res);
});

export default app;
