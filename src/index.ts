import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphqlSchemas/schema";
import { resolvers } from "./graphqlSchemas/resolvers";

createConnection();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server has started listening at ${url}`);
});
