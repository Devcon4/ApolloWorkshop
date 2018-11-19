import { Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Channel } from "./Channel";
import { User } from "./User";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Channel, channel => channel.Messages)
    channel: Channel;

    @CreateDateColumn()
    createdDate: Date;

    @ManyToOne(type => User, user => user.Messages)
    authorId: number;
}