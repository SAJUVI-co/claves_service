import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuperintendenciaDto {
  @IsNotEmpty({ message: 'El usuario es requerido' })
  @IsString({ message: 'El usuario debe ser un string' })
  usuario: string;

  @IsNotEmpty({ message: 'La clave de ingreso es requerida' })
  @IsString({ message: 'La clave de ingreso debe ser un string' })
  clave: string;
}
