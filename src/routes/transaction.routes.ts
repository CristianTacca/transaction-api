import { Router } from "express";
import { createTransactionSchema } from "../schemas";
import validateSchema from "../middlewares/validateSchema.middleware";
import TransactionController from "../controllers/transaction.controller";

const transactionRouter = Router();

transactionRouter.post(
  "/insert",
  validateSchema(createTransactionSchema),
  TransactionController.insertion
);
transactionRouter.patch("/update", TransactionController.update);
transactionRouter.delete("/delete", TransactionController.delete);

export default transactionRouter;
