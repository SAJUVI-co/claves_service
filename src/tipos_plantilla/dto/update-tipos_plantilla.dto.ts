import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposPlantillaDto } from './create-tipos_plantilla.dto';

export class UpdateTiposPlantillaDto extends PartialType(CreateTiposPlantillaDto) {
  id: number;
}
