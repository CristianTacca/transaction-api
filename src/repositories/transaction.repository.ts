import { AppDataSource } from "../data-source";
import { DeleteResult, Repository } from "typeorm";
import { Transaction } from "../entities/transaction.entity";

interface ITransactionRepo {
  save: (transaction: Transaction) => Promise<Transaction>;
  findOne: (payload: object) => Promise<Transaction | null>;
  delete: (id: number) => Promise<DeleteResult>;
}

class TransactionRepository implements ITransactionRepo {
  private repo: Repository<Transaction>;

  constructor() {
    this.repo = AppDataSource.getRepository(Transaction);
  }

  save = async (transaction: Transaction) => this.repo.save(transaction);
  findOne = async (payload: object) => this.repo.findOneBy({ ...payload });
  delete = async (id: number) => this.repo.delete(id);
}

export default new TransactionRepository();
