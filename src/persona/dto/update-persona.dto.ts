import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto, TipoPersona } from './create-persona.dto';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

// Usar este dto para realizar busquedas
export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
  @IsNotEmpty({ message: 'El id no puede estar vacio' })
  @IsInt({ message: 'El id debe ser un número entero' })
  id: number;

  @IsOptional({ message: 'El tipo de persona no puede estar vacio' })
  @IsString({ message: 'El tipo de persona debe ser una cadena de texto' })
  tipo_persona: TipoPersona;

  @IsOptional({ message: 'El nombre de usuario no puede estar vacío' })
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  nombre: string;

  @IsOptional({ message: 'La cedula no puede estar vacia' })
  @IsNumber({}, { message: 'La cedula debe ser un número' })
  cedula: number;

  @IsOptional({ message: 'El dv no puede estar vacio' })
  @IsInt({ message: 'El correo debe ser Int' })
  dv: number;

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
