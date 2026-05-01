import { Model } from 'mongoose';
import { Order } from '../../schemas/order.schema';
import { CreateOrderDto } from '../../dtos/order.dto';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    createOrder(createOrderDto: CreateOrderDto): Promise<{
        message: string;
        order: import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    getAllOrders(): Promise<(import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getOrderById(orderId: string): Promise<import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getOrdersByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    updateOrderStatus(orderId: string, status: string): Promise<{
        message: string;
        order: import("mongoose").Document<unknown, {}, Order, {}, {}> & Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    deleteOrder(orderId: string): Promise<{
        message: string;
    }>;
}
