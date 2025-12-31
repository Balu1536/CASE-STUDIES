"use strict";
function describePerson(name, age) {
    console.log(`Name: ${name}, Age: ${age !== null && age !== void 0 ? age : "Unknown"}`);
}
describePerson("John", 30);
describePerson("Balu");
function calculatePrice(basePrice, taxRate = 0.1) {
    return basePrice - (basePrice * taxRate);
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));
