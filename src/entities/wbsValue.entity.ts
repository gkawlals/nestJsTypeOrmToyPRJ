import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { WBSColumn } from './wbsColumn.entity';

@Entity()
export class WBSValue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => WBSColumn, (column) => column.id)
  wbsColumn: WBSColumn;

  @Column('text')
  value: string;
}
