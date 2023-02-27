import { Entity, TableInheritance, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

export type ContentCtorArgs = {
  title: string;
  description: string;
};
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Content extends BaseEntity {
  @Column()
  readonly title: string;

  @Column()
  readonly description: string;

  constructor(args: ContentCtorArgs) {
    super();
    this.title = args.title;
    this.description = args.description;
  }
}
