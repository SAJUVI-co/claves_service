import { Cuidad } from 'src/cuidad/entities/cuidad.entity';
import { ModuleBase } from 'src/utils/base_table.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Alcaldia extends ModuleBase {
  @OneToOne(() => Cuidad)
  @JoinColumn()
  @Column({
    nullable: false,
  })
  sucursal: number;

  @Column({
    comment: 'Clave de exogenna',
  })
  clave_exogena: string;

  @Column({
    nullable: false,
    comment: 'Clave de ica',
  })
  clave_ica: string;

  @Column({
    nullable: false,
    comment: 'Placa',
  })
  placa: number;
}
