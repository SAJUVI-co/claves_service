import { Programa } from 'src/programas/entities/programa.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import { JoinColumn, OneToMany } from 'typeorm';

export class ContablePrograma extends DatesBase {
  @OneToMany(() => Programa, (p) => p.id)
  @JoinColumn()
  id_programa: number;

  @JoinColumn()
  id_contable: number;
}
