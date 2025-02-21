import { Contable } from 'src/contable/entities/contable.entity';
import { Programa } from 'src/programas/entities/programa.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class ContablePrograma extends DatesBase {
  @OneToMany(() => Programa, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion del programa',
  })
  id_programa: number;

  @OneToOne(() => Contable, (c) => c.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion tabla contable',
  })
  id_contable: number;
}
