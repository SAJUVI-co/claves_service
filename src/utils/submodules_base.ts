import { Column } from 'typeorm';
import { ModuleBase } from './base_table.entity';

export abstract class SubModuleBase extends ModuleBase {
  @Column({
    nullable: false,
  })
  usuario: string;
}
