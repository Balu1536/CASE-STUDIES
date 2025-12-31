"use strict";
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
class Customer {
    update(msg) { console.log("Customer:", msg); }
}
class Inventory {
    update(msg) { console.log("Inventory:", msg); }
}
class PromotionSystem {
    update(message) {
        console.log("Promotion Alert:", message + " 🎉 Next order ki 10% OFF!");
    }
}
class DrinkOrder {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyAll(message) {
        this.observers.forEach(obs => obs.update(message));
    }
    completeOrder() {
        this.notifyAll("Drink served!");
    }
}
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem()); // 🔥 new observer
order.completeOrder();
