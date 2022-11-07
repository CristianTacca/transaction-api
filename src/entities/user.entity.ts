import { Transaction } from "./transaction.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transaction: Transaction[];
}
