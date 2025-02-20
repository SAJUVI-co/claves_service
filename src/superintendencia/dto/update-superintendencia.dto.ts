import { PartialType } from '@nestjs/mapped-types';
import { CreateSuperintendenciaDto } from './create-superintendencia.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateSuperintendenciaDto extends PartialType(
  CreateSuperintendenciaDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;
}
