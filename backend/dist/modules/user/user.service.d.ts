import { Model } from 'mongoose';
import { User } from '../../schemas/user.schema';
import { CreateUserDto, LoginUserDto } from '../../dtos/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    registerUser(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    getAllUsers(): Promise<(import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    loginUser(loginUserDto: LoginUserDto): Promise<{
        status: string;
        message: string;
        uId: import("mongoose").Types.ObjectId;
    }>;
    deleteUser(uId: string): Promise<{
        message: string;
    }>;
    getUserById(uId: string): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
