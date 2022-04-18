import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';

import { User } from '../infra/typeorm/entities/user.entity';
import { UsersService } from '../services/users.service';

interface IRequest {
  email: string;
  password: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<User> {
    const userCreated = await this.usersService.create(data);
    return userCreated;
  }

  @Get()
  async findAll(): Promise<User[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get('/:id')
  async getUserProfile(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.getProfile(id);

    return user;
  }

  @Post('/sessions')
  async authenticateUser(@Body() { email, password }: IRequest): Promise<any> {
    return await this.usersService.authenticate({ email, password });
  }
}
