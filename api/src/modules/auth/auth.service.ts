import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../rest/services/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { password, name, email } = userObject;
    const plainToHash: string = await hash(password, 10);
    const foundUser = await this.prisma.user.findUnique({
      where: { email: userObject.email }
    });
    if (foundUser) {
      throw new BadRequestException();
    }
    try {
      await this.prisma.user.create({
        data: {
          name,
          email,
          password: plainToHash
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async login(userObject: LoginAuthDto) {
    const foundUser = await this.prisma.user.findUnique({
      where: { email: userObject.email }
    });
    if (!foundUser) {
      throw new NotFoundException();
    }
    const checkPassword = await compare(
      userObject.password,
      foundUser.password
    );
    if (!checkPassword) {
      throw new UnauthorizedException();
    }
    const token = await this.jwtService.signAsync({
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email
    });
    const data = {
      name: foundUser.name,
      email: foundUser.email,
      token
    };
    return data;
  }
}
