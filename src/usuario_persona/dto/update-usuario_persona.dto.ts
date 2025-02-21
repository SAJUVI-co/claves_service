import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioPersonaDto } from './create-usuario_persona.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateUsuarioPersonaDto extends PartialType(
  CreateUsuarioPersonaDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;
}
