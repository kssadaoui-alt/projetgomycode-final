import { ContactService } from './contact.service';
import { CreateContactDto } from '../../dtos/contact.dto';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
    createMessage(createContactDto: CreateContactDto): Promise<{
        message: string;
        contact: import("mongoose").Document<unknown, {}, import("../../schemas/contact.schema").ContactMessage, {}, {}> & import("../../schemas/contact.schema").ContactMessage & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    getAllMessages(): Promise<(import("mongoose").Document<unknown, {}, import("../../schemas/contact.schema").ContactMessage, {}, {}> & import("../../schemas/contact.schema").ContactMessage & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getMessageById(cId: string): Promise<import("mongoose").Document<unknown, {}, import("../../schemas/contact.schema").ContactMessage, {}, {}> & import("../../schemas/contact.schema").ContactMessage & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    markAsRead(cId: string): Promise<{
        message: string;
        contact: import("mongoose").Document<unknown, {}, import("../../schemas/contact.schema").ContactMessage, {}, {}> & import("../../schemas/contact.schema").ContactMessage & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    deleteMessage(cId: string): Promise<{
        message: string;
    }>;
}
