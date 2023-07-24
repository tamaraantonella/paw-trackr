import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [UsersService]
})
export class RestModule {}
