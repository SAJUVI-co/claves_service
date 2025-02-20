import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonaRepresentanteDto {
  @IsNotEmpty({ message: 'El nit es requerido' })
  @IsInt({ message: 'El nit debe ser de tipo entero' })
  nit: number;

  @IsNotEmpty({ message: 'El dv es requerido' })
  @IsInt({ message: 'El dv debe ser de tipo entero' })
  dv: number;

  @IsNotEmpty({ message: 'El nombre de la empresa es requerido' })
  @IsString({ message: 'El nombre de la empresa debe ser de tipo string' })
  nombre_sas: string;

  @IsNotEmpty({ message: 'El id de la persona representada es requerido' })
  @IsInt({ message: 'El id debe ser de tipo entero' })
  id_persona_representante: number;
}
