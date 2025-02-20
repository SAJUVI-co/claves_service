import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class PlanillaSs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: 'Usuario de la planilla',
  })
  usuario: string;

  @Column({
    nullable: false,
    comment: 'Clave de ingreso de la planilla',
  })
  clave_ingreso: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
