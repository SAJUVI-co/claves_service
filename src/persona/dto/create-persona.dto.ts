import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum TipoPersona {
  juridica = 'JURIDICA',
  natural = 'NATURAL',
}

export class CreatePersonaDto {
  @IsNotEmpty({ message: 'El tipo de persona no puede estar vacio' })
  @IsString({ message: 'El tipo de persona debe ser una cadena de texto' })
  tipo_persona: TipoPersona;

  @IsNotEmpty({ message: 'El nombre de usuario no puede estar vacío' })
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  nombre: string;

  @IsNotEmpty({ message: 'La cedula no puede estar vacia' })
  @IsNumber({}, { message: 'La cedula debe ser un número' })
  cedula: number;

  @IsNotEmpty({ message: 'El dv no puede estar vacio' })
  @IsInt({ message: 'El correo debe ser Int' })
  dv: number;
}
