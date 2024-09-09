import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Task } from './tasks.entity';

@Entity()
export class Timer {
  @PrimaryGeneratedColumn()
  timer_id: number;

  @Column('timestamp')
  start_time: Date;

  @Column('timestamp')
  end_time: Date;

  @Column({ type: 'int' })
  elapsed_time: number; // 경과 시간 (초 단위)

  @ManyToOne(() => Task, (task) => task.timers)
  task: Task;
}
