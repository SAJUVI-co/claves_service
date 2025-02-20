import { PartialType } from '@nestjs/mapped-types';
import { CreateEpDto } from './create-ep.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEpDto extends PartialType(CreateEpDto) {
  @IsNotEmpty({ message: 'El campo id no puede estar vacío' })
  @IsInt({ message: 'El campo id debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fecha de creacion debe ser de tipo date' })
  created_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser de tipo date' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser de tipo date' })
  deleted_at: Date;
}
