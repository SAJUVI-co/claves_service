import { PaginaCuidad } from 'src/pagina_cuidad/entities/pagina_cuidad.entity';
import { SubModuleBase } from 'src/utils/submodules_base';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class CamaraComercio extends SubModuleBase {
  @OneToMany(() => PaginaCuidad, (pa) => pa.id)
  @JoinColumn()
  @Column({
    nullable: false,
    comment: 'sucursal',
  })
  sucursal: number;
}
