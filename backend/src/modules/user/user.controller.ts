import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from '../../dtos/user.dto';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.registerUser(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.userService.loginUser(loginUserDto);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':uId')
  async getUserById(@Param('uId') uId: string) {
    return await this.userService.getUserById(uId);
  }

  @Delete(':uId')
  async deleteUser(@Param('uId') uId: string) {
    return await this.userService.deleteUser(uId);
  }
}
