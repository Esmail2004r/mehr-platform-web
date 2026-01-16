import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Admin
  const adminPassword = await bcrypt.hash('Admin123!', 10);
  await prisma.user.create({
    data: {
      email: 'admin@mehr.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
    },
  });

  // Institution user
  const institutionPassword = await bcrypt.hash('Institution123!', 10);
  await prisma.user.create({
    data: {
      email: 'institution@mehr.com',
      passwordHash: institutionPassword,
      role: 'INSTITUTION',
    },
  });

  // Regular user
  const userPassword = await bcrypt.hash('User123!', 10);
  await prisma.user.create({
    data: {
      email: 'user@mehr.com',
      passwordHash: userPassword,
      role: 'USER',
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
