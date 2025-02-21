import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUsuarioPersonaDto {
  @IsInt({ message: 'El id de la persona debe ser de tipo entero' })
  id_persona: number;

  @IsNotEmpty({ message: 'El id de la persona es requerido' })
  @IsInt({ message: 'El id de la persona debe ser de tipo entero' })
  id_user: number;
}
