import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: "numeric" })
  value: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  description?: string;

  @OneToOne(() => User, { eager: true, cascade: true })
  @JoinColumn()
  user: User;
}
