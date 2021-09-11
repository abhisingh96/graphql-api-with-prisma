const usersMutationDefinitions = `
    addUser(
        input: UsersInput!
    ): String

    addAllUser(
        input: [UsersInput!]!
    ): String
    
`;

export default usersMutationDefinitions;
