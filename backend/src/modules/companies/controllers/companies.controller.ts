import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Put,
  HttpCode,
} from '@nestjs/common';

import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../infra/typeorm/entities/company.entity';
import { CompaniesService } from '../services/companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async createCompany(@Body() data: CreateCompanyDto): Promise<Company> {
    const { name, cnpj, description, owner_id } = data;

    const company = await this.companiesService.createCompany({
      name,
      cnpj,
      description,
      owner_id,
    });

    return company;
  }

  @Put('/:company_id')
  async updateCompany(
    @Param('company_id') company_id: string,
    @Body() data: UpdateCompanyDto,
  ): Promise<Company> {
    data.id = company_id;

    const company = await this.companiesService.updateCompany(data);

    return company;
  }

  @Get()
  async listAll(): Promise<Company[]> {
    const companies = await this.companiesService.listAll();

    return companies;
  }

  @Put('/responsible/:company_id')
  async setCompanyResponsible(
    @Param('company_id') company_id: string,
    @Body('responsible_ids') responsible_ids: string[],
  ): Promise<Company> {
    const company = await this.companiesService.addResponsibleIntoCompany({
      responsible_ids,
      company_id,
    });

    return company;
  }

  @HttpCode(204)
  @Patch('/responsible/:company_id/main')
  async setResponsibleAsMain(
    @Param('company_id') company_id: string,
    @Body('responsible_id') responsible_id: string,
  ) {
    await this.companiesService.setResponsibleAsMain({
      company_id,
      responsible_id,
    });
  }
}
