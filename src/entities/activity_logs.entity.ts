import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Project } from './project.entity';
import { Task } from './tasks.entity';

@Entity()
export class ActivityLog {
  @PrimaryGeneratedColumn()
  log_id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Project)
  project: Project;

  @ManyToOne(() => Task, { nullable: true })
  task: Task;

  @Column('text')
  description: string;

  @Column('timestamp')
  created_at: Date;
}
