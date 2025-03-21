import { Column, Entity, PrimaryColumn } from 'typeorm';
import { TipoDocumento, TipoPersona } from '../dto/create-persona.dto';
import { DatesBase } from 'src/utils/base_dates.entity';

@Entity()
export class Persona extends DatesBase {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TipoPersona,
    nullable: false,
    comment: 'Tipo de documento de la persona',
  })
  tipo_persona: string;

  @Column({
    nullable: false,
    unique: true,
    comment: 'Nombre de la persona',
  })
  nombre: string;

  @Column({
    type: 'enum',
    enum: TipoDocumento,
    nullable: false,
    comment: 'Tipo de documento de la persona',
  })
  tipo_documento: string;

  @Column({
    unique: true,
    nullable: false,
    comment: 'Numero de documento de la persona',
  })
  numero_documento: string;

  @Column({
    nullable: false,
    comment: 'Digito de verificacion del documento',
  })
  dv: number;
}
