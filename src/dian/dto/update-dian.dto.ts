import { PartialType } from '@nestjs/mapped-types';
import { CreateDianDto } from './create-dian.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDianDto extends PartialType(CreateDianDto) {
  @IsNotEmpty({ message: 'El id de la dian es requerido' })
  @IsInt({ message: 'El id de la dian debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fechad de creacion debe ser de tipo date' })
  craeted_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser de tipo date' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser de tipo date' })
  delted_at: Date;
}
