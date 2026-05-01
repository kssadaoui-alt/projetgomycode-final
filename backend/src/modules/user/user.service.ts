import { Injectable, BadRequestException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../../schemas/user.schema';
import { CreateUserDto, LoginUserDto } from '../../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async registerUser(createUserDto: CreateUserDto) {
    const { uName, uEmail, uAddress, uPhone, uPass, uType } = createUserDto;

    if (!uName || !uEmail || !uPass || !uAddress || !uPhone) {
      throw new BadRequestException('All fields are required');
    }

    const existingUser = await this.userModel.findOne({ uEmail });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(uPass, 10);

    const newUser = new this.userModel({
      uName,
      uEmail,
      uAddress,
      uPhone,
      uPass: hashedPassword,
      uType: uType || 'User',
    });

    await newUser.save();
    return { message: 'User registered successfully' };
  }

  async getAllUsers() {
    const users = await this.userModel.find({});
    if (users.length === 0) {
      throw new NotFoundException('No users found');
    }
    return users;
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { uEmail, uPass } = loginUserDto;

    if (!uEmail || !uPass) {
      throw new BadRequestException('All fields are required');
    }

    const user = await this.userModel.findOne({ uEmail });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordCorrect = await bcrypt.compare(uPass, user.uPass);
    if (!isPasswordCorrect) {
      throw new BadRequestException('Incorrect password');
    }

    const responseMessage = user.uType === 'User' ? 'Found User' : 'Found Admin';
    return { status: 'ok', message: responseMessage, uId: user._id };
  }

  async deleteUser(uId: string) {
    const user = await this.userModel.findByIdAndDelete(uId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { message: 'User deleted successfully' };
  }

  async getUserById(uId: string) {
    const user = await this.userModel.findById(uId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
