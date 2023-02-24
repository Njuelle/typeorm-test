import { ChildEntity, Column } from "typeorm";
import { Content } from "./Content";
import { Traced } from "./TraceableEntity";

class BasePost extends Content {
  @Column()
  viewCount: number;
}

@ChildEntity()
export class Post extends Traced(BasePost) {}
