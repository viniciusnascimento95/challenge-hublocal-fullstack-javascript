import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../users/infra/typeorm/repositories/users.repository';
import { CompaniesController } from './controllers/companies.controller';
import { CompaniesRepository } from './infra/typeorm/repositories/companies.repository';
import { CompaniesService } from './services/companies.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompaniesRepository, UsersRepository])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
