import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './definitions';
import resolvers from './resolvers/index';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
