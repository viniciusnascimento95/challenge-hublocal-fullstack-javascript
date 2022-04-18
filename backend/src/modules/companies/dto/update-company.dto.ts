import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsString } from 'class-validator';
import { User } from 'src/modules/users/infra/typeorm/entities/user.entity';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  cnpj: string;

  @IsString()
  responsible?: User[];

  @IsString()
  owner_id: string;
}
