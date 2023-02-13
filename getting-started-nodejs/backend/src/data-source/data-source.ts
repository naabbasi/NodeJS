import {DataSource} from "typeorm";
import {User} from "@entities/user.js";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "qbill_dev",
    password: "Qt@DeV",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        console.log("Database has been initialized...")
    })
    .catch((error) => console.log(error))