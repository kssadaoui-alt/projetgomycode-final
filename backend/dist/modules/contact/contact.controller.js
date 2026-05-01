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
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const contact_dto_1 = require("../../dtos/contact.dto");
let ContactController = class ContactController {
    contactService;
    constructor(contactService) {
        this.contactService = contactService;
    }
    async createMessage(createContactDto) {
        return await this.contactService.createMessage(createContactDto);
    }
    async getAllMessages() {
        return await this.contactService.getAllMessages();
    }
    async getMessageById(cId) {
        return await this.contactService.getMessageById(cId);
    }
    async markAsRead(cId) {
        return await this.contactService.markAsRead(cId);
    }
    async deleteMessage(cId) {
        return await this.contactService.deleteMessage(cId);
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "createMessage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getAllMessages", null);
__decorate([
    (0, common_1.Get)(':cId'),
    __param(0, (0, common_1.Param)('cId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getMessageById", null);
__decorate([
    (0, common_1.Put)(':cId/read'),
    __param(0, (0, common_1.Param)('cId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Delete)(':cId'),
    __param(0, (0, common_1.Param)('cId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "deleteMessage", null);
exports.ContactController = ContactController = __decorate([
    (0, common_1.Controller)('api/contacts'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
//# sourceMappingURL=contact.controller.js.map