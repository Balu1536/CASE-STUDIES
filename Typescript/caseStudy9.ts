type CustomerID = string;

type Customer={
    id:CustomerID,
    name:string,
    email?:string
}

type Container<T> = { value: T; timestamp: Date };

type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

let customer :Customer={
    id:"WIN25442",
    name:"BALASUBRAMANYAM",
};


type Logger = (message: string) => void;
const consoleLogger: Logger = msg => console.log(`[LOG] ${msg}`);

type OrderCallback = (status: OrderStatus) => void;

const processOrder: OrderCallback = status => {
  consoleLogger(`Order is now ${status}`);
};

processOrder("pending");

let customerContainer:Container<Customer>={
    value:customer,
    timestamp: new Date()
};

console.log(customerContainer);