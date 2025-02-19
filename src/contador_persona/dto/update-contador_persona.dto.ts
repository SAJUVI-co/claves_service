import { PartialType } from '@nestjs/mapped-types';
import { CreateContadorPersonaDto } from './create-contador_persona.dto';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateContadorPersonaDto extends PartialType(
  CreateContadorPersonaDto,
) {
  @IsNotEmpty({ message: 'El id de la persona no puede estar vacío' })
  @IsInt({ message: 'El id de la persona debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsString({ message: 'La targeta profesional debe de ser un string' })
  targeta_profesional: string;

  @IsOptional()
  @IsDate({ message: 'La fecha de expedicion debe ser una fecha' })
  created_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser una fecha' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser una fecha' })
  deleted_at: Date;
}
