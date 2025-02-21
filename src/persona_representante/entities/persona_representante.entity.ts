import { Persona } from 'src/persona/entities/persona.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PersonaRepresentante extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
    comment: 'dv',
  })
  nit: number;

  @Column({
    nullable: false,
    comment: 'dv',
  })
  dv: number;

  @Column({
    nullable: false,
    unique: true,
    comment: 'dv',
  })
  nombre_sas: string;

  @OneToOne(() => Persona, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion del representante',
  })
  id_persona_representante: number;

  @OneToOne(() => Persona, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    unique: true,
    comment: 'relacion de la persona juridica',
  })
  id_persona: number;
}
