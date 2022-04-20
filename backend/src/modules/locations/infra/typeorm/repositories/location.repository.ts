import { Company } from 'src/modules/companies/infra/typeorm/entities/company.entity';
import { CreateLocationDto } from 'src/modules/locations/dto/create-location.dto';
import { ILocationRepository } from 'src/modules/locations/repositories/locationsrepository.interface';
import { EntityRepository, Repository } from 'typeorm';
import { Location } from '../entities/location.entity';

@EntityRepository(Location)
class LocationRepository
  extends Repository<Location>
  implements ILocationRepository
{
  async listAll(): Promise<Location[]> {
    const locations = await this.find();

    return locations;
  }

  async listAllByCompany(company: Company): Promise<Location[]> {
    const locations = await this.createQueryBuilder('p')
      .select('*')
      .from('location', 'lo')
      .innerJoin('companies', 'c')
      .where('c.id LIKE :id', { id: company.id })
      .getRawMany();

    return locations;
  }

  async createLocation({
    id,
    name,
    public_place,
    complement,
    district,
    city,
    state,
    number,
    cep,
    company_id,
  }: CreateLocationDto): Promise<Location> {
    const location = this.create({
      id,
      name,
      public_place,
      complement,
      district,
      city,
      state,
      number,
      cep,
      company_id,
    });

    await this.save(location);

    return location;
  }

  async findById(id: string): Promise<Location> {
    const location = await this.findOne(id);

    return location;
  }

  async removeLocation(location: Location): Promise<void> {
    await this.remove(location);
  }
}

export { LocationRepository };
