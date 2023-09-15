import { PrismaService } from 'src/modules/prisma/prisma.service';
import { setUpDb } from 'test/helpers/set-up-db';

const prisma = new PrismaService();

async function main() {
  await setUpDb(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
