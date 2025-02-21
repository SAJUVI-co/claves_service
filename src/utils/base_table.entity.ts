import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

export abstract class SubModuleBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  clave_ingreso: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
