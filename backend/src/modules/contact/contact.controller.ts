import { Controller, Post, Get, Delete, Param, Body, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from '../../dtos/contact.dto';

@Controller('api/contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async createMessage(@Body() createContactDto: CreateContactDto) {
    return await this.contactService.createMessage(createContactDto);
  }

  @Get()
  async getAllMessages() {
    return await this.contactService.getAllMessages();
  }

  @Get(':cId')
  async getMessageById(@Param('cId') cId: string) {
    return await this.contactService.getMessageById(cId);
  }

  @Put(':cId/read')
  async markAsRead(@Param('cId') cId: string) {
    return await this.contactService.markAsRead(cId);
  }

  @Delete(':cId')
  async deleteMessage(@Param('cId') cId: string) {
    return await this.contactService.deleteMessage(cId);
  }
}
