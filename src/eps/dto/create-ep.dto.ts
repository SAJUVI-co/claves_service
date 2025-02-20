import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEpDto {
  @IsNotEmpty({ message: 'El campo usuario no puede estar vacío' })
  @IsString({ message: 'El campo usuario debe ser un string' })
  usuario: string;

  @IsNotEmpty({ message: 'la clave de ingreso no puede estar vacia' })
  @IsString({ message: 'la clave de ingreso debe ser un string' })
  clave: string;
}
