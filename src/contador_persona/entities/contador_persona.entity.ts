import { Persona } from 'src/persona/entities/persona.entity';
import { DatesBase } from 'src/utils/base_dates.entity';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class ContadorPersona extends DatesBase {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Persona, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'Relacion persona',
  })
  id_contador: number;

  @OneToOne(() => Persona, (p) => p.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'Relacion persona',
  })
  @JoinColumn()
  id_persona: number;

  @Column({
    nullable: false,
    comment: 'Relacion persona',
  })
  targeta_profesional: string;
}
