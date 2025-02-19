import { PartialType } from '@nestjs/mapped-types';
import { CreateContableDto } from './create-contable.dto';

export class UpdateContableDto extends PartialType(CreateContableDto) {
  id: number;
}
