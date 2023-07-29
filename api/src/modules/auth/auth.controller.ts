import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto, RegisterAuthSchema } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ZodValidationPipe, zodToOpenAPI } from 'nestjs-zod';
import { ApiBody } from '@nestjs/swagger/dist/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @ApiBody({ schema: zodToOpenAPI(RegisterAuthSchema) })
  @UsePipes(ZodValidationPipe)
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }

  @Post('/login')
  loginUser(@Body() userObject: LoginAuthDto) {
    return this.authService.login(userObject);
  }
}
