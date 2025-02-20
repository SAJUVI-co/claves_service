import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposPlantillaDto } from './create-tipos_plantilla.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTiposPlantillaDto extends PartialType(
  CreateTiposPlantillaDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fecha de creacion debe ser de tipo date' })
  created_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser de tipo date' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser de tipo date' })
  delted_at: Date;
}
