import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('Password123!', 10);

  const institution = await prisma.institution.create({
    data: {
      name: 'MEHR Demo Institution',
    },
  });

  await prisma.user.createMany({
    data: [
      {
        email: 'admin@mehr.com',
        passwordHash: password,
        role: Role.ADMIN,
        name: 'MEHR Admin',
      },
      {
        email: 'institution@mehr.com',
        passwordHash: password,
        role: Role.INSTITUTION,
        institutionId: institution.id,
        name: 'Institution Manager',
      },
      {
        email: 'user@mehr.com',
        passwordHash: password,
        role: Role.USER,
        name: 'Regular User',
      },
    ],
  });

  console.log('✅ Seed completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
