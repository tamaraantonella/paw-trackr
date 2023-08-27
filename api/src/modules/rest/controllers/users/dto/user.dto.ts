import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UserDetailSchema = z.object({
  id: z.number(),
  name: z.string().min(3).max(255),
  email: z.string().email(),
  created: z.date(),
  modified: z.date(),
  city: z.string().nullish(),
  postalCode: z.string().nullish(),
  address: z.string().nullish(),
  phone: z.string().nullish()
});

export class UserDetailDto extends createZodDto(UserDetailSchema) {}
