import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Project } from './project.entity';
import { Timer } from './timers.entity';
import { User } from './user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: ['진행 중', '완료', '보류'], default: '진행 중' })
  status: string;

  @Column({ type: 'int', nullable: true })
  estimated_time: number;

  @Column({ type: 'datetime', nullable: true })
  start_time: Date;

  @Column({ type: 'datetime', nullable: true })
  end_time: Date;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;

  @ManyToOne(() => User, (user) => user.tasks)
  assigned_to: User;

  @OneToMany(() => Timer, (timer) => timer.task)
  timers: Timer[];
}
