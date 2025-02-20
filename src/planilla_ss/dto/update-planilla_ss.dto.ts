import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanillaSsDto } from './create-planilla_ss.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdatePlanillaSsDto extends PartialType(CreatePlanillaSsDto) {
  @IsNotEmpty({
    message: 'El id de la planilla de seguridad social no puede estar vacio',
  })
  @IsInt({
    message:
      'El id de la planilla de seguridad social debe ser un numero entero',
  })
  id: number;
}
