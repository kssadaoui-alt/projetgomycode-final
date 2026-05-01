import type { Request } from 'express';
import { PaymentService } from './payment.service';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    createPaymentIntent(body: {
        amount: number;
        currency?: string;
    }): Promise<{
        clientSecret: string | null;
        paymentIntentId: string;
    }>;
    getPaymentIntent(paymentIntentId: string): Promise<import("stripe").Stripe.Response<import("stripe").Stripe.PaymentIntent>>;
    handleWebhook(request: Request & {
        rawBody?: Buffer;
    }): Promise<{
        status: string;
        message: string;
        paymentId: string;
    } | {
        status: string;
        message: string;
        paymentId?: undefined;
    } | {
        status: string;
        message?: undefined;
        paymentId?: undefined;
    }>;
}
