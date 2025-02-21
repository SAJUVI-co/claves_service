import { Cuidad } from 'src/cuidad/entities/cuidad.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Unique(['cuidad', 'pagina'])
@Entity()
export class PaginaCuidad extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Cuidad, (c) => c.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'cuidades',
  })
  cuidad: number;

  @Column({
    nullable: false,
    comment: 'Nombre de la página',
  })
  pagina: string;
}
