import { getConnection } from "typeorm";
import { User } from "../entities/User";
import { Channel } from "../entities/Channel";
import { Message } from "../entities/Message";

export class UserModel {
    async getUserById(id: number) {
        return await getConnection()
            .createQueryBuilder()
            .select('user')
            .from(User, 'user')
            .where('channel.id = :id', {id})
            .getOne();
    }

    async getAllUsers() {
        return await getConnection()
            .createQueryBuilder()
            .select('user')
            .from(User, 'user')
            .getMany();
    }

    async getUsersForChannelId(id: number) {
        return await getConnection()
            .createQueryBuilder()
            .select('user')
            .from(User, 'user')
            .where(qb => qb.select('channel').from(Channel, 'channel'))
            .getMany();
    }

    async getMessagesForUserId(id: number) {
        return await getConnection()
            .createQueryBuilder()
            .select('messages')
            .from(Message, 'message')
            .where('message.authorId = :id', {id})
            .getMany();
    }
}