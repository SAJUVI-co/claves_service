import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePaginaCuidadDto {
  @IsNotEmpty({ message: 'La cuidad es requerida' })
  @IsInt({ message: 'La cuidad debe ser un numero' })
  cuidad_id: number;

  @IsNotEmpty({ message: 'La pagina es requerida' })
  @IsString({ message: 'La pagina debe ser un texto' })
  pagina: string;
}
