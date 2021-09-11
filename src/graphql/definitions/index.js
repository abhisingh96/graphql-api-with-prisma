import Mutation from './mutation_definitions';
import Query from './query_definitions';
import Scalar from './scalar_definitions';
import { UsersInput } from './input_definitions';

const typeDef = [
  UsersInput,
  Mutation,
  Query,
  Scalar,
  `schema {
        mutation: Mutation,
        query : Query,
    }`,
];
export default typeDef;
