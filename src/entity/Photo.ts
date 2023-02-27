import { ChildEntity, Column } from "typeorm";
import { Content, ContentCtorArgs } from "./Content";
import { Traced } from "./TraceableEntity";

type PhotoCtorArgs = ContentCtorArgs & {
  size: string;
};
class BasePhoto extends Content {
  @Column()
  readonly size: string;

  constructor(args: PhotoCtorArgs) {
    super(args);

    this.size = args.size;
  }
}

@ChildEntity()
export class Photo extends Traced(BasePhoto) {}
