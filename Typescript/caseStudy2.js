"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1.
let message = "Hello, World!";
console.log(message);
//2.
// this is a comment
//3.
/* This is a multi-line comment */
//4.
console.log("Hello");
console.log("World");
//5.
class Greeting {
    greet() {
        console.log("Hello World!!!");
    }
}
let obj = new Greeting();
obj.greet();
//5. own example
class Add {
    add(a, b) {
        return a + b;
    }
}
let addObj = new Add();
console.log(addObj.add(9, 19));
//6.
let productName = "Bananas";
function printProduct(name) {
    console.log("Product: " + name);
}
printProduct(productName);
class Store {
    open() {
        console.log("Store is open!");
    }
}
let store = new Store();
store.open();
//6.1 own example
let fruit = "GUAVA";
function print_Fruit(fruitName) {
    console.log("Fruit: " + fruitName);
}
print_Fruit(fruit);
class Cart {
    open() {
        console.log("Cart is open!");
    }
}
let cart = new Cart();
cart.open();
//6.2 own example
function multiply(x) {
    console.log(x * 2);
}
multiply(5);
//6.3 own example
class Person {
    sayHello(personName) {
        console.log("Hello " + personName);
    }
}
let person = new Person();
person.sayHello("Alice");
