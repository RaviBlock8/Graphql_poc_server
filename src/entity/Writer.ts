import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Writer {
  @PrimaryGeneratedColumn()
  wid: number;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  joiningDate: string;
}
