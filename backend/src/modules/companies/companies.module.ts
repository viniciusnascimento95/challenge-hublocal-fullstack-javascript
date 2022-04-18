import { Module } from '@nestjs/common';
import { CompaniesController } from './controllers/companies.controller';
import { CompaniesService } from './services/companies.service';

@Module({
  // imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
