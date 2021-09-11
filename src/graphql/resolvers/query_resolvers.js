/* eslint-disable import/no-named-default */
// eslint-disable-next-line import/no-named-default

import { default as usersQuery } from '../users/resolvers/query';
const resolverQueries = () => ({
  usersList: usersQuery.usersList(),
  userDetail: usersQuery.userDetail(),
});

export default resolverQueries;
