function displayMember(id: number, name: string, email?: string): void {
  console.log(`ID: ${id}, Name: ${name}`);
  if (email) console.log(`Email: ${email}`);
}

function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) total += fine;
  return total;
}

function membershipFee(price: number, discountRate: number = 0.1): number {
  return price - price * discountRate;
}


function greetVisitor(visitor: string, formatter: (name: string) => void): void {
  formatter(visitor);
}
const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);


function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }
  return data.map(item => item.toString()).join("\n");
}

type VisitorFormatter = (name: string) => void;
let consoleGreet: VisitorFormatter = (n) => console.log(`Hello, ${n}!`);

displayMember(1, "Alice", "alice@mail.com");
displayMember(2, "Bob");

console.log(calculateFines(5, 10, 2.5));

console.log(membershipFee(100));
console.log(membershipFee(100, 0.2));

greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);

console.log(factorial(5));

console.log(generateReport([{ title: "1984" }]));
console.log(generateReport([{ title: "1984" }], "json"));
