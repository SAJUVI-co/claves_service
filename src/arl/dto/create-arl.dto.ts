import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArlDto {
  @IsNotEmpty({ message: 'El nombre de usuario es requerido' })
  @IsString({ message: 'El nombre de usuario debe ser un texto' })
  name: string;

  @IsNotEmpty({ message: 'La clave de ingreso debe ser requerida' })
  @IsString({ message: 'La clave de ingreso debe ser un texto' })
  clave: string;
}
