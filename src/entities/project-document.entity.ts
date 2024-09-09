import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class ProjectDocument {
  @PrimaryGeneratedColumn()
  document_id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  file_path: string;

  @ManyToOne(() => Project, (project) => project.documents)
  project: Project;
}
