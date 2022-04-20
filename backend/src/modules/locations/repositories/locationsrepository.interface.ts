import { Company } from 'src/modules/companies/infra/typeorm/entities/company.entity';
import { CreateLocationDto } from '../dto/create-location.dto';
import { Location } from '../infra/typeorm/entities/location.entity';

interface ILocationRepository {
  createLocation(data: CreateLocationDto): Promise<Location>;

  listAll(): Promise<Location[]>;

  listAllByCompany(company: Company): Promise<Location[]>;

  findById(id: string): Promise<Location>;

  removeLocation(location: Location): Promise<void>;
}

export { ILocationRepository };
