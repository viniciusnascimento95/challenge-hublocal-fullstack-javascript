import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { LocationsModule } from './modules/locations/locations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    CompaniesModule,
    LocationsModule,
  ],
})
export class AppModule {}
