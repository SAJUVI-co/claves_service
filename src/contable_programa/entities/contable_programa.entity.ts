import { Programa } from 'src/programas/entities/programa.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, JoinColumn, OneToMany } from 'typeorm';

export class ContablePrograma extends DatesBase {
  @OneToMany(() => Programa, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion del programa',
  })
  id_programa: number;

  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion tabla contable',
  })
  id_contable: number;
}
