import { PartialType } from '@nestjs/mapped-types';
import { CreateCamaraComercioDto } from './create-camara_comercio.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateCamaraComercioDto extends PartialType(
  CreateCamaraComercioDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;
}
