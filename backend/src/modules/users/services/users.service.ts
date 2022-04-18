import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { settings } from 'src/config/auth';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../infra/typeorm/entities/user.entity';
import { UsersRepository } from '../infra/typeorm/repositories/users.repository';
import { IUsersRepository } from '../repositories/usersrepository.interface';

interface IRequest {
  email: string;
  password: string;
}

interface ITokenResponse {
  user: {
    fullname: string;
    email: string;
  };
  token: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async create({ fullname, email, password }: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.createUser({
      fullname,
      email,
      password: hashedPassword,
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.listAll();

    return users;
  }

  async getProfile(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException('This user does not exists!');
    }

    return user;
  }

  async authenticate({ email, password }: IRequest): Promise<ITokenResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    const token = sign({}, '941c421d551126ace7478d099cddfdb7', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenResponse: ITokenResponse = {
      token,
      user: {
        fullname: user.fullname,
        email: user.email,
      },
    };

    return tokenResponse;
  }
}
