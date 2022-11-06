import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Transaction } from "./transaction.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable:false, type: "numeric"})
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transaction: Transaction[];
}
