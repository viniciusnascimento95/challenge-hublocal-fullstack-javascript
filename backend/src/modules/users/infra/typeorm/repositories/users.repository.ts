import { IUsersRepository } from 'src/modules/users/repositories/usersrepository.interface';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UsersRepository
  extends Repository<User>
  implements IUsersRepository
{
  listAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findManyByIds(ids: string[]): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findByPhone(phone: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
