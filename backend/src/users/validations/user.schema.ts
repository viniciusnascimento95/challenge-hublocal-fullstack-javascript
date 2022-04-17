import { IsEmail, IsString, Max, Min } from 'class-validator';

export class UserSchema {
  @IsString()
  fullname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
