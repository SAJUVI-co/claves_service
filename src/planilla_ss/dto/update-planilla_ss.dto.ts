import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanillaSsDto } from './create-planilla_ss.dto';
import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePlanillaSsDto extends PartialType(CreatePlanillaSsDto) {
  @IsNotEmpty({
    message: 'El id de la planilla de seguridad social no puede estar vacio',
  })
  @IsInt({
    message:
      'El id de la planilla de seguridad social debe ser un numero entero',
  })
  id: number;

  @IsOptional()
  @IsDate({ message: 'La fecha de creacion debe ser una fecha valida' })
  created_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de actualizacion debe ser una fecha valida' })
  udpated_at: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de eliminacion debe ser una fecha valida' })
  deleted_at: Date;
}
