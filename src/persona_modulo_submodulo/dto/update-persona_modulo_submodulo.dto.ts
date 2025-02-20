import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaModuloSubmoduloDto } from './create-persona_modulo_submodulo.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePersonaModuloSubmoduloDto extends PartialType(
  CreatePersonaModuloSubmoduloDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fecha de creacion debe ser de tipo date' })
  created_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser de tipo date' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser de tipo date' })
  delted_at: Date;
}
