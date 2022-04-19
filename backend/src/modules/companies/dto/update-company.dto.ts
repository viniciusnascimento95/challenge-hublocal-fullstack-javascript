import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsString } from 'class-validator';
import { User } from 'src/modules/users/infra/typeorm/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @ApiProperty()
  @IsString()
  id?: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  cnpj: string;

  @ApiProperty()
  @IsString()
  responsible?: User[];

  @ApiProperty()
  @IsString()
  owner_id: string;
}
