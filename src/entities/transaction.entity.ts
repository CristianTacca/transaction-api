import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => User, { eager: true, cascade: true })
  @JoinColumn()
  user: User;
}
