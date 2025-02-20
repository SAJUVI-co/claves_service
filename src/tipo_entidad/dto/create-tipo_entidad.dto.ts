import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoEntidadDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  @IsNotEmpty({ message: 'La pagina web es requerida' })
  @IsString({ message: 'La pagina web debe ser un string' })
  pagina_web: string;

  @IsNotEmpty({ message: 'El id del submodulo es requerido' })
  @IsInt({ message: 'El id del submodulo debe ser un entero' })
  submodulo_id: number;
}
