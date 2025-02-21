import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateContableProgramaDto {
  @IsNotEmpty({ message: 'El programa no puede estar vacio' })
  @IsInt({ message: 'El programa debe ser de tipo number' })
  id_programa: number;

  @IsNotEmpty({ message: 'El contable no puede estar vacio' })
  @IsInt({ message: 'El contable debe ser de tipo number' })
  id_contable: number;
}
