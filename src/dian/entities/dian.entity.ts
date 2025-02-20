import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Dian {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: 'Clave del usuario',
  })
  clave_ingreso: string;

  @Column({
    comment: 'Clave de la firma',
  })
  clave_firma: string;
}
