import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const usersList = () => {
  return async (_, args) => {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw error.message;
    }
  };
};

const userDetail = () => {
  return async (_, args) => {
    try {
      const { userId } = args;
      return await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      throw error.message;
    }
  };
};

export default { usersList, userDetail };
