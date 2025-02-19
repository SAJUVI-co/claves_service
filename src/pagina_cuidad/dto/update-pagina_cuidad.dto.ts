import { PartialType } from '@nestjs/mapped-types';
import { CreatePaginaCuidadDto } from './create-pagina_cuidad.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePaginaCuidadDto extends PartialType(CreatePaginaCuidadDto) {
  @IsNotEmpty({ message: 'El id de la cuidad es requerido' })
  @IsInt({ message: 'El id de la cuidad debe ser un número entero' })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fechad de creacion debe ser de tipo date' })
  craeted_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser de tipo date' })
  updated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser de tipo date' })
  delted_at: Date;
}
