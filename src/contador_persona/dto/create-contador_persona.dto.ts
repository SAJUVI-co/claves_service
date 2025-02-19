import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateContadorPersonaDto {
  @IsNotEmpty({ message: 'El id de la persona no puede estar vacío' })
  @IsInt({ message: 'El id de la persona debe ser un número entero' })
  id_persona: number;

  @IsNotEmpty({ message: 'El id del contador no puede estar vacío' })
  @IsInt({ message: 'El id del contador debe ser un número entero' })
  id_contador: number;

  @IsNotEmpty({ message: 'La targeta profesional no puede estar vacía' })
  @IsString({ message: 'La targeta profesional debe de ser un string' })
  targeta_profesional: string;
}
