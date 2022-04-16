import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../infra/typeorm/entities/user.entity';

interface IUsersRepository {
  listAll(): Promise<User[]>;

  createUser(data: CreateUserDto): Promise<User>;

  findById(id: string): Promise<User>;

  findManyByIds(ids: string[]): Promise<User[]>;

  findByPhone(phone: string): Promise<User>;

  //   updateUserAddress(data: IUpdateUserAddressDTO): Promise<User>;

  updateUser(data: UpdateUserDto): Promise<User>;

  deleteUser(user: User): Promise<void>;
}

export { IUsersRepository };
