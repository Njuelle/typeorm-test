import { get } from "lodash";
import { Column } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Constructor } from "../types/Constructor";

import { BaseEntity } from "./BaseEntity";

export function Traced<
  EntityCreateArgs extends Record<string, unknown>,
  TraceableEntity extends Constructor<BaseEntity>
>(Entity: TraceableEntity) {
  type TracedEntityUpdateArgs = EntityCreateArgs | { isDeleted: boolean };
  class TracedEntity extends Entity {
    @Column({ type: "int", default: 1 })
    readonly versionNumber: number;

    @Column({ type: "uuid", generated: "uuid" })
    readonly commonEntityId: string;

    @Column({ default: false })
    readonly isDeleted: boolean;

    @Column()
    readonly commonEntityCreationDate: Date;

    constructor(...args: any[]) {
      super(...args);

      this.versionNumber = args[0].versionNumber ?? 1;
      this.commonEntityId = args[0].commonEntityId ?? uuidv4();
      this.isDeleted = args[0].isDeleted ?? false;
      this.commonEntityCreationDate =
        args[0].commonEntityCreationDate ?? new Date();
    }

    public update(props: TracedEntityUpdateArgs) {
      if (!this.shouldUpdate(props)) {
        return undefined;
      }

      return new TracedEntity({
        ...this,
        ...props,
        versionNumber: this.versionNumber + 1,
        id: uuidv4(),
        commonEntityCreationDate: this.commonEntityCreationDate,
      }) as this;
    }

    public delete() {
      return this.update({ isDeleted: true });
    }

    private shouldUpdate(props: TracedEntityUpdateArgs) {
      if (Object.keys(props).length === 0) {
        return false;
      }

      return Object.keys(props).some(
        (key) => get(this, key) !== get(props, key)
      );
    }
  }

  return TracedEntity;
}
