import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposPlantillaDto } from './create-tipos_plantilla.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateTiposPlantillaDto extends PartialType(
  CreateTiposPlantillaDto,
) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id: number;
}
