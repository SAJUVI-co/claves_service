import { Modulo } from 'src/modulos/entities/modulo.entity';
import { Persona } from 'src/persona/entities/persona.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PersonaModuloSubmodulo extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: 'relacion de los submodulos',
  })
  id_submodulo: number;

  @OneToMany(() => Modulo, (m) => m.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion de los modulos',
  })
  id_modulo: number;

  @OneToOne(() => Persona, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion de las personas',
  })
  id_persona: number;
}
