import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAlcaldiaDto {
  @IsNotEmpty({ message: 'La sucursal es requerida' })
  @IsInt({ message: 'La sucursal es un numero entero' })
  sucursal: number;

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
