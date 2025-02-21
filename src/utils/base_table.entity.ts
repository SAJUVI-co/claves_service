import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { DatesBase } from './base_dates.entity';

export abstract class SubModuleBase extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  clave_ingreso: string;
}
