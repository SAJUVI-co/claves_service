import { PartialType } from '@nestjs/mapped-types';
import { CreateAfpDto } from './create-afp.dto';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAfpDto extends PartialType(CreateAfpDto) {
  @IsNotEmpty({ message: 'El id de la CCF es requerido' })
  @IsString({ message: 'El id de la CCF debe ser un número entero' })
  id: number;

  @IsOptional({ message: 'La fecha de creación debe ser una fecha' })
  @IsDate()
  created_at: Date;

  @IsOptional({ message: 'La fecha de actualización debe ser una fecha' })
  @IsDate()
  updated_at: Date;

  @IsOptional({ message: 'La fecha de eliminación debe ser una fecha' })
  @IsDate()
  deleted_at: Date;
}
