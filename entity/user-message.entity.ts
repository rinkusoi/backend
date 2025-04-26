import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserMessage {
    @PrimaryGeneratedColumn('increment')
    id: number | null=null;

    @Column('varchar', { length: 50 })
    name: string | null=null;
}
