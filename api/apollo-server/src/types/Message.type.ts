import { gql } from 'graphql';
export const MessageType = gql`
    type Message {
        id: ID!
        channel: Channel!
        createdDate: string!
        authorId: ID!
    }
`;