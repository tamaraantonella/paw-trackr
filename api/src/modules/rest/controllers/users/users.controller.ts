import {
  Controller,
  Get,
  UnauthorizedException,
  UseGuards
} from '@nestjs/common';
import {
  AuthPayload,
  JwtPayload
} from 'src/modules/auth/decorators/jwt-payload.decorator';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { UsersService } from '../../services/users/users.service';
import { UserDetailDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/me')
  @UseGuards(JwtAuthGuard)
  async getOwnDetails(
    @JwtPayload() payload: AuthPayload
  ): Promise<UserDetailDto> {
    if (!payload.id) {
      throw new UnauthorizedException();
    }
    return this.usersService.findOwnDetails(payload.id);
  }
}
