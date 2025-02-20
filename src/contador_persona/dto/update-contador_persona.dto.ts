import { PartialType } from '@nestjs/mapped-types';
import { CreateContadorPersonaDto } from './create-contador_persona.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateContadorPersonaDto extends PartialType(
  CreateContadorPersonaDto,
) {
  @IsNotEmpty({ message: 'El id de la persona no puede estar vacío' })
  @IsInt({ message: 'El id de la persona debe ser un número entero' })
  id: number;
}
