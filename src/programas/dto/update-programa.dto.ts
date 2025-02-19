import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramaDto } from './create-programa.dto';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateProgramaDto extends PartialType(CreateProgramaDto) {
  @IsNotEmpty()
  @IsInt({ message: 'El id del programa debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsString({ message: 'El nombre del programa debe ser un texto' })
  nombre: string;

  @IsOptional()
  @IsString({ message: 'La pagina web del programa debe ser un texto' })
  paginaWeb: string;

  @IsOptional()
  @IsDate({ message: 'La fecha de creación del programa debe ser una fecha' })
  created_at: Date;

  @IsOptional()
  @IsDate({
    message: 'La fecha de actualizacion del programa debe ser una fecha',
  })
  udpated_at: Date;

  @IsOptional()
  @IsDate({
    message: 'La fecha de eliminacion del programa debe ser una fecha',
  })
  deleted_at: Date;
}
