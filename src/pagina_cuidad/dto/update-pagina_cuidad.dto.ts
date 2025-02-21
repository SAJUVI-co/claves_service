import { PartialType } from '@nestjs/mapped-types';
import { CreatePaginaCuidadDto } from './create-pagina_cuidad.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdatePaginaCuidadDto extends PartialType(CreatePaginaCuidadDto) {
  @IsNotEmpty({ message: 'El id es requerido' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;
}
