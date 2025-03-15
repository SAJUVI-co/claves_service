import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El user_id es requerido' })
  @IsInt({ message: 'El user_id debe ser de tipo entero' })
  user_id: number;

  @IsNotEmpty({ message: 'El user_id es requerido' })
  @IsString({ message: 'El user_id debe ser de tipo string' })
  username: string;
}
