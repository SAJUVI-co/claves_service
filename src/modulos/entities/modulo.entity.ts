import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Modulo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
    comment: 'Nombre del modulo',
  })
  nombre: string;

  @Column({
    nullable: false,
    comment: 'Fecha de creacion del modulo',
  })
  created_at: Date;

  @Column({
    nullable: false,
    comment: 'Fecha de actualizacion del modulo',
  })
  updated_at: Date;

  @Column({
    comment: 'Fecha de eliminacion del modulo',
  })
  deleted_at: Date;
}
