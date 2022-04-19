import { CreateCompanyDto } from '../dto/create-company.dto';
import { Company } from '../infra/typeorm/entities/company.entity';

export interface ICompaniesRepository {
  createCompany(data: CreateCompanyDto): Promise<Company>;

  findByCnpj(cnpj: string): Promise<Company>;

  findById(id: string): Promise<Company>;

  listAll(): Promise<Company[]>;

  removeCompany(company: Company): Promise<void>;

  isResponsibleAvailable(responsible_id: string): Promise<boolean>;

  isCompanyAvailable(company_id: string): Promise<boolean>;

  responsibleOnCompany(
    responsible_id: string,
    company_id: string,
  ): Promise<boolean>;

  setResponsibleAsMain(
    responsible_id: string,
    company_id: string,
  ): Promise<any>;
}
