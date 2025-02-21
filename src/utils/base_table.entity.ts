import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { DatesBase } from './base_dates.entity';

export abstract class ModuleBase extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  clave_ingreso: string;
}
