import { PartialType } from '@nestjs/mapped-types';
import { CreatePaginaCuidadDto } from './create-pagina_cuidad.dto';

export class UpdatePaginaCuidadDto extends PartialType(CreatePaginaCuidadDto) {
  id: number;
}
