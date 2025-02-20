import { PartialType } from '@nestjs/mapped-types';
import { CreateCcfDto } from './create-ccf.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCcfDto extends PartialType(CreateCcfDto) {
  @IsNotEmpty({ message: 'El id de la CCF es requerido' })
  @IsString({ message: 'El id de la CCF debe ser un número entero' })
  id: number;
}
