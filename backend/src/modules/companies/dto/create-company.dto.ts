import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from 'src/modules/users/infra/typeorm/entities/user.entity';

export class CreateCompanyDto {
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

  @ApiProperty({ type: [String] })
  @IsString()
  responsible?: User[];

  @ApiProperty()
  @IsString()
  owner_id: string;
}
