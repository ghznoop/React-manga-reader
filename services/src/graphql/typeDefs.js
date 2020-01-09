import { gql } from "apollo-server";

const typeDefs = gql`
type Manga {
    _id: ID!
    image: String!
    title: String!
}
type Query {
    mangas: [Manga]!
}
`;

export default typeDefs;