import { ModuleBase } from 'src/utils/base_table.entity';
import { Column } from 'typeorm';

export class Dian extends ModuleBase {
  @Column({
    comment: 'Clave de la firma',
  })
  clave_firma: string;
}
