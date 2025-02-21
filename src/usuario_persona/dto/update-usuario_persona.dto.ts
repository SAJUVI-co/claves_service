import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioPersonaDto } from './create-usuario_persona.dto';

export class UpdateUsuarioPersonaDto extends PartialType(CreateUsuarioPersonaDto) {
  id: number;
}
