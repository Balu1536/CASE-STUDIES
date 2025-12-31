export {}; 

//1.
let message: string = "Hello, World!";
console.log(message);


//2.
// this is a comment


//3.
/* This is a multi-line comment */


//4.
console.log("Hello");  console.log("World")


//5.
class Greeting {
  greet(): void {
    console.log("Hello World!!!");
  }
}

let obj = new Greeting();
obj.greet();

//5. own example
class Add{
    add(a:number,b:number):number{
        return a+b;
    }
}

let addObj = new Add();
console.log(addObj.add(9,19));


//6.
let productName:  string  =  "Bananas";

function printProduct(name: string): void {
  console.log("Product: " + name);
}
printProduct(productName);


class Store {
  open(): void {
    console.log("Store is open!");
  }
}
let store = new Store();
store.open();

//6.1 own example
let fruit:  string  =  "GUAVA";

function print_Fruit(fruitName: string): void {
  console.log("Fruit: " + fruitName);
}
print_Fruit(fruit);

class Cart {
  open(): void {
    console.log("Cart is open!");
  }
}
let cart = new Cart();
cart.open();

//6.2 own example
function multiply(x: number) : void {
    console.log(x*2);
}
multiply(5);

//6.3 own example
class Person{
    sayHello(personName:string): void {
        console.log("Hello " + personName);
}
}

let person = new Person();
person.sayHello("Alice");