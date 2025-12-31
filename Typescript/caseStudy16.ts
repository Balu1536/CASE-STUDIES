// class CafeManager {
//     private static instance: CafeManager;

//     private constructor() {}

//     static getInstance(): CafeManager {
//         if (!CafeManager.instance) {
//             CafeManager.instance = new CafeManager();
//         }
//         return CafeManager.instance;
//     }
// }

// // Usage:
// const manager1 = CafeManager.getInstance();
// const manager2 = CafeManager.getInstance();
// console.log(manager1 === manager2); // trueNODE

// interface Drink { serve(): void; }
// class Latte implements Drink { serve() { console.log("Latte!"); } }
// class Espresso implements Drink { serve() { console.log("Espresso!"); } }
// class DrinkFactory {
//   static createDrink(type: string): Drink {
//     if (type === "latte") return new Latte();
//     if (type === "espresso") return new Espresso();
//     throw new Error("Unknown drink");
//   }
// }
// // Usage:
// const drink = DrinkFactory.createDrink("latte");
// drink.serve(); // "Latte!"


// interface Observer { update(msg: string): void; }
class Customer implements Observer { update(msg: string) { console.log("Customer:", msg); } }
class Inventory implements Observer { update(msg: string) { console.log("Inventory:", msg); } }
// class DrinkOrder {
//   private observers: Observer[] = [];
//   addObserver(obs: Observer) { this.observers.push(obs); }
//   notifyAll(msg: string) { this.observers.forEach(obs => obs.update(msg)); }
//   completeOrder() { this.notifyAll("Order complete!"); }
// }
// // Usage:
// const order = new DrinkOrder();
// order.addObserver(new Customer());
// order.addObserver(new Inventory());
// order.completeOrder();
// // Output: Customer: Order complete! Inventory: Order complete!

// interface PrepStrategy { prepare(): void; }
// class FastPrep implements PrepStrategy { prepare() { console.log("Fast prep!"); } }
// class EcoPrep implements PrepStrategy { prepare() { console.log("Eco prep!"); } }
// class Barista {
//   constructor(private strategy: PrepStrategy) {}
//   setStrategy(strategy: PrepStrategy) { this.strategy = strategy; }
//   makeDrink() { this.strategy.prepare(); }
// }
// // Usage:
// const barista = new Barista(new FastPrep());
// barista.makeDrink(); // "Fast prep!"
// barista.setStrategy(new EcoPrep());
// barista.makeDrink(); // "Eco prep!"

interface Observer {
  update(message: string): void;
}
class PromotionSystem implements Observer {
  update(message: string): void {
    console.log(
      "Promotion Alert:",
      message + " 🎉 For Next order 10% OFF!"
    );
  }
}
class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyAll(message: string): void {
    this.observers.forEach(obs => obs.update(message));
  }

  completeOrder(): void {
    this.notifyAll("Drink served!");
  }
}

const order = new DrinkOrder();

order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem()); // 🔥 new observer

order.completeOrder();
