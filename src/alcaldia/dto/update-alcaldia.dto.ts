import { PartialType } from '@nestjs/mapped-types';
import { CreateAlcaldiaDto } from './create-alcaldia.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAlcaldiaDto extends PartialType(CreateAlcaldiaDto) {
  @IsNotEmpty({ message: 'El campo id no puede estar vacio' })
  @IsInt({ message: 'El campo id debe ser un numero entero' })
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
