"use strict";
let customer = {
    id: "WIN25442",
    name: "BALASUBRAMANYAM",
};
const consoleLogger = msg => console.log(`[LOG] ${msg}`);
const processOrder = status => {
    consoleLogger(`Order is now ${status}`);
};
processOrder("pending");
let customerContainer = {
    value: customer,
    timestamp: new Date()
};
console.log(customerContainer);
