import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaModuloSubmoduloDto } from './create-persona_modulo_submodulo.dto';

export class UpdatePersonaModuloSubmoduloDto extends PartialType(CreatePersonaModuloSubmoduloDto) {
  id: number;
}
