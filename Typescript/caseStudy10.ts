function checkSign(num: number): void {
    if (num > 0) {
        console.log("The number is positive.");
    }
}
checkSign(-5);
checkSign(10);

function evenOrOdd(num: number): void {
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}
evenOrOdd(6);
evenOrOdd(9);

function getGrade(score: number): string {
    if (score >= 90)
    {
        return "A";
    } 
    else if (score >= 80) 
    {
        return "B";
    }
    else if (score >= 70) 
    {
        return "C";
    }
    else if (score >= 60) 
    {
        return "D";
    }
    else
    {
        return "F";
    }
}
let grade1=getGrade(99);
let grade2=getGrade(100);
let grade3=getGrade(89);

function provideFeedback(grade: string): void {
    console.log(grade);
    if (grade === "A") {
        console.log("Excellent work!");
    }
    else if (grade === "B") {
        console.log("Good job!");
    }
    else if (grade === "C") {
        console.log("You passed.");
    }
    else if (grade === "D") {
        console.log("Needs improvement.");
    }
    else{
        console.log("Failed. Better luck next time.");
    }
}
provideFeedback(grade1);
provideFeedback(grade2);
provideFeedback(grade3);

