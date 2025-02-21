import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Programa extends DatesBase {
  @PrimaryColumn()
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
}
