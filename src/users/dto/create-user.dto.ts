import { IsArray, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El user_id es requerido' })
  @IsInt({ message: 'El user_id debe ser de tipo entero' })
  user_id: number;

  @IsNotEmpty({ message: 'Persona es requerido' })
  @IsArray({ message: 'El personas debe ser de tipo entero' })
  personas: number[];
}
