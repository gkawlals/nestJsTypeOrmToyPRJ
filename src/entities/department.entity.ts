import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Employee } from './Employee.entity';

@Entity()
export class Department{
    @PrimaryGeneratedColumn()
    id: number;    
}