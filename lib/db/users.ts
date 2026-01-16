import { prisma } from '@/lib/prisma';

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      role: true,
      institutionId: true,
    },
  });
}
