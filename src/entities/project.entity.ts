import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './tasks.entity';
import { ProjectDocument } from './project-document.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ type: 'date', nullable: true })
  deployment_date: Date;

  @Column({ type: 'enum', enum: ['진행 중', '완료', '보류'], default: '진행 중' })
  status: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @OneToMany(() => ProjectDocument, (document) => document.project)
  documents: ProjectDocument[];
}
