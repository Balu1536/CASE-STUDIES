export {};

var productName: string = "Bananas";
var quantity: number = 25;

var city:  string; city =  "Mumbai"; 


var inStock =  true;

var instock:boolean = true;
var discount;
discount = 10; // type is any
discount = "none"; // still allowed


var code = "123";
var codeNumber: number = <number><any>code;


var globalVar = "I am global";
class Store {
  storeName = "Main Branch";
  static storeType = "Grocery";
  show() {
    var localVar = "I am local";
    console.log(localVar);
  }
}




//OWN Examples
//1.1
var name: string = "Balu";

//1.2.
var name:string;
name = "Shiva";

//1.3.
var name="Shiva";

//1.4.
var name1;
name1 = "Shiva";

//2.
var score1: number = 98;
var score2: number = 99.50;
var sum = score1 + score2;
console.log("name: " + name);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);


//3.
var str = '1';
var str2: number = <number><any>str;
console.log(typeof(str2));
console.log(str2);

//4.1
// var num = 2; 
// num = "12"; 

//5.

var numglobal: number = 10;
class A
{
    numClass=20;
    staticNum=99;
    fun(): void {
        var numLocal=100;
    }
}
console.log("Global num: " + numglobal);
let Aobj = new A();
console.log("Static num: " + Aobj.staticNum); 
console.log("Class num: " + Aobj.numClass);
// console.log("Local num: " + Aobj.numLocal); 


//6.
var city: string = "Amaravati";
var temperature: number= 30;
var isRaining = false;
function weatherReport(city: string,temperature: number,isRaining:any):void{
    console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
}

weatherReport(city,temperature,isRaining);