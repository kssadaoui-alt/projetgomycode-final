import { Controller, Post, Body, Get, Param, Req } from '@nestjs/common';
import type { Request } from 'express';
import { PaymentService } from './payment.service';

@Controller('api/payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('create-intent')
  async createPaymentIntent(
    @Body() body: { amount: number; currency?: string }
  ) {
    return await this.paymentService.createPaymentIntent(
      body.amount,
      body.currency
    );
  }

  @Get('intent/:paymentIntentId')
  async getPaymentIntent(@Param('paymentIntentId') paymentIntentId: string) {
    return await this.paymentService.getPaymentIntent(paymentIntentId);
  }

  @Post('webhook')
  async handleWebhook(@Req() request: Request & { rawBody?: Buffer }) {
    const signature = request.headers['stripe-signature'];
    return await this.paymentService.handlePaymentWebhook(
      request.rawBody || Buffer.alloc(0),
      signature as string
    );
  }
}
