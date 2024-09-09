import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './tasks.entity';
import { ProjectDocument } from './project-document.entity';
import { LocalDate } from 'js-joda';

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
  
  static dataTypeParsing(request: any): Project{
    const project = new Project
    project.name = request.name;
    project.description = request.description;
    project.start_date = new Date(request.start_date);
    project.end_date = request.end_date ? new Date(request.end_date) : null;
    project.deployment_date = request.deployment_date ? new Date(request.deployment_date) : null;
    project.status = request.status || '진행 중';
    return project
  }
}
