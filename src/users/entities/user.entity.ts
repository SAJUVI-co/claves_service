import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    comment: 'Id del usuario almacenado en el servicio',
  })
  user_id: number;
}
