/* eslint-disable import/no-named-default */
import { default as usersQuery } from '../users/definitions/query';
const Query = `
    type Query {
        ${usersQuery}
    }
`;

export default Query;
