import path = require("path");
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Content } from "./entity/Content";
import { Photo } from "./entity/Photo";
import { Post } from "./entity/Post";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5439,
  username: "postgres",
  password: "postgres",
  database: "test_app",
  synchronize: true,
  logging: false,
  entities: [Content, Photo, Post],
  migrations: [path.join(__dirname, "migration", "*.*")],
  migrationsRun: true,
  subscribers: [],
});
