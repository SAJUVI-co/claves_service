import { PartialType } from '@nestjs/mapped-types';
import { CreateSuperintendenciaDto } from './create-superintendencia.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSuperintendenciaDto extends PartialType(
  CreateSuperintendenciaDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fecha de creacion debe ser de tipo date' })
  craeted_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser de tipo date' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser de tipo date' })
  deleted_at: Date;
}
