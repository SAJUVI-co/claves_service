import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class SubModuleBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  clave_ingreso: string;
}
