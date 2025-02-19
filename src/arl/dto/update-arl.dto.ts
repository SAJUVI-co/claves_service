import { PartialType } from '@nestjs/mapped-types';
import { CreateArlDto } from './create-arl.dto';

export class UpdateArlDto extends PartialType(CreateArlDto) {
  id: number;
}
