import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, CompaniesModule],
})
export class AppModule {}
