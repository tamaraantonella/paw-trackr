import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { LoginAuthSchema } from './login-auth.dto';

export const RegisterAuthSchema = z
  .object({
    name: z.string().min(3).max(255)
  })
  .merge(LoginAuthSchema);

export class RegisterAuthDto extends createZodDto(RegisterAuthSchema) {}
