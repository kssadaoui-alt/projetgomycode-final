import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactMessage } from '../../schemas/contact.schema';
import { CreateContactDto } from '../../dtos/contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(ContactMessage.name)
    private contactModel: Model<ContactMessage>
  ) {}

  async createMessage(createContactDto: CreateContactDto) {
    const newMessage = new this.contactModel(createContactDto);
    await newMessage.save();
    return { message: 'Message sent successfully', contact: newMessage };
  }

  async getAllMessages() {
    const messages = await this.contactModel.find({});
    if (messages.length === 0) {
      throw new NotFoundException('No messages found');
    }
    return messages;
  }

  async getMessageById(cId: string) {
    const message = await this.contactModel.findById(cId);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  async deleteMessage(cId: string) {
    const message = await this.contactModel.findByIdAndDelete(cId);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return { message: 'Message deleted successfully' };
  }

  async markAsRead(cId: string) {
    const message = await this.contactModel.findByIdAndUpdate(
      cId,
      { cRead: true },
      { new: true }
    );
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return { message: 'Message marked as read', contact: message };
  }
}
