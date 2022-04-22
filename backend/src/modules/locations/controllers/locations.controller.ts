import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateLocationDto } from '../dto/create-location.dto';
import { UpdateLocationDto } from '../dto/update-location.dto';
import { LocationsService } from '../services/locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  async createLocation(@Body() data: CreateLocationDto): Promise<void> {
    await this.locationsService.createLocation(data);
  }

  // @Get()
  // async listAll(): Promise<Location[]> {
  //   const locations = await this.locationsService.listAll();

  //   return locations;
  // }

  // @Get('/:company_id')
  // async listLocationsFromCompany(
  //   @Param('company_id') company_id: string,
  // ): Promise<Location[]> {
  //   const locations = await this.locationsService.findOne(company_id);

  //   return locations;
  // }

  // @Put('/:location_id')
  // async updateLocation(
  //   @Param('location_id') location_id: string,
  //   @Body() data: UpdateLocationDto,
  // ): Promise<Location> {
  //   data.id = location_id;

  //   const place = await this.locationsService.updateLocation(data);

  //   return place;
  // }

  @Delete('/:location_id')
  async removePlace(@Param('location_id') location_id: string) {
    await this.locationsService.removeLocation(location_id);
  }
}
