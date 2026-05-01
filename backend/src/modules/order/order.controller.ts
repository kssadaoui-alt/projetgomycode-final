import { Controller, Post, Get, Delete, Param, Body, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from '../../dtos/order.dto';

@Controller('api/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.createOrder(createOrderDto);
  }

  @Get()
  async getAllOrders() {
    return await this.orderService.getAllOrders();
  }

  @Get('user/:userId')
  async getOrdersByUserId(@Param('userId') userId: string) {
    return await this.orderService.getOrdersByUserId(userId);
  }

  @Get(':orderId')
  async getOrderById(@Param('orderId') orderId: string) {
    return await this.orderService.getOrderById(orderId);
  }

  @Put(':orderId/status')
  async updateOrderStatus(
    @Param('orderId') orderId: string,
    @Body() body: { status: string }
  ) {
    return await this.orderService.updateOrderStatus(orderId, body.status);
  }

  @Delete(':orderId')
  async deleteOrder(@Param('orderId') orderId: string) {
    return await this.orderService.deleteOrder(orderId);
  }
}
