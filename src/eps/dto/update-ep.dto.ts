import { PartialType } from '@nestjs/mapped-types';
import { CreateEpDto } from './create-ep.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateEpDto extends PartialType(CreateEpDto) {
  @IsNotEmpty({ message: 'El campo id no puede estar vacío' })
  @IsInt({ message: 'El campo id debe ser un número entero' })
  id: number;
}
