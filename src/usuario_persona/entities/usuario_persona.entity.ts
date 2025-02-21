import { Persona } from 'src/persona/entities/persona.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import {
  Column,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class UsuarioPersona extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Persona, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion persona',
  })
  id_persona: number;

  @OneToOne(() => Persona, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'relacion persona',
  })
  id_user: number;
}
