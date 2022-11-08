import { Request } from "express";
import { AppError } from "../errors/appError";
import userRepository from "../repositories/user.repository";
import transactionRepository from "../repositories/transaction.repository";

class TransactionService {
  static insertTransaction = async (req: Request) => {
    const { values } = req;
    const user = await userRepository.findOne({ id: values.user });

    if (!user) {
      throw new AppError(401, "User does not exist.");
    }

    if (values.type === "deposit") {
      user.balance += Number(values.value.toFixed(2));
    } else if (values.type === "withdrawn") {
      user.balance -= Number(values.value.toFixed(2));
    } else {
      throw new AppError(
        401,
        "Type is incorrect! Please select deposit or withdrawn."
      );
    }

    values.user = user;

    const transaction = await transactionRepository.save(values);
    await userRepository.save(user);

    return transaction;
  };

  static updateTransacion = async (req: Request) => {
    const { id } = req.body;

    const transaction = await transactionRepository.findOne({ id: id });

    if (!transaction) {
      throw new AppError(401, "Transaction does not exists.");
    }

    const user = await userRepository.findOne({ id: transaction.user.id });

    if (!user) {
      throw new AppError(401, "User does not exist.");
    }

    if (transaction.type === "deposit") {
      user.balance -= Number(transaction.value.toFixed(2));
    } else if (transaction.type === "withdrawn") {
      user.balance += Number(transaction.value.toFixed(2));
    }

    await userRepository.save(user);

    return true;
  };

  static deleteTransaction = async (req: Request) => {
    const { id } = req.body;

    const transaction = await transactionRepository.findOne({ id: id });

    if (!transaction) {
      throw new AppError(401, "Transaction does not exists.");
    }

    const user = await userRepository.findOne({ id: transaction.user.id });

    if (!user) {
      throw new AppError(401, "User does not exist.");
    }

    if (transaction.type === "deposit") {
      user.balance -= Number(transaction.value.toFixed(2));
    } else if (transaction.type === "withdrawn") {
      user.balance += Number(transaction.value.toFixed(2));
    }

    await userRepository.save(user);
    await transactionRepository.delete(transaction.id);

    return true;
  };
}

export default TransactionService;
