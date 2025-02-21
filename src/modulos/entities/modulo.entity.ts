import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Modulo extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
    comment: 'Nombre del modulo',
  })
  nombre: string;
}
