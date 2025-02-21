import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateCuidadDto } from './create-cuidad.dto';

export class UpdateCuidadDto extends PartialType(CreateCuidadDto) {
  @IsNotEmpty({ message: 'El id de la cuidad es requerido' })
  @IsInt({ message: 'El id de la cuidad debe ser un número entero' })
  id: number;
}
