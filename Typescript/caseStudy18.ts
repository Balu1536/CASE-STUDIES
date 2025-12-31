interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via Stripe.`);
    // Simulate API call...
    return true;
  }
}

class PaypalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via PayPal.`);
    // Simulate API call...
    return true;
  }
}
// let gateway: PaymentGateway = new StripeGateway();
// console.log(gateway.processPayment(100));
// gateway = new PaypalGateway();
// console.log(gateway.processPayment(200));

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);
    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed.");
    }
  }
}
const stripeGateway = new StripeGateway();
const paypalGateway = new PaypalGateway();

const processor1 = new PaymentProcessor(stripeGateway);
processor1.pay(100); 

const processor2 = new PaymentProcessor(paypalGateway);
processor2.pay(200);

class MockGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing payment of $${amount}.`);
    return true;
  }
}

const mockGateway = new MockGateway();
const testProcessor = new PaymentProcessor(mockGateway);
testProcessor.pay(50); // Uses mock gateway for testing

class BankGateway implements PaymentGateway {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} via Bank.`);
        return true;
    }
}
const bankGateway = new BankGateway();
const testProcessor2 = new PaymentProcessor(bankGateway);
testProcessor2.pay(1000); 

class FailedMockGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock failure for $${amount}`);
    return false;
  }
}
const failMock = new FailedMockGateway();
const failProcessor = new PaymentProcessor(failMock);
failProcessor.pay(100);
