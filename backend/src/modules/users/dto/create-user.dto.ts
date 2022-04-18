import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
