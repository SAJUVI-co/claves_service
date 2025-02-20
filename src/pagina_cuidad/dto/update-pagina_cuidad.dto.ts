import { PartialType } from '@nestjs/mapped-types';
import { CreatePaginaCuidadDto } from './create-pagina_cuidad.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdatePaginaCuidadDto extends PartialType(CreatePaginaCuidadDto) {
  @IsNotEmpty({ message: 'El id de la cuidad es requerido' })
  @IsInt({ message: 'El id de la cuidad debe ser un número entero' })
  id: number;
}
