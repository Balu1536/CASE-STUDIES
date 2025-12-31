type Profile={
    username:string;
    bio:string|null;
    avatarUrl?:string;
}
let DeveloperProfile:Profile={
    username:"Balasubramanyam",
    bio:null

}
let TesterProfile:Profile={
    username:"Shiva",
    bio:"Experienced Tester",
    avatarUrl:"http://example.com/avatar.jpg"
}
function showProfile(profile:Profile):void{
    console.log("Username:",profile.username);
    console.log("Bio:",profile.bio ?? "No bio available");
    console.log("Avatar URL:",profile.avatarUrl ?? "default-avatar.png");
}
showProfile(DeveloperProfile);
console.log("-----");
showProfile(TesterProfile);

// let age:number|null=null;
// console.log(age);

// function greet(name: string): void {
//   console.log(`Hello ${name}`);
// }
// let result = greet("Alice");
// console.log(result); // undefined
