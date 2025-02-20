import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class PaginaCuidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'Nombre de la cuidad',
  })
  cuidad: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
