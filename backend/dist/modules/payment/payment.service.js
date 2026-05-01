"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = __importDefault(require("stripe"));
let PaymentService = class PaymentService {
    stripe;
    constructor() {
        if (process.env.STRIPE_SECRET_KEY) {
            this.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
                apiVersion: '2024-06-20',
            });
        }
    }
    async createPaymentIntent(amount, currency = 'usd') {
        if (!this.stripe) {
            throw new common_1.BadRequestException('Stripe is not configured');
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
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async handlePaymentWebhook(body, signature) {
        if (!this.stripe) {
            throw new common_1.BadRequestException('Stripe is not configured');
        }
        const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
        try {
            const event = this.stripe.webhooks.constructEvent(body, signature, endpointSecret);
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
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getPaymentIntent(paymentIntentId) {
        if (!this.stripe) {
            throw new common_1.BadRequestException('Stripe is not configured');
        }
        try {
            return await this.stripe.paymentIntents.retrieve(paymentIntentId);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PaymentService);
//# sourceMappingURL=payment.service.js.map