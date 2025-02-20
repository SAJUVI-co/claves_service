import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAlcaldiaDto {
  @IsNotEmpty({ message: 'El campo cuidad no puede estar vacio' })
  @IsInt({ message: 'El campo cuidad debe ser un numero entero' })
  cuidad: number;

  @IsNotEmpty({ message: 'La pagina web es requerida' })
  @IsString({ message: 'La pagina web debe ser de tipo string' })
  paginaWeb: string;

  @IsNotEmpty({ message: 'La identificacion es requerida' })
  @IsString({ message: 'La idenficacion debe ser de tipo string' })
  identificacion: string;

  @IsNotEmpty({ message: 'La clave de ingreso es requerida' })
  @IsString({ message: 'La clave de ingreso debe ser de tipo string' })
  clave_ingreso: string;

  @IsOptional()
  @IsString({ message: 'La clave exogena debe ser de tipo string' })
  clave_exogena: string;

  @IsOptional()
  @IsString({ message: 'La clave ICA debe ser de tipo string' })
  clave_ica: string;

  @IsNotEmpty({ message: 'La placa es requerida' })
  @IsString({ message: 'La placa debe ser de tipo interger' })
  placa: number;
}
