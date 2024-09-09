import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    emp_hol_day: Date;
    
    @Column()
    dep_24: string;

    @Column()
    emp_com_day: Date;

    @Column()
    emp_dept: string;

    @Column()
    emp_sql: number;  

    @ManyToMany(() => Company, company => company.employees)
    company: Company
}