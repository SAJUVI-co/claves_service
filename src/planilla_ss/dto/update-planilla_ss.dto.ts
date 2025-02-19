import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanillaSsDto } from './create-planilla_ss.dto';

export class UpdatePlanillaSsDto extends PartialType(CreatePlanillaSsDto) {
  id: number;
}
