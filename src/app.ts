import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";

// import { handleError } from "./errors/appError"
// import { appRoutes } from "./routes"

const app = express();

app.use(express.json());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  // return handleError(err, res)
});

export default app;
