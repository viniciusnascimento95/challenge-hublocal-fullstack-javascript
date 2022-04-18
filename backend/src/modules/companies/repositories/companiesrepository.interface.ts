import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../infra/typeorm/entities/company.entity';

export interface ICompaniesRepository {
  createCompany(data: CreateCompanyDto): Promise<Company>;

  findByCnpj(cnpj: string): Promise<Company>;

  findById(id: string): Promise<Company>;

  listAll(): Promise<Company[]>;

  // updateCompany(data: UpdateCompanyDto): Promise<Company>;

  removeCompany(company: Company): Promise<void>;
}
