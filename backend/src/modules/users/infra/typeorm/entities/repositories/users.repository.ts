// import { ICreateUserDTO } from 'src/modules/users/dtos/create-user.dto';
// import { IUpdateUserAddressDTO } from 'src/modules/users/dtos/update-user-address.dto';
// import { IUpdateUserDTO } from 'src/modules/users/dtos/update-user.dto';
// import { IUsersRepository } from '../../../../users/repositories/usersrepository.interface';
// import { EntityRepository, Repository } from 'typeorm';
// import { User } from '../entities/user.entity';

import { IUsersRepository } from 'src/modules/users/repositories/usersrepository.interface';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user.entity';

@EntityRepository(User)
class UsersRepository extends Repository<User> implements IUsersRepository {
  async listAll(): Promise<User[]> {
    const users = await this.find();

    return users;
  }

  async createUser({
    name,
    phone,
    password,
    public_place,
    complement,
    district,
    city,
    state,
    cep,
    number,
  }: ICreateUserDTO): Promise<User> {
    const user = this.create({
      name,
      phone,
      password,
      public_place,
      complement,
      district,
      city,
      state,
      cep,
      number,
    });

    await this.save(user);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.findOne(id);

    return user;
  }

  async findManyByIds(ids: string[]): Promise<User[]> {
    const users = await this.findByIds(ids);

    return users;
  }

  async findByPhone(phone: string): Promise<User> {
    const user = await this.findOne({ phone });

    return user;
  }

  async updateUser({
    id,
    name,
    password,
    phone,
  }: IUpdateUserDTO): Promise<User> {
    const user = this.create({
      id,
      name,
      password,
      phone,
    });

    await this.save(user);

    return user;
  }

  async updateUserAddress({
    id,
    public_place,
    district,
    cep,
    complement,
    number,
    city,
    state,
  }: IUpdateUserAddressDTO): Promise<User> {
    const user = await this.findOne(id);

    user.public_place = public_place ?? user.public_place;
    user.district = district ?? user.district;
    user.complement = complement ?? user.complement;
    user.number = number ?? user.number;
    user.city = city ?? user.city;
    user.state = state ?? user.state;
    user.cep = cep ?? user.cep;

    await this.save(user);

    return user;
  }

  async deleteUser(user: User): Promise<void> {
    await this.remove(user);
  }
}

export { UsersRepository };
