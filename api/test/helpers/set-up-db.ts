import { petsToCreate } from './../seed-data';
import { PrismaClient } from '@prisma/client';
import { userA, userB } from 'test/seed-data';

export const setUpDb = async (prismaClient: PrismaClient) => {
  await Promise.all([
    prismaClient.user.createMany({
      data: [userA, userB]
    }),
    prismaClient.pet.createMany({ data: petsToCreate })
  ]);
};
