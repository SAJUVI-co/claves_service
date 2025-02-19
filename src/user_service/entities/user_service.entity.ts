import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class UserService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_user: number;
}
