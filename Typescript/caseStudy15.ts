// type StringOrNumber = string | number;


// let value: StringOrNumber;
// value = "hello"; // OK
// value = 42;      // OK
// // value = true;  //boolean so thrown error


// type Learner = { id: string; quizzesCompleted: number };
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

// type AnyUser = Learner | Instructor | Admin;

// type MultiRoleUser = Learner & Instructor;

// function printUserInfo(user: AnyUser) {
//   if ("quizzesCompleted" in user) {
//     console.log(`Learner: ${user.quizzesCompleted} quizzes completed`);
//   } else if ("coursesTaught" in user) {
//     console.log(`Instructor: ${user.coursesTaught} courses taught`);
//   } else {
//     console.log(`Admin: Access - ${user.accessLevel}`);
//   }
// }
// const user1: AnyUser = { id: "user1", quizzesCompleted: 5 };
// printUserInfo(user1); 

// type ModuleStatus = "not-started" | "in-progress" | "completed";

// type ProgressMap<Modules extends string> = {
//   [K in Modules]: ModuleStatus;
// };

// type MyModules = "quiz1" | "video2" | "assignment3";
// type MyProgress = ProgressMap<MyModules>;

// const alice: MultiRoleUser = {
//   id: "alice123",
//   quizzesCompleted: 10,
//   coursesTaught: 2
// };



// type User = { id: string; name: string };

// type OptionalUser = {
//   [K in keyof User]?: User[K];
// };



// type FeedbackAllowed<T extends ModuleStatus> = T extends "completed" ? string : never;

// type FeedbackForQuiz = FeedbackAllowed<"completed">; // string
// type FeedbackForVideo = FeedbackAllowed<"in-progress">;

type InstructorOrAdmin = Instructor | Admin;
type Assignment={
    title:string;
    dueDate:Date;
    points:number;
}
let assignment1:Assignment={
    title:"TypeScript Basics",
    dueDate:new Date('2025-12-31'),
    points:100
};
console.log(assignment1);


type ReadonlyAssignment=Readonly<Assignment>;
let assignment2:ReadonlyAssignment={
    title:"Advanced TypeScript",
    dueDate:new Date('2025-12-31'),
    points:100
};
console.log(assignment2);

type LearnerStats={
    quizzes:number;
    videos:number;
    assignments:number;
}
const learner1:LearnerStats={
    quizzes:5,
    videos:10,
    assignments:3
};
console.log(learner1);

type StatsAsStrings={
    [k in keyof LearnerStats]:String;
};

let learnerStatsAsStrings:StatsAsStrings={
    quizzes:"5",
    videos:"10",
    assignments:"3"
};

console.log(learnerStatsAsStrings);