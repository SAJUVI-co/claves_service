import { PartialType } from '@nestjs/mapped-types';
import { CreateContableProgramaDto } from './create-contable_programa.dto';

export class UpdateContableProgramaDto extends PartialType(
  CreateContableProgramaDto,
) {
  id: number;
}
