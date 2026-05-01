import { Document, Types } from 'mongoose';
export declare class Order extends Document {
    userId: string;
    items: any[];
    totalPrice: number;
    status: string;
    shippingAddress: string;
    paymentMethod: string;
    stripePaymentId: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order, any, {}> & Order & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Order> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
