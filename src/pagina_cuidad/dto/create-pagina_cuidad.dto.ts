import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaginaCuidadDto {
  @IsNotEmpty({ message: 'El nombre de la cuidad es requerido' })
  @IsString({ message: 'El nombre de la cuidad debe ser un texto' })
  nombre: string;
}
