import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/User"
import { Task } from "./entity/Task"
import dotenv from 'dotenv'
dotenv.config({path:"./.env"})

export const AppDataSource = new DataSource({
    type: "postgres",
    host:process.env.DB_HOST,
    port:5432,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: "TaskManager",
    synchronize: true,
    logging: false,
    entities: [Users,Task],
    migrations: [],
    subscribers: [],
})
