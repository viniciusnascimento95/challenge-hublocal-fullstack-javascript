import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
// import { User } from './user.entity';

// @EntityRepository(User)
export class UserRepository extends Repository<User> {}
