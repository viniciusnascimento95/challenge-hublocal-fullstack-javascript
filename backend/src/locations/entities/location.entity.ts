import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  andress: string;

  //   @Column()
  //   Relacionamento com company
}
