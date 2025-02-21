import { Modulo } from 'src/modulos/entities/modulo.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class PersonaModuloSubmodulo extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: 'relacion de los submodulos',
  })
  id_submodulo: number;

  @OneToOne(() => Modulo, (m) => m.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion de los modulos',
  })
  id_modulo: number;

  @Column({
    nullable: false,
    comment: 'relacion de las personas',
  })
  id_persona: number;
}
