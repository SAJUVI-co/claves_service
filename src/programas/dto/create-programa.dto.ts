import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProgramaDto {
  @IsNotEmpty({ message: 'El nombre del programa es requerido' })
  @IsString({ message: 'El nombre del programa debe ser un texto' })
  nombre: string;

  @IsNotEmpty({ message: 'La pagina web del programa es requerida' })
  @IsString({ message: 'La pagina web del programa debe ser un texto' })
  pagina_web: string;
}
