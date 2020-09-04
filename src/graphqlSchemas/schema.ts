import { gql } from "apollo-server";

export const typeDefs = gql`
  type BlogPostType {
    bid: String
    wid: String
    post: String
    postDate: String
    writer: WriterType
  }

  type WriterType {
    wid: String
    name: String
    password: String
    joiningDate: String
    posts: [BlogPostType]
  }

  type Query {
    BlogPosts: [BlogPostType]
    Writer(wid: String!): WriterType
  }

  type Mutation {
    addBlog(post: String!, wid: String): BlogPostType
    addWriter(name: String!, password: String!): WriterType
  }
`;
