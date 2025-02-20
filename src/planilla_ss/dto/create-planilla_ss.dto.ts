import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlanillaSsDto {
  @IsNotEmpty({
    message: 'El nombre de usuario de la seguridad social, no debe estar vacio',
  })
  @IsString({
    message: 'El nombre de usuario de la seguridad social, debe ser un texto',
  })
  nombre_usuario: string;

  @IsNotEmpty({ message: 'La clave de ingreso no puede estar vacia' })
  @IsString({ message: 'La clave de ingreso debe ser un texto' })
  clave_ingreso: string;
}
