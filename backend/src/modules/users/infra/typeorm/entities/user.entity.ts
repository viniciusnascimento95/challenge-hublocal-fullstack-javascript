import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor(id?: string) {
    this.id = id ?? uuidV4();
  }
}
