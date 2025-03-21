import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum TipoPersona {
  juridica = 'JURIDICA',
  natural = 'NATURAL',
}

export enum TipoDocumento {
  cedula = 'CC',
  nit = 'NIT',
  targeta_identidad = 'TI',
  pasaporte = 'PA',
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
  tipo_documento: TipoDocumento;

  @IsNotEmpty({ message: 'El numero de documento no puede estar vacio' })
  @IsInt({ message: 'El numero de documento debe ser Int' })
  numero_documento: number;

  @IsNotEmpty({ message: 'El dv no puede estar vacio' })
  @IsInt({ message: 'El correo debe ser Int' })
  dv: number;
}
