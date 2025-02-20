import { PartialType } from '@nestjs/mapped-types';
import { CreateArlDto } from './create-arl.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateArlDto extends PartialType(CreateArlDto) {
  @IsNotEmpty({ message: 'El id de la ARL es requerido' })
  @IsInt({ message: 'El id de la ARL debe ser un número entero' })
  id: number;
}
