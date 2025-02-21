import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCuidadDto {
  @IsNotEmpty({ message: 'El nombre de la cuidad es requerido' })
  @IsString({ message: 'El nombre de la cuidad debe ser un texto' })
  cuidad: string;
}
