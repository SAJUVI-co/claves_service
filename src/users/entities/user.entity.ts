import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: true,
    comment: 'Id del usuario almacenado en el servicio',
  })
  user_id: number;
}
