import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesRepository } from '../companies/infra/typeorm/repositories/companies.repository';
import { UsersRepository } from '../users/infra/typeorm/repositories/users.repository';
import { LocationsController } from './controllers/locations.controller';
import { LocationRepository } from './infra/typeorm/repositories/location.repository';
import { LocationsService } from './services/locations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompaniesRepository,
      UsersRepository,
      LocationRepository,
    ]),
  ],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
