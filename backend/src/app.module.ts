import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { LocationsModule } from './locations/locations.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [UserModule, TicketModule, UsersModule, TicketsModule, LocationsModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
