import { ModuleBase } from 'src/utils/base_table.entity';
import { Column } from 'typeorm';

export class Ccf extends ModuleBase {
  @Column({
    nullable: false,
    comment: 'correo electronico de la ccf',
  })
  correo_electronico: string;

  @Column({
    nullable: false,
    comment: 'codigo de la empresa',
  })
  codigo_empresa: string;
}
