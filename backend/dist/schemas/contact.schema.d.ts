import { Document } from 'mongoose';
export declare class ContactMessage extends Document {
    cName: string;
    cEmail: string;
    cPhone: string;
    cMessage: string;
    cRead: boolean;
}
export declare const ContactMessageSchema: import("mongoose").Schema<ContactMessage, import("mongoose").Model<ContactMessage, any, any, any, Document<unknown, any, ContactMessage, any, {}> & ContactMessage & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactMessage, Document<unknown, {}, import("mongoose").FlatRecord<ContactMessage>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<ContactMessage> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
