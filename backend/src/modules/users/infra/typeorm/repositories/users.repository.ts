import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
import { IUsersRepository } from 'src/modules/users/repositories/usersrepository.interface';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
class UsersRepository extends Repository<User> implements IUsersRepository {
  async listAll(): Promise<User[]> {
    const users = await this.find();

    return users;
  }
  async createUser({
    fullname,
    email,
    password,
  }: CreateUserDto): Promise<User> {
    const userCreated = this.create({
      fullname,
      email,
      password,
    });

    await this.save(userCreated);

    return userCreated;
  }
  async findById(id: string): Promise<User> {
    const user = await this.findOne(id);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.findOne({ email });

    return user;
  }

  updateUser(data: UpdateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async deleteUser(user: User): Promise<void> {
    await this.remove(user);
  }
}

export { UsersRepository };
