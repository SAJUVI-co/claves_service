import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCorreoDto {
  @IsNotEmpty({ message: 'El correo es requerido' })
  @IsString({ message: 'El correo debe ser de tipo stirng' })
  cuenta: string;

  @IsNotEmpty()
  @IsString({ message: 'La fecha de creacion debe ser de tipo date' })
  clave_ingreso: string;
}
