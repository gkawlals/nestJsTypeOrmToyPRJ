import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';
import { User } from './user.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  com_name: string;

  @Column()
  com_cre_day?: string;

  @Column()
  com_hol_day: string;

  @Column()
  com_all_day: boolean;

  @Column()
  com_category: string;

  @Column()
  com_ph: string;

  @Column()
  com_num: string;

  @Column()
  com_tot_peo: number;

  // @ManyToOne(() => User, user => user.companies)
  // owner: User[];

  @OneToMany(() => Employee, employee => employee.company)
  employees: Employee
}
