import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BlogPosts {
  @PrimaryGeneratedColumn()
  bid: number;
  @Column()
  wid: string;
  @Column()
  post: string;
  @Column()
  postDate: string;
}
