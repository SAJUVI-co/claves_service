import { PlanillaSs } from 'src/planilla_ss/entities/planilla_ss.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class TiposPlantilla extends DatesBase {
  @Column()
  nombre: string;

  @ManyToOne(() => PlanillaSs, (planillaSs) => planillaSs.id)
  @JoinColumn()
  submodulo_id: number;
}
