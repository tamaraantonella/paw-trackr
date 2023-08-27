import { Prisma } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export const userA: Prisma.UserUncheckedCreateInput = {
  id: uuidv4(),
  email: 'tamara@hotmail.com',
  name: 'Tamara',
  address: '1234 Main St',
  created: new Date(),
  modified: new Date(),
  phone: '1234567890',
  postalCode: '12345',
  city: 'Lima'
};

export const userB: Prisma.UserUncheckedCreateInput = {
  id: uuidv4(),
  email: 'jesus@hotmail.com',
  name: 'Jesus',
  address: '1234 Main St',
  created: new Date(),
  modified: new Date(),
  phone: '1234567890',
  postalCode: '12345',
  city: 'New York'
};

export const petsToCreate: Prisma.PetUncheckedCreateInput[] = [
  {
    age: 6,
    breed: 'Unknown',
    name: 'Lulu',
    type: 'Dog',
    ownerId: userA.id,
    image: null
  },
  {
    age: 9,
    breed: 'Unknown',
    name: 'Lisa',
    type: 'Dog',
    ownerId: userA.id,
    image: null
  },
  {
    age: 1,
    breed: 'Unknown',
    name: 'Bobby',
    type: 'Dog',
    ownerId: userB.id,
    image: null
  }
];
