import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  uName: string;

  @Prop({ required: true, unique: true })
  uEmail: string;

  @Prop({ required: true })
  uAddress: string;

  @Prop({ required: true })
  uPhone: string;

  @Prop({ required: true })
  uPass: string;

  @Prop({ default: 'User' })
  uType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
