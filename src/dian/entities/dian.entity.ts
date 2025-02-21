import { SubModuleBase } from 'src/utils/base_table.entity';
import { Column } from 'typeorm';

export class Dian extends SubModuleBase {
  @Column({
    comment: 'Clave de la firma',
  })
  clave_firma: string;
}
