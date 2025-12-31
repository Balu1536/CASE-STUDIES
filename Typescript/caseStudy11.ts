type Transaction={
    id: number;
    type: "checkout"|"return"|"priority"|"cancelled";
}

let transactions: Transaction[]=[
{
    id: 101,
    type: "checkout"
},
{
    id: 102,
    type: "priority"
},
{
    id: 103,
    type: "return"
},
{
    id: 104,
    type: "cancelled"
}];

const inventory:{[title: string]: number}={
    "The Great Gatsby": 3,
    "1984": 5,
    "To Kill a Mockingbird": 2
};

const visitors: string[]=[
    "Alice",
    "Bob",
    "Charlie"
]


const transactionCount = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0
};

for (let i = 0; i < transactions.length; i++) {
  transactionCount[transactions[i].type]++;
}

console.log(transactionCount);

let j=0;
while(true){
    const tx=transactions[j];
    if(!tx){
        break;
    }
    console.log(`Processing  ${tx.type}`);
    if(tx.type === "priority"){
        console.log("Processing priority transaction");
        break
    }
    j++;
}



let returnQueue: Transaction[] = [
  { id: 10, type: "return" }
];

let i = 0;

do {
  const tx = returnQueue[i];
  console.log(`Handling return id: ${tx.id}`);

  // Dynamically add new return
  if (i === 0) {
    returnQueue.push({ id: 11, type: "return" });
  }

  i++;
} while (i < returnQueue.length);

for (let book in inventory) {
  inventory[book] = 0;
}

console.log(inventory);

for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(visitors[i]);
}
