import { PartialType } from '@nestjs/mapped-types';
import { CreateAfpDto } from './create-afp.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAfpDto extends PartialType(CreateAfpDto) {
  @IsNotEmpty({ message: 'El id de la CCF es requerido' })
  @IsString({ message: 'El id de la CCF debe ser un número entero' })
  id: number;
}
