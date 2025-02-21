import { UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';

export abstract class DatesBase {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
