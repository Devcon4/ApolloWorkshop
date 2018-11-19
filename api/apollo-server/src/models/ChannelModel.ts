import { getConnection } from "../connectors/typeorm";
import { Channel } from "../entities/Channel";
import { User } from "../entities/User";

export class ChannelModel {
    async getChannelById(id: number) {
        return await getConnection()
            .createQueryBuilder()
            .select('channel')
            .from(Channel, 'channel')
            .where('channel.id = :id', {id})
            .getOne();
    }

    async getAllChannels() {
        return await getConnection()
            .createQueryBuilder()
            .select('channel')
            .from(Channel, 'channel')
            .getMany();
    }
}