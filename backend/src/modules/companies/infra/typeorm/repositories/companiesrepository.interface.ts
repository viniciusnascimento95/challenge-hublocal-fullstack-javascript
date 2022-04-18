import { CreateCompanyDto } from 'src/modules/companies/dto/create-company.dto';
import { Company } from '../entities/company.entity';

interface ICompaniesRepository {
  create(data: CreateCompanyDto): Promise<Company>;

  findById(id: string): Promise<Company>;

  findByCnpj(cnpj: string): Promise<Company>;

  findAll(): Promise<Company[]>;

  remove(company: Company): Promise<void>;

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

export { ICompaniesRepository };
