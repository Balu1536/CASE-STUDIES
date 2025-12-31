"use strict";
let DeveloperProfile = {
    username: "Balasubramanyam",
    bio: null
};
let TesterProfile = {
    username: "Shiva",
    bio: "Experienced Tester",
    avatarUrl: "http://example.com/avatar.jpg"
};
function showProfile(profile) {
    var _a, _b;
    console.log("Username:", profile.username);
    console.log("Bio:", (_a = profile.bio) !== null && _a !== void 0 ? _a : "No bio available");
    console.log("Avatar URL:", (_b = profile.avatarUrl) !== null && _b !== void 0 ? _b : "default-avatar.png");
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
