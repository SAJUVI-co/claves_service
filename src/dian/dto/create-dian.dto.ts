import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDianDto {
  @IsNotEmpty({ message: 'La calve de ingreso es requerida' })
  @IsString({ message: 'La clave de ingreso debe ser un texto' })
  clave_ingreso: string;

  @IsOptional()
  @IsString({ message: 'La clave firma debe ser de tipo string' })
  clave_firma: string;
}
