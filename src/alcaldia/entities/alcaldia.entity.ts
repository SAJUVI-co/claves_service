import { PaginaCuidad } from 'src/pagina_cuidad/entities/pagina_cuidad.entity';
import { ModuleBase } from 'src/utils/base_table.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';

export class Alcaldia extends ModuleBase {
  @OneToOne(() => PaginaCuidad)
  @JoinColumn()
  @Column({
    nullable: false,
  })
  cuidad: number;

  @Column({
    nullable: false,
    comment: 'Pagina web',
  })
  pagina_web: string;

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
