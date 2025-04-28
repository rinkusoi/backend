import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export interface UserMessage {
    _id?: string;
    name: string;
    userName: string;
    userLastName: string;
    userEmail: string;
    phoneNumber: string;
    message: string;
}
