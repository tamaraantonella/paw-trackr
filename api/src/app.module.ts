import { Module } from '@nestjs/common';
import { RestModule } from './modules/rest/rest.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [RestModule, AuthModule, PrismaModule]
})
export class AppModule {}
