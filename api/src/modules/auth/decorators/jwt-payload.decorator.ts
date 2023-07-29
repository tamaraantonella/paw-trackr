import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException
} from '@nestjs/common';

export interface AuthPayload {
  id: number;
  name: string;
  email: string;
}

export const JwtPayload = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as unknown;
    if (typeof request !== 'object' || !('user' in request)) {
      throw new UnauthorizedException();
    }

    return request.user as AuthPayload;
  }
);
