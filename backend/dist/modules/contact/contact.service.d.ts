import { Model } from 'mongoose';
import { ContactMessage } from '../../schemas/contact.schema';
import { CreateContactDto } from '../../dtos/contact.dto';
export declare class ContactService {
    private contactModel;
    constructor(contactModel: Model<ContactMessage>);
    createMessage(createContactDto: CreateContactDto): Promise<{
        message: string;
        contact: import("mongoose").Document<unknown, {}, ContactMessage, {}, {}> & ContactMessage & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    getAllMessages(): Promise<(import("mongoose").Document<unknown, {}, ContactMessage, {}, {}> & ContactMessage & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getMessageById(cId: string): Promise<import("mongoose").Document<unknown, {}, ContactMessage, {}, {}> & ContactMessage & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    deleteMessage(cId: string): Promise<{
        message: string;
    }>;
    markAsRead(cId: string): Promise<{
        message: string;
        contact: import("mongoose").Document<unknown, {}, ContactMessage, {}, {}> & ContactMessage & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
}
