"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productName = "Bananas";
var quantity = 25;
var city;
city = "Mumbai";
var inStock = true;
var instock = true;
var discount;
discount = 10; // type is any
discount = "none"; // still allowed
var code = "123";
var codeNumber = code;
var globalVar = "I am global";
class Store {
    constructor() {
        this.storeName = "Main Branch";
    }
    show() {
        var localVar = "I am local";
        console.log(localVar);
    }
}
Store.storeType = "Grocery";
//OWN Examples
//1.1
var name = "Balu";
//1.2.
var name;
name = "Shiva";
//1.3.
var name = "Shiva";
//1.4.
var name1;
name1 = "Shiva";
//2.
var score1 = 98;
var score2 = 99.50;
var sum = score1 + score2;
console.log("name: " + name);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
//3.
var str = '1';
var str2 = str;
console.log(typeof (str2));
console.log(str2);
//4.1
// var num = 2; 
// num = "12"; 
//5.
var numglobal = 10;
class A {
    constructor() {
        this.numClass = 20;
        this.staticNum = 99;
    }
    fun() {
        var numLocal = 100;
    }
}
console.log("Global num: " + numglobal);
let Aobj = new A();
console.log("Static num: " + Aobj.staticNum);
console.log("Class num: " + Aobj.numClass);
// console.log("Local num: " + Aobj.numLocal); 
//6.
var city = "Amaravati";
var temperature = 30;
var isRaining = false;
function weatherReport(city, temperature, isRaining) {
    console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
}
weatherReport(city, temperature, isRaining);
