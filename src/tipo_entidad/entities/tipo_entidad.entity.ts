import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoEntidad extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: 'nombre del tipo de entidad',
  })
  nombre: string;

  @Column({
    nullable: false,
    comment: 'pagina web de la entidad',
  })
  pagina_web: string;

  @Column({
    nullable: false,
    comment: 'id del submodulo que lo usa',
  })
  submodulo_id: number;
}
