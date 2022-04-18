import { v4 as uuidv4 } from 'uuid';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../../../users/infra/typeorm/entities/user.entity';

@Entity('companies')
class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  description: string;

  @Column()
  owner_id: string;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'responsible_company',
    joinColumns: [{ name: 'company_id' }],
    inverseJoinColumns: [{ name: 'responsible_id' }],
  })
  responsible: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(id?: string) {
    this.id = id ?? uuidv4();
  }
}

export { Company };
