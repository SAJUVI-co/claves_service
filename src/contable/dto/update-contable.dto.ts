import { PartialType } from '@nestjs/mapped-types';
import { CreateContableDto } from './create-contable.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateContableDto extends PartialType(CreateContableDto) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;
}
