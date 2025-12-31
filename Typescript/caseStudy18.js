"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StripeGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Processing payment of $${amount} via Stripe.`);
            // Simulate API call...
            return true;
        });
    }
}
class PaypalGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Processing payment of $${amount} via PayPal.`);
            // Simulate API call...
            return true;
        });
    }
}
// let gateway: PaymentGateway = new StripeGateway();
// console.log(gateway.processPayment(100));
// gateway = new PaypalGateway();
// console.log(gateway.processPayment(200));
class PaymentProcessor {
    constructor(gateway) {
        this.gateway = gateway;
    }
    pay(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const success = yield this.gateway.processPayment(amount);
            if (success) {
                console.log("Payment successful!");
            }
            else {
                console.log("Payment failed.");
            }
        });
    }
}
const stripeGateway = new StripeGateway();
const paypalGateway = new PaypalGateway();
const processor1 = new PaymentProcessor(stripeGateway);
processor1.pay(100);
const processor2 = new PaymentProcessor(paypalGateway);
processor2.pay(200);
class MockGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Mock processing payment of $${amount}.`);
            return true;
        });
    }
}
const mockGateway = new MockGateway();
const testProcessor = new PaymentProcessor(mockGateway);
testProcessor.pay(50); // Uses mock gateway for testing
class BankGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Processing payment of $${amount} via Bank.`);
            return true;
        });
    }
}
const bankGateway = new BankGateway();
const testProcessor2 = new PaymentProcessor(bankGateway);
testProcessor2.pay(1000);
class FailedMockGateway {
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Mock failure for $${amount}`);
            return false;
        });
    }
}
const failMock = new FailedMockGateway();
const failProcessor = new PaymentProcessor(failMock);
failProcessor.pay(100);
