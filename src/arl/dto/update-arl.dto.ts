import { PartialType } from '@nestjs/mapped-types';
import { CreateArlDto } from './create-arl.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateArlDto extends PartialType(CreateArlDto) {
  @IsNotEmpty({ message: 'El id de la ARL es requerido' })
  @IsInt({ message: 'El id de la ARL debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fecha de creación debe ser una fecha' })
  created_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualización debe ser una fecha' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminación debe ser una fecha' })
  deleted_at: Date;
}
