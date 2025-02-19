import { PartialType } from '@nestjs/mapped-types';
import { CreateContadorPersonaDto } from './create-contador_persona.dto';

export class UpdateContadorPersonaDto extends PartialType(CreateContadorPersonaDto) {
  id: number;
}
