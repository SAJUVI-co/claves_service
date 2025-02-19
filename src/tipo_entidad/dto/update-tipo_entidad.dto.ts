import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEntidadDto } from './create-tipo_entidad.dto';

export class UpdateTipoEntidadDto extends PartialType(CreateTipoEntidadDto) {
  id: number;
}
