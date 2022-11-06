import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: bigint;

  @Column()
  type: string;

  @Column({ nullable: true })
  description: string;
}
