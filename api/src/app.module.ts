import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './modules/rest/rest.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [RestModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
