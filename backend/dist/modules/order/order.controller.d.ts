import { OrderService } from './order.service';
import { CreateOrderDto } from '../../dtos/order.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto): Promise<{
        message: string;
        order: import("mongoose").Document<unknown, {}, import("../../schemas/order.schema").Order, {}, {}> & import("../../schemas/order.schema").Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    getAllOrders(): Promise<(import("mongoose").Document<unknown, {}, import("../../schemas/order.schema").Order, {}, {}> & import("../../schemas/order.schema").Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getOrdersByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../../schemas/order.schema").Order, {}, {}> & import("../../schemas/order.schema").Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getOrderById(orderId: string): Promise<import("mongoose").Document<unknown, {}, import("../../schemas/order.schema").Order, {}, {}> & import("../../schemas/order.schema").Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    updateOrderStatus(orderId: string, body: {
        status: string;
    }): Promise<{
        message: string;
        order: import("mongoose").Document<unknown, {}, import("../../schemas/order.schema").Order, {}, {}> & import("../../schemas/order.schema").Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    deleteOrder(orderId: string): Promise<{
        message: string;
    }>;
}
