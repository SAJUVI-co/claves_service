import { PartialType } from '@nestjs/mapped-types';
import { CreateCamaraComercioDto } from './create-camara_comercio.dto';

export class UpdateCamaraComercioDto extends PartialType(CreateCamaraComercioDto) {
  id: number;
}
