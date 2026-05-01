import { Document } from 'mongoose';
export declare class User extends Document {
    uName: string;
    uEmail: string;
    uAddress: string;
    uPhone: string;
    uPass: string;
    uType: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any, {}> & User & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<User> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
