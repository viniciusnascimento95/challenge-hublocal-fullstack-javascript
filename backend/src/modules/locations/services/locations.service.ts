import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompaniesRepository } from 'src/modules/companies/infra/typeorm/repositories/companies.repository';
import { ICompaniesRepository } from 'src/modules/companies/repositories/companiesrepository.interface';
import { UsersRepository } from 'src/modules/users/infra/typeorm/repositories/users.repository';
import { IUsersRepository } from 'src/modules/users/repositories/usersrepository.interface';
import { CreateLocationDto } from '../dto/create-location.dto';
// import { UpdateLocationDto } from '../dto/update-location.dto';
import { Location } from '../infra/typeorm/entities/location.entity';
import { LocationRepository } from '../infra/typeorm/repositories/location.repository';
import { ILocationRepository } from '../repositories/locationsrepository.interface';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationRepository)
    private readonly locationRepository: ILocationRepository,
    @InjectRepository(CompaniesRepository)
    private readonly companiesRepository: ICompaniesRepository,
    @InjectRepository(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async createLocation({
    name,
    public_place,
    complement,
    district,
    city,
    state,
    cep,
    number,
    created_by,
    company_id,
  }: CreateLocationDto) {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new NotFoundException('This company does not exists');
    }

    const user = await this.usersRepository.findById(created_by);

    if (!user) {
      throw new NotFoundException('');
    }

    const location = await this.locationRepository.createLocation({
      name,
      public_place,
      complement,
      district,
      city,
      state,
      number,
      created_by,
      cep,
      company_id,
    });

    return location;
  }

  async listAll(): Promise<Location[]> {
    const locations = this.locationRepository.listAll();

    return locations;
  }

  async listAllByCompany(company_id: string): Promise<Location[]> {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new NotFoundException('This company does not exists');
    }

    const locations = await this.locationRepository.listAllByCompany(company);

    return locations;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  // async updateLocation({
  //   id,
  //   name,
  //   public_place,
  //   complement,
  //   district,
  //   city,
  //   state,
  //   cep,
  //   number,
  // }: UpdateLocationDto): Promise<Location> {
  //   const place = await this.locationRepository.findById(id);

  //   if (!place) {
  //     throw new NotFoundException('This user does not exists');
  //   }

  //   const placeUpdated = await this.locationRepository.createLocation({
  //     id,
  //     name,
  //     public_place,
  //     complement,
  //     district,
  //     city,
  //     state,
  //     cep,
  //     number,
  //   });

  //   return placeUpdated;
  // }

  async removeLocation(place_id: string): Promise<void> {
    const place = await this.locationRepository.findById(place_id);

    if (!place) {
      throw new NotFoundException('This place does not exists');
    }

    await this.locationRepository.removeLocation(place);
  }
}
