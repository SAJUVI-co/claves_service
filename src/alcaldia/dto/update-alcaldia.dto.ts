import { PartialType } from '@nestjs/mapped-types';
import { CreateAlcaldiaDto } from './create-alcaldia.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateAlcaldiaDto extends PartialType(CreateAlcaldiaDto) {
  @IsNotEmpty({ message: 'El campo id no puede estar vacio' })
  @IsInt({ message: 'El campo id debe ser un numero entero' })
  id: number;
}
