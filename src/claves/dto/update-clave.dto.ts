import { PartialType } from '@nestjs/mapped-types';
import { CreateClaveDto } from './create-clave.dto';

export class UpdateClaveDto extends PartialType(CreateClaveDto) {
  id: number;
}
