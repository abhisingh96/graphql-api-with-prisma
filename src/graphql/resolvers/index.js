import resolverMutations from './mutation_resolvers';
import resolverQueries from './query_resolvers';

const GraphQLJSON = require('graphql-type-json');

const resolvers = {
  Mutation: resolverMutations(),
  Query: resolverQueries(),
  JSON: GraphQLJSON,
};

export default resolvers;
