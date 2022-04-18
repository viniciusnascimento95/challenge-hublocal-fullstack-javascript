import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  fullname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
