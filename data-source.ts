import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserMessage } from "./entity/user-message.entity";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "admin",            
    password: "12345678",          
    database: "NexGendb",
    synchronize: true,
    logging: false,
    entities: [UserMessage],
    options: {
        encrypt: false
    },
    extra: {
        trustServerCertificate: true,
    }
});
