import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Alcaldia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: 'El id de la cuidad',
  })
  cuidad: number;

  @Column({
    nullable: false,
    comment: 'Pagina web',
  })
  pagina_web: string;

  @Column({
    nullable: false,
    comment: 'La clave de ingreso es requerida',
  })
  clave_ingreso: string;

  @Column({
    comment: 'Clave de exogenna',
  })
  clave_exogena: string;

  @Column({
    nullable: false,
    comment: 'Clave de ica',
  })
  clave_ica: string;

  @Column({
    nullable: false,
    comment: 'Placa',
  })
  placa: number;
}
