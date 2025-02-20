import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTiposPlantillaDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser de tipo string' })
  nombre: string;

  @IsNotEmpty({ message: 'El submodulo_id es requerido' })
  @IsInt({ message: 'El submodulo_id debe ser de tipo entero' })
  submodulo_id: number;
}
