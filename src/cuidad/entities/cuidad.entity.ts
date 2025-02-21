import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Cuidad extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'Nombre de la cuidad',
  })
  cuidad: string;
}
