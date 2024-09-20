import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './tasks.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usr_name?: string;

  @Column()
  usr_id: string;

  @Column()
  usr_pwd?: string;

  @Column()
  usr_ph?: string;

  @Column()
  usr_cre_day?: string;

  @Column({type: 'enum', enum:['관리자', '개발자'], default: '개발자'})
  role: string

  @OneToMany(() => Task, (task) => task.assigned_to)
  tasks: Task[];
}
