import { PartialType } from '@nestjs/mapped-types';
import { CreateAlcaldiaDto } from './create-alcaldia.dto';

export class UpdateAlcaldiaDto extends PartialType(CreateAlcaldiaDto) {
  id: number;
}
