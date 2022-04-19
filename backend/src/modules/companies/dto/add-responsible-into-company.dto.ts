import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddResponsibleIntoCompanyDTO {
  @ApiProperty({ type: [String] })
  responsible_ids: string[];

  @ApiProperty()
  @IsString()
  company_id: string;
}
