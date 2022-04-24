import { CreateCompanyDto } from 'src/modules/companies/dto/create-company.dto';
import { ICompaniesRepository } from 'src/modules/companies/repositories/companiesrepository.interface';
import { EntityRepository, Repository } from 'typeorm';
import { Company } from '../entities/company.entity';

@EntityRepository(Company)
class CompaniesRepository
  extends Repository<Company>
  implements ICompaniesRepository
{
  async responsibleOnCompany(
    responsible_id: string,
    company_id: string,
  ): Promise<boolean> {
    const query = await this.query(
      `SELECT COUNT(*) FROM responsible_company WHERE company_id LIKE 
      '${company_id}' AND responsible_id LIKE '${responsible_id}'`,
    );

    const [count] = Object.values(query[0]);

    console.log(count);

    if (count === 1) return true;

    return false;
  }

  async setResponsibleAsMain(
    responsible_id: string,
    company_id: string,
  ): Promise<void> {
    await this.query(`
      UPDATE responsible_company SET is_main = true 
      WHERE responsible_id LIKE '${responsible_id}'
      AND company_id LIKE '${company_id}'
    `);
  }

  async isResponsibleAvailable(responsible_id: string): Promise<boolean> {
    const query = await this.createQueryBuilder('r')
      .select('rc.is_main')
      .from('responsible_company', 'rc')
      .innerJoin('users', 'u')
      .where('u.id LIKE :id', { id: responsible_id })
      .getRawMany();

    console.log(query);

    const isAvailable = query.some((query) => query.is_main === 0);

    return isAvailable;
  }

  async isCompanyAvailable(company_id: string): Promise<boolean> {
    const query = await this.createQueryBuilder('r')
      .select('rc.is_main')
      .from('responsible_company', 'rc')
      .innerJoin('companies', 'c')
      .where('c.id LIKE :id', { id: company_id })
      .getRawMany();

    const isAvailable = query.some((query) => query.is_main === 0);

    return isAvailable;
  }

  async listAll(): Promise<Company[]> {
    const companies = await this.find();
    return companies;
  }

  async createCompany({
    name,
    cnpj,
    description,
    responsible,
    owner_id,
  }: CreateCompanyDto): Promise<Company> {
    const company = this.create({
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
