import { Injectable, BadRequestException } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    if (process.env.STRIPE_SECRET_KEY) {
      this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2024-06-20',
      } as any);
    }
  }

  async createPaymentIntent(amount: number, currency: string = 'usd') {
    if (!this.stripe) {
      throw new BadRequestException('Stripe is not configured');
    }
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency,
      });

      return {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async handlePaymentWebhook(body: Buffer, signature: string) {
    if (!this.stripe) {
      throw new BadRequestException('Stripe is not configured');
    }
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

    try {
      const event = this.stripe.webhooks.constructEvent(
        body,
        signature,
        endpointSecret
      );

      if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        return {
          status: 'success',
          message: 'Payment successful',
          paymentId: paymentIntent.id,
        };
      }

      if (event.type === 'payment_intent.payment_failed') {
        return {
          status: 'failed',
          message: 'Payment failed',
        };
      }

      return { status: 'received' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getPaymentIntent(paymentIntentId: string) {
    if (!this.stripe) {
      throw new BadRequestException('Stripe is not configured');
    }
    try {
      return await this.stripe.paymentIntents.retrieve(paymentIntentId);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
