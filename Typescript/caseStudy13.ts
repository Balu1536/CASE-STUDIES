function describePerson(name: string, age?: number): void {
    console.log(`Name: ${name}, Age: ${age ?? "Unknown"}`);

}

describePerson("John", 30);
describePerson("Balu");

function calculatePrice(basePrice: number, taxRate: number = 0.1): number {
    return basePrice - (basePrice * taxRate);
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));

