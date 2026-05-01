import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ContactMessage extends Document {
  @Prop({ required: true })
  cName: string;

  @Prop({ required: true })
  cEmail: string;

  @Prop({ required: true })
  cPhone: string;

  @Prop({ required: true })
  cMessage: string;

  @Prop({ default: false })
  cRead: boolean;
}

export const ContactMessageSchema = SchemaFactory.createForClass(ContactMessage);
