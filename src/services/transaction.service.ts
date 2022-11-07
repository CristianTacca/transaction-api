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
}

export default TransactionService;
