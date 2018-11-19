import { gql } from 'graphql';
export const ChannelType = gql`
    type Channel {
        id: ID!;
        name: string;
        messages: [Message];
        subscribers: [User];
    }
`;