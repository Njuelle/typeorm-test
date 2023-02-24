import { ChildEntity, Column } from "typeorm";
import { Content } from "./Content";
import { Traced } from "./TraceableEntity";

class BasePhoto extends Content {
  @Column()
  size: string;

  @Column()
  foobar: string;
}

@ChildEntity()
export class Photo extends Traced(BasePhoto) {}
