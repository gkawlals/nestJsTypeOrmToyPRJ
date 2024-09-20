import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class WBSColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  column_name: string;

  @Column()
  column_type: string;

  @ManyToOne(() => Project, (project) => project.wbsColumns)
  project: Project;
}
