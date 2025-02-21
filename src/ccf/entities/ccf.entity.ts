import { ModuleBase } from 'src/utils/base_table.entity';
import { Column } from 'typeorm';

export class Ccf extends ModuleBase {
  @Column()
  correo_electronico: string;

  @Column()
  codigo_empresa: string;
}
