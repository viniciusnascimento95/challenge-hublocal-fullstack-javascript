import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  //Relacionamento
  //   @Column()
  //   user: string;

  @Column()
  status: string;

  //Historico do chamado
  //   @Column()
  //   history: string;
}
