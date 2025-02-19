import { PartialType } from '@nestjs/mapped-types';
import { CreateModuloDto } from './create-modulo.dto';
import { IsDate, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateModuloDto extends PartialType(CreateModuloDto) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;

  @IsNotEmpty({ message: 'La fecha de creacion es requerida' })
  @IsDate({ message: 'La fecha de creacion debe ser de tipo fecha' })
  created_at: Date;

  @IsNotEmpty({ message: 'La fecha de actualizacion es requerida' })
  @IsDate({ message: 'La fecha de actualizacion debe ser de tipo fecha' })
  udpated_at: Date;

  @IsNotEmpty({ message: 'La fecha de eliminacion es requerida' })
  @IsDate({ message: 'La fecha de eliminacion debe ser de tipo fecha' })
  deleted_at: Date;
}
