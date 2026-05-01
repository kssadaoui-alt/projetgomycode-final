import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  pName: string;

  @Prop({ required: true })
  pPrice: number;

  @Prop()
  pDescription: string;

  @Prop()
  pCategory: string;

  @Prop()
  pImage: string;

  @Prop({ default: 0 })
  pStock: number;

  @Prop({ default: 0 })
  pRating: number;

  @Prop()
  pBrand: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
