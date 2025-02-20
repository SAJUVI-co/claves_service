import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

// Usar este dto para realizar busquedas
export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
  @IsNotEmpty({ message: 'El id no puede estar vacio' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;
}
