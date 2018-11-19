import { Entity, PrimaryGeneratedColumn, Column, TableForeignKey, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Message } from "./Message";
import { User } from "./User";

@Entity()
export class Channel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Message, message => message.channel)
    messages: Message[];

    @ManyToMany(t => User, user => user.subscribedChannels)
    @JoinTable()
    subscribers: User[];
}