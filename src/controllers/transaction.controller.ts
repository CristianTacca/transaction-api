import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import TransactionService from "../services/transaction.service";

class TransactionController {
  static insertion = async (req: Request, res: Response) => {
    try {
      const transaction = await TransactionService.insertTransaction(req);

      return res.status(201).json(transaction);
    } catch (error) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  };
}

export default TransactionController;
