//OWN EXAMPLES
function processTransaction(
    amount: number, 
    description: string,
    isCredit: boolean):void 
    {
        if (amount <= 0){
            throw new Error("never");
    }
    console.log(`Amount:${amount} \nProcessing ${isCredit ? 'credit' : 'debit'} \nof ${amount} for ${description ?? "no description"}`);
}   
processTransaction(500, "Salary", true);

// //given Examples
// let age: number = 30;
// let marks: number = 30.5;
// let hex: number = 0xff;
// let binary: number = 0b1010;
// console.log(`Age: ${age}, Marks: ${marks}, Hex: ${hex}, Binary: ${binary}`);

// let first_name: string = "John";
// let last_name: string = "Doe";
// let full_name: string = `${first_name} ${last_name}`;
// console.log(`Full Name: ${full_name}`);

// let isReady: boolean = true;
// console.log(`Is Ready: ${isReady}`);

// // const UNIQUE_KEY = Symbol('$');
// // let obj = { [UNIQUE_KEY]: "SecretValue" };
// // console.log(`Unique Key Value: ${obj[UNIQUE_KEY]}`);
// // console.log(`Unique Key Value: ${obj[UNIQUE_KEY]}`);
// // console.log(`Unique Key Value: ${obj[UNIQUE_KEY]}`);
// // console.log(`Unique Key Value: ${obj[UNIQUE_KEY]}`);

// let empty: null = null;
// let undef: undefined;
// console.log(`Empty: ${empty}, Undefined: ${undef}`);
// let person: object = { name: "Bob" };
// console.log(`Person Name: ${(person as any).name}`);
// function log(): void {
//   console.log("log");
// }
// log();
// // function fail(): never {
// //   throw new Error("This always fails");
// // }
// // fail();

// let accountBalance: number = 1000.50;
// let accountName: string = "Savings";
// let isActive: boolean = true;
// let transactionId: symbol = Symbol("txn");
// let account: object = { id: 1, name: "Main" };
// let missingValue: null = null;
// let notSet: undefined;
// console.log(`Account Balance: ${accountBalance}, 
//     Account Name: ${accountName}, 
//     Is Active: ${isActive},
//     Transaction ID: ${transactionId.toString()},
//     Account ID: ${(account as any).id},
//     Missing Value: ${missingValue},
//     Not Set: ${notSet}`
// );

// function criticalError(): never {
//   throw new Error("Critical failure!");
// }
// criticalError();

