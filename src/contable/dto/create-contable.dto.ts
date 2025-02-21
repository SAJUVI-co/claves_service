import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateContableDto {
  @IsNotEmpty({ message: 'El usuario es requerido' })
  @IsString({ message: 'El usuario debe ser de tipo string' })
  usuario: string;

  @IsNotEmpty({ message: 'La clave de ingreso es requerida' })
  @IsString({ message: 'La clave de ingreso debe ser de tipo string' })
  clave_ingreso: string;

  @IsNotEmpty({ message: 'El programa es requerido' })
  @IsInt({ message: 'El programa debe ser de tipo enterno' })
  id_programa: number;

  @IsNotEmpty({ message: 'El programa es requerido' })
  @IsInt({ message: 'El programa debe ser de tipo number' })
  id_contable: number;
}
