import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const addUser = () => {
  return async (_, args) => {
    try {
      const { input } = args;
      const addedUsers = await prisma.user.create({ data: input });
      if (addedUsers) {
        return 'User Added Successfully';
      }
    } catch (error) {
      throw error.message;
    }
  };
};

const addAllUser = () => {
  return async (_, args) => {
    try {
      const { input } = args;
      const addedUsers = await prisma.user.createMany({
        data: input,
        skipDuplicates: true,
      });
      if (addedUsers) {
        return 'Users Added Successfully';
      }
    } catch (error) {
      throw error.message;
    }
  };
};

export default { addUser, addAllUser };
