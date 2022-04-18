import { IsString } from 'class-validator';
import { User } from 'src/modules/users/infra/typeorm/entities/user.entity';

export class CreateCompanyDto {
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
