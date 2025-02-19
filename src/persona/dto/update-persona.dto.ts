import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

// Usar este dto para realizar busquedas
export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
  @IsNotEmpty({ message: 'El id no puede estar vacio' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsDate()
  created_at: Date;

  @IsOptional()
  @IsDate()
  updated_at: Date;

  @IsOptional()
  @IsDate()
  deleted_at: Date;
}
