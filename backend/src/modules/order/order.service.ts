import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../../schemas/order.schema';
import { CreateOrderDto } from '../../dtos/order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const newOrder = new this.orderModel(createOrderDto);
    await newOrder.save();
    return { message: 'Order created successfully', order: newOrder };
  }

  async getAllOrders() {
    const orders = await this.orderModel.find({}).populate('userId');
    if (orders.length === 0) {
      throw new NotFoundException('No orders found');
    }
    return orders;
  }

  async getOrderById(orderId: string) {
    const order = await this.orderModel.findById(orderId).populate('userId');
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async getOrdersByUserId(userId: string) {
    const orders = await this.orderModel.find({ userId }).populate('userId');
    if (orders.length === 0) {
      throw new NotFoundException('No orders found for this user');
    }
    return orders;
  }

  async updateOrderStatus(orderId: string, status: string) {
    const order = await this.orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return { message: 'Order status updated', order };
  }

  async deleteOrder(orderId: string) {
    const order = await this.orderModel.findByIdAndDelete(orderId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return { message: 'Order deleted successfully' };
  }
}
