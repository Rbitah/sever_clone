import { User } from "src/authentication/entities/authentication.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sellerwallet {
  @PrimaryGeneratedColumn('uuid')
  sellerwallet_Id: string;

  @Column()
  totalNumberOfSales: number;

  @Column()
  totalSales: number;

  @Column()
  totalNumberOfWithdrawals: number;

  @Column()
  totalCashOut: number;

  @Column('integer')
  mainWalletBalance: number;

  @OneToOne(() => User, (user) => user.wallet)
  @JoinColumn()
  seller: User;
}
