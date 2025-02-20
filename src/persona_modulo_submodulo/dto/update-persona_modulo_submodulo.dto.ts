import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaModuloSubmoduloDto } from './create-persona_modulo_submodulo.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdatePersonaModuloSubmoduloDto extends PartialType(
  CreatePersonaModuloSubmoduloDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;
}
