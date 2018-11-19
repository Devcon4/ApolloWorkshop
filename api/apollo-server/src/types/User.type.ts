import { gql } from 'graphql';
export const userType = gql`
    type User {
        id: ID!
        username: string!
        messages: [Message]
        subscribedChannels: [Channel]
    }
`;