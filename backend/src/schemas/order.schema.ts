import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({ type: [Object], required: true })
  items: any[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ default: 'pending' })
  status: string;

  @Prop()
  shippingAddress: string;

  @Prop()
  paymentMethod: string;

  @Prop()
  stripePaymentId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
