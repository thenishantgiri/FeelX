import { getUserFromClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';

const getEntries = async () => {
  const user = await getUserFromClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      analysis: true,
    },
  });

  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();
  console.log('entries', entries);
  return <div>Journal Page</div>;
};

export default JournalPage;
