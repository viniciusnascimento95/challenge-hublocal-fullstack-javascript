// import { ICreateUserDTO } from '../dtos/create-user.dto';
// import { IUpdateUserAddressDTO } from '../dtos/update-user-address.dto';
// import { IUpdateUserDTO } from '../dtos/update-user.dto';
import { User } from '../infra/typeorm/entities/user.entity';

interface IUsersRepository {
  listAll(): Promise<User[]>;

  //   createUser(data: ICreateUserDTO): Promise<User>;

  findById(id: string): Promise<User>;

  findManyByIds(ids: string[]): Promise<User[]>;

  findByPhone(phone: string): Promise<User>;

  //   updateUserAddress(data: IUpdateUserAddressDTO): Promise<User>;

  //   updateUser(data: IUpdateUserDTO): Promise<User>;

  deleteUser(user: User): Promise<void>;
}

export { IUsersRepository };
