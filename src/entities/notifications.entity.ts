import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  notification_id: number;

  @ManyToOne(() => User)
  user: User;

  @Column('text')
  message: string;

  @Column({ default: false })
  is_read: boolean;

  @Column('timestamp')
  created_at: Date;
}
