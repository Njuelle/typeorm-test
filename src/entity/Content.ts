import { Entity, TableInheritance, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Content extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  foobar: string;
}
