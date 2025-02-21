import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCcfDto {
  @IsNotEmpty({ message: 'El correo electronico es requerido' })
  @IsString({ message: 'El correo debe ser de tipo texto' })
  email: string;

  @IsNotEmpty({ message: 'La clave de acceso es requerida' })
  @IsString({ message: 'La clave de acceso debe ser un texto' })
  clave_ingreso: string;

  @IsNotEmpty({ message: 'El nombre codigo de empresa es requerido' })
  @IsString({ message: 'El nombre codigo de empresa debe ser un texto' })
  codigo_empresa: string;
}
