import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCamaraComercioDto {
  @IsNotEmpty({ message: 'La sucursal es requerida' })
  @IsInt({ message: 'La sucursal debe ser de tipo entero' })
  sucusarl: number;

  @IsNotEmpty({ message: 'La pagina web es requerida' })
  @IsString({ message: 'La pagina web debe ser de tipo string' })
  pagina_web: string;

  @IsNotEmpty({ message: 'El usuario es requerido' })
  @IsString({ message: 'El usuario debe ser de tipo string' })
  usuario: string;

  @IsNotEmpty({ message: 'La clave de ingreso es requerida' })
  @IsString({ message: 'La clave de ingreso debe ser de tipo string' })
  clave_ingreso: string;
}
