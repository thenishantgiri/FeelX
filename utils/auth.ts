import { auth } from '@clerk/nextjs';
import { prisma } from './db';

// export const getUserByClerkID = async (select = { id: true }) => {
export const getUserFromClerkID = async (select = { id: true }) => {
  const { userId }: { userId: string | null } = auth();
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
    select,
  });

  return user;
};
