import { ChildEntity, Column } from "typeorm";
import { Content, ContentCtorArgs } from "./Content";
import { Traced } from "./TraceableEntity";

type PostCtorArgs = ContentCtorArgs & {
  viewCount: number;
};
class BasePost extends Content {
  @Column()
  readonly viewCount: number;

  constructor(args: PostCtorArgs) {
    super(args);

    this.viewCount = args.viewCount;
  }
}

@ChildEntity()
export class Post extends Traced(BasePost) {}
