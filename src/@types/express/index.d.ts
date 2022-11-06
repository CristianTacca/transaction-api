import * as express from "express";

import { User } from "../../entities/transaction.entity";

declare global {
  namespace Express {
    interface Request {
      decoded: Partial<User>;
      validated: Partial<User>;
    }
  }
}
