import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Programa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  nombre: string;

  @Column({
    unique: true,
    nullable: false,
  })
  pagina_web: string;

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
