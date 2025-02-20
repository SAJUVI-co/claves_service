import { PartialType } from '@nestjs/mapped-types';
import { CreateCorreoDto } from './create-correo.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateCorreoDto extends PartialType(CreateCorreoDto) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;
}
