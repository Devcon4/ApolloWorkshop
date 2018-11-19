import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Message } from "./Message";
import { Channel } from "./Channel";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @ManyToOne(type => Message, message => message.authorId)
    messages: Message[];

    @ManyToOne(t => Channel, channel => channel.subscribers)
    subscribedChannels: Channel[];
}