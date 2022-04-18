import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  @IsString()
  id: string;

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
}
