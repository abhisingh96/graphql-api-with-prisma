/* eslint-disable import/no-named-default */
import { default as usersMutation } from '../users/resolvers/mutation';

const resolverMutations = () => ({
  addUser: usersMutation.addUser(),
  addAllUser: usersMutation.addAllUser(),
});

export default resolverMutations;
