"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const contact_schema_1 = require("../../schemas/contact.schema");
let ContactService = class ContactService {
    contactModel;
    constructor(contactModel) {
        this.contactModel = contactModel;
    }
    async createMessage(createContactDto) {
        const newMessage = new this.contactModel(createContactDto);
        await newMessage.save();
        return { message: 'Message sent successfully', contact: newMessage };
    }
    async getAllMessages() {
        const messages = await this.contactModel.find({});
        if (messages.length === 0) {
            throw new common_1.NotFoundException('No messages found');
        }
        return messages;
    }
    async getMessageById(cId) {
        const message = await this.contactModel.findById(cId);
        if (!message) {
            throw new common_1.NotFoundException('Message not found');
        }
        return message;
    }
    async deleteMessage(cId) {
        const message = await this.contactModel.findByIdAndDelete(cId);
        if (!message) {
            throw new common_1.NotFoundException('Message not found');
        }
        return { message: 'Message deleted successfully' };
    }
    async markAsRead(cId) {
        const message = await this.contactModel.findByIdAndUpdate(cId, { cRead: true }, { new: true });
        if (!message) {
            throw new common_1.NotFoundException('Message not found');
        }
        return { message: 'Message marked as read', contact: message };
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_schema_1.ContactMessage.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContactService);
//# sourceMappingURL=contact.service.js.map