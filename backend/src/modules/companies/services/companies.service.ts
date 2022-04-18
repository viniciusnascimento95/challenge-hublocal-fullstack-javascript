import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/modules/users/infra/typeorm/repositories/users.repository';
import { IUsersRepository } from 'src/modules/users/repositories/usersrepository.interface';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../infra/typeorm/entities/company.entity';
import { CompaniesRepository } from '../infra/typeorm/repositories/companies.repository';
import { ICompaniesRepository } from '../repositories/companiesrepository.interface';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompaniesRepository)
    private readonly companiesRepository: ICompaniesRepository,
    @InjectRepository(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async createCompany({
    name,
    description,
    cnpj,
    owner_id,
  }: CreateCompanyDto): Promise<Company> {
    const companyExists = await this.companiesRepository.findByCnpj(cnpj);

    if (companyExists) {
      throw new ConflictException('Company already exists');
    }

    const company = await this.companiesRepository.createCompany({
      name,
      cnpj,
      description,
      responsible: [],
      owner_id,
    });

    return company;
  }

  async listAll(): Promise<Company[]> {
    const comapnies = await this.companiesRepository.listAll();

    return comapnies;
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companiesRepository.findById(id);

    return company;
  }

  async updateCompany(id: string, data: UpdateCompanyDto): Promise<Company> {
    const companyUpdate = await this.companiesRepository.findById(id);

    return companyUpdate;

    // logica de atualização fazer
  }

  async removeCompany(company_id: string): Promise<void> {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new NotFoundException('This company does not exists');
    }

    await this.companiesRepository.removeCompany(company);
  }
}
