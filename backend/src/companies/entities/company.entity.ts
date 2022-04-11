import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  description: string;

  // @ForeignKey()
  // location_company_id: string;
}
