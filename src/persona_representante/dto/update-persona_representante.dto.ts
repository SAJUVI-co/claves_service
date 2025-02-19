import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaRepresentanteDto } from './create-persona_representante.dto';

export class UpdatePersonaRepresentanteDto extends PartialType(CreatePersonaRepresentanteDto) {
  id: number;
}
