import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto, User } from '@bitig/shared';
import { LocalAuthGuard } from './local-auth.guard';
import { UsersService } from '../users/users.service';

export interface PassportRequest extends ExpressRequest {
  user?: User;
}

export type AuthenticatedRequest = PassportRequest;

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: AuthenticatedRequest) {
    if (!req.user) {
      throw new Error('User not found in request');
    }
    return this.authService.login(req.user);
  }
}
