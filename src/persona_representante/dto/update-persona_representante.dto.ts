import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaRepresentanteDto } from './create-persona_representante.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdatePersonaRepresentanteDto extends PartialType(
  CreatePersonaRepresentanteDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;
}
