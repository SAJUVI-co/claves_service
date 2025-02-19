import { PartialType } from '@nestjs/mapped-types';
import { CreateContadorPublicoDto } from './create-contador_publico.dto';

export class UpdateContadorPublicoDto extends PartialType(CreateContadorPublicoDto) {
  id: number;
}
