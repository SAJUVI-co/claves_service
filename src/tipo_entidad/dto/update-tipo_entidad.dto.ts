import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEntidadDto } from './create-tipo_entidad.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateTipoEntidadDto extends PartialType(CreateTipoEntidadDto) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;
}
