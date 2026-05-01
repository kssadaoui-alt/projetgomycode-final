import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from '../../dtos/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        status: string;
        message: string;
        uId: import("mongoose").Types.ObjectId;
    }>;
    getAllUsers(): Promise<(import("mongoose").Document<unknown, {}, import("../../schemas/user.schema").User, {}, {}> & import("../../schemas/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getUserById(uId: string): Promise<import("mongoose").Document<unknown, {}, import("../../schemas/user.schema").User, {}, {}> & import("../../schemas/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    deleteUser(uId: string): Promise<{
        message: string;
    }>;
}
