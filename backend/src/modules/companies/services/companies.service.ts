import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/modules/users/infra/typeorm/repositories/users.repository';
import { IUsersRepository } from 'src/modules/users/repositories/usersrepository.interface';
import { AddResponsibleIntoCompanyDTO } from '../dto/add-responsible-into-company.dto';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { SetResponsibleAsMainDTO } from '../dto/set-responsible-as-main.dto';
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

  async updateCompany({
    id,
    cnpj,
    description,
    name,
  }: UpdateCompanyDto): Promise<Company> {
    const company = await this.companiesRepository.findById(id);

    if (!company) {
      throw new NotFoundException('This company does not exists');
    }

    const cnpjAlreadyInUse = await this.companiesRepository.findByCnpj(cnpj);

    if (cnpjAlreadyInUse) {
      throw new NotFoundException('This CNPJ is already in use');
    }

    company.cnpj = cnpj ?? company.cnpj;
    company.description = description ?? company.description;
    company.name = name ?? company.name;

    await this.companiesRepository.createCompany(company);

    return company;
  }

  async removeCompany(company_id: string): Promise<void> {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new NotFoundException('This company does not exists');
    }

    await this.companiesRepository.removeCompany(company);
  }

  async addResponsibleIntoCompany({
    responsible_ids,
    company_id,
  }: AddResponsibleIntoCompanyDTO): Promise<Company> {
    const users = await this.usersRepository.findManyByIds(responsible_ids);

    if (users.length !== responsible_ids.length) {
      throw new NotFoundException('At least one users has not founded');
    }

    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new NotFoundException('This company does not exists');
    }

    company.responsible = users;

    await this.companiesRepository.createCompany(company);

    return company;
  }

  async setResponsibleAsMain({
    company_id,
    responsible_id,
  }: SetResponsibleAsMainDTO): Promise<void> {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new NotFoundException('This company does not exists');
    }

    const responsible = await this.usersRepository.findById(responsible_id);

    if (!responsible) {
      throw new NotFoundException('This user does not exists');
    }

    const responsibleIsAvailable =
      await this.companiesRepository.isResponsibleAvailable(responsible_id);

    if (!responsibleIsAvailable) {
      throw new ConflictException(
        'This user already is main responsible in this or others companies',
      );
    }

    const companyIsAvailable =
      await this.companiesRepository.isCompanyAvailable(company_id);

    if (!companyIsAvailable) {
      throw new ConflictException(
        'This company already has a main responsible',
      );
    }

    await this.companiesRepository.setResponsibleAsMain(
      responsible_id,
      company_id,
    );
  }
}
