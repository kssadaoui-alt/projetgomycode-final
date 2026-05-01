import Stripe from 'stripe';
export declare class PaymentService {
    private stripe;
    constructor();
    createPaymentIntent(amount: number, currency?: string): Promise<{
        clientSecret: string | null;
        paymentIntentId: string;
    }>;
    handlePaymentWebhook(body: Buffer, signature: string): Promise<{
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
    getPaymentIntent(paymentIntentId: string): Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
