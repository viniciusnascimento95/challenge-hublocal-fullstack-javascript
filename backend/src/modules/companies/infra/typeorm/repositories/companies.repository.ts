import { CreateCompanyDto } from 'src/modules/companies/dto/create-company.dto';
import { ICompaniesRepository } from 'src/modules/companies/repositories/companiesrepository.interface';
import { EntityRepository, Repository } from 'typeorm';
import { Company } from '../entities/company.entity';

@EntityRepository(Company)
class CompaniesRepository
  extends Repository<Company>
  implements ICompaniesRepository
{
  async listAll(): Promise<Company[]> {
    const companies = await this.find();
    return companies;
  }

  async createCompany({
    id,
    name,
    cnpj,
    description,
    responsible,
    owner_id,
  }: CreateCompanyDto): Promise<Company> {
    const company = this.create({
      id,
      name,
      cnpj,
      description,
      responsible,
      owner_id,
    });

    await this.save(company);

    return company;
  }

  async findByCnpj(cnpj: string): Promise<Company> {
    const company = await this.findOne({ cnpj });

    return company;
  }

  async findById(id: string): Promise<Company> {
    const company = await this.findOne(id);

    return company;
  }

  async removeCompany(company: Company): Promise<void> {
    await this.remove(company);
  }
}

export { CompaniesRepository };
