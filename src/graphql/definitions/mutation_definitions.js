/* eslint-disable import/no-named-default */
import { default as usersMutation } from '../users/definitions/mutation';
const Mutation = `
    type Mutation {
     ${usersMutation}
    }
`;

export default Mutation;
