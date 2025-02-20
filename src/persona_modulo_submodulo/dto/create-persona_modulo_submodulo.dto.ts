import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePersonaModuloSubmoduloDto {
  @IsNotEmpty({ message: 'El id_submodulo es requerido' })
  @IsInt({ message: 'El id_submodulo debe ser de tipo entero' })
  id_submodulo: number;

  @IsNotEmpty({ message: 'El id_modulo es requerido' })
  @IsInt({ message: 'El id_modulo debe ser de tipo entero' })
  id_modulo: number;

  @IsNotEmpty({ message: 'El id_persona es requerido' })
  @IsInt({ message: 'El id_persona debe ser de tipo entero' })
  id_persona: number;
}
