import { PartialType } from '@nestjs/mapped-types';
import { CreateDianDto } from './create-dian.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateDianDto extends PartialType(CreateDianDto) {
  @IsNotEmpty({ message: 'El id de la dian es requerido' })
  @IsInt({ message: 'El id de la dian debe ser un número entero' })
  id: number;
}
