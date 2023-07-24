import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const LoginAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(12)
});

export class LoginAuthDto extends createZodDto(LoginAuthSchema) {}
