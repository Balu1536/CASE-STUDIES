//OWN Example
function recordAnswer(questionID: number, answer: any): void {
    console.log(`Question ID: ${questionID}, Answer: ${answer}`);
}
recordAnswer(1, "Yes");
recordAnswer(2, 99.9);
recordAnswer(3, [99,98,"True"]);

//given examples
// let answer: any;
// answer = 42;
// answer = "blue";
// answer = [1, 2, 3];

let surveyAnswer:  any;
surveyAnswer = "Yes";
surveyAnswer = 5;
surveyAnswer = ["Option A", "Option B"];


let allAnswers: any[] = [];
allAnswers.push("No");
allAnswers.push(10);
allAnswers.push({ comment: "N/A" });

for (let ans of allAnswers) {
  console.log("Received answer:", ans);
}