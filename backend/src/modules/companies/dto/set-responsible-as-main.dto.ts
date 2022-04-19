import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SetResponsibleAsMainDTO {
  @ApiProperty()
  @IsString()
  responsible_id: string;

  @ApiProperty()
  @IsString()
  company_id: string;
}
