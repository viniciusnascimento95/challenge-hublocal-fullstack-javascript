import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/modules/companies/entities/company.entity';

@Module({
  imports: [TypeOrmModule.forRoot()],
})
export class DatabaseModule {}
