import { PartialType } from '@nestjs/mapped-types';
import { CreateCcfDto } from './create-ccf.dto';

export class UpdateCcfDto extends PartialType(CreateCcfDto) {
  id: number;
}
