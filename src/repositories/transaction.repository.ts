import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Transaction } from "../entities/transaction.entity";

interface ITransactionRepo {
  save: (transaction: Transaction) => Promise<Transaction>;
  findOne: (payload: object) => Promise<Transaction | null>;
}

class TransactionRepository implements ITransactionRepo {
  private repo: Repository<Transaction>;

  constructor() {
    this.repo = AppDataSource.getRepository(Transaction);
  }

  save = async (transaction: Transaction) => this.repo.save(transaction);
  findOne = async (payload: object) => this.repo.findOneBy({ ...payload });
}

export default new TransactionRepository();
