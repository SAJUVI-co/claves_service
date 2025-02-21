import { PlanillaSs } from 'src/planilla_ss/entities/planilla_ss.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, JoinColumn, ManyToMany } from 'typeorm';

export class TiposPlantilla extends DatesBase {
  @Column()
  nombre: string;

  @ManyToMany(() => PlanillaSs, (planillaSs) => planillaSs.id)
  @JoinColumn()
  submodulo_id: number;
}
