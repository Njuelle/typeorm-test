import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export abstract class BaseEntity {
  @PrimaryColumn("uuid")
  readonly id: string;

  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly lastUpdatedAt: Date;

  constructor(id?: string) {
    this.id = id ?? uuidv4();

    const now = new Date();
    this.createdAt = now;
    this.lastUpdatedAt = now;
  }
}
