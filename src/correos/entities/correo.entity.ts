import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Correo extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: 'correo',
  })
  email: string;

  @Column({
    nullable: false,
    comment: 'password',
  })
  password: string;
}
