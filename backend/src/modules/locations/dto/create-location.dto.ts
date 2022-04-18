import { IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  public_place: string;

  @IsString()
  complement: string;

  @IsString()
  district: string;

  @IsString()
  state: string;

  @IsString()
  city: string;

  @IsString()
  number: string;

  @IsString()
  cep: string;

  @IsString()
  company_id?: string;

  created_by?: string;
}
