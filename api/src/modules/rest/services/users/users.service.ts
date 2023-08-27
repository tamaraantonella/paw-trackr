import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    });
  }

  async findOwnDetails(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        postalCode: true,
        phone: true,
        address: true,
        city: true,
        created: true,
        modified: true
      }
    });
  }
}
