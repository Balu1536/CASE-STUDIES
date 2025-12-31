// class Box<T> {
//   contents: T;
//   constructor(value: T) {
//     console.log(value,typeof value);
//     this.contents = value;
//   }
// }

// const stringBox = new Box("hello"); 
// const numberBox = new Box(42);

// console.log(stringBox.contents);
// console.log(numberBox.contents);





// interface ApiResponse<T=string> {
//   data: T; // here T is a type which is generic
//   status: number;
// }

//  const response: ApiResponse = {
//     data:"Success",
//     status: 200
//  };

// console.log(response);



// interface HasId { id: string; }

// function printId<T extends HasId>(item: T): void {
//   console.log(item.id);
// }

// printId({ id: "abc", name: "Alice" }); 
// // printId({ name: "Bob" });

// type Pair<K, V> = {
//   key: K;
//   value: V;
// };
// const pair: Pair<string, number> = {
//     key: "age",
//     value: 30
// };
// console.log(pair);






// class List<T> {
//   private items: T[] = [];

//   add(item: T) {
//     this.items.push(item);
//   }

//   getAll(): T[] {
//     return [...this.items];
//   }
// }

// const quizList = new List<string>();
// quizList.add("Quiz 1");

// const scoreList = new List<number>();
// scoreList.add(95);
// console.log(quizList.getAll());
// console.log(scoreList.getAll());



// class QuizFeedbackBox {
//   private feedbacks: string[] = [];
//   addFeedback(feedback: string) { this.feedbacks.push(feedback); }
//   getAllFeedback(): string[] { return [...this.feedbacks]; }
// }

// // One for lessons
// class LessonFeedbackBox {
//   private feedbacks: string[] = [];
//   addFeedback(feedback: string) { this.feedbacks.push(feedback); }
//   getAllFeedback(): string[] { return [...this.feedbacks]; }
// }


//Challenge Solution

class FeedbackBox<T> {
    private feedbacks: T[] = [];
    addFeedback(feedback: T) {
        this.feedbacks.push(feedback); 
    }
    getAllFeedback(): T[] {
        return [...this.feedbacks];
    }
}

function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}
console.log(getFirstItem(["a", "b", "c"]));
console.log(getFirstItem([1, 2, 3]));