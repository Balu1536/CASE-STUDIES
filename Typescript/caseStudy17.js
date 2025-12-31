"use strict";
// class Person {
// public name: string;
// constructor(name: string) {
//   this.name = name;
// }
// }
// const p = new Person("Alice");
// console.log(p.name); // OK
// class Secret {
//  private code: string;
//  constructor(code: string) {
//    this.code = code;
//  }
//  reveal() {
//    return this.code;
//  }
// }
// const s = new Secret("1234");
// // console.log(s.code); // Error
// console.log(s.reveal());
// class Animal {
// protected species: string;
// constructor(species: string) {
//   this.species = species;
// }
// }
// class Dog extends Animal {
// bark() {
//   return `Woof! I am a ${this.species}`;
// }
// }
// const d = new Dog("canine");
// console.log(d.bark()); // OK
// // console.log(d.species); // Error: Property 'species' is protected
// class Book {
// readonly isbn: string;
// constructor(isbn: string) {
//   this.isbn = isbn;
// }
// }
// const b = new Book("123-456");
// console.log(b.isbn); 
// // b.isbn = "789-101"; // Error: Cannot assign to 'isbn' because it is a read-only property
// class Vehicle {
// public brand: string;
// constructor(brand: string) {
//   this.brand = brand;
// }
// drive() {
//   console.log(`${this.brand} is moving`);
// }
// }
// class Car extends Vehicle {
// public model: string;
// constructor(brand: string, model: string) {
//   super(brand); // calls Vehicle's constructor
//   this.model = model;
// }
// drive() {
//   super.drive(); // call parent method
//   console.log(`Model: ${this.model}`);
// }
// }
// const myCar = new Car("Toyota", "Corolla");
// myCar.drive();
// // Output: Toyota is moving
// //         Model: Corolla
// class Person {
//  constructor(public name: string, private age: number) {}
//  public getAge(): number {
//    return this.age;
//  }
// }
// const john = new Person('John', 30);
// console.log(john.name); // OK
// console.log(john.getAge()); // OK
// // console.log(john.age); // Error: 'age' is private
// Abstract class: the blueprint for all content
class Content {
    constructor(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    publish() {
        this.published = true;
    }
    isPublished() {
        return this.published;
    }
}
// class Quiz extends Content {
// private questions: string[] = [];
// constructor(title: string, author: string, questions: string[] = []) {
//   super(title, author);
//   this.questions = questions;
// }
// public addQuestion(question: string, isInstructor: boolean) {
//   if (!this.isPublished() && isInstructor) {
//     this.questions.push(question);
//   } else {
//     throw new Error("Cannot add questions after publishing or if not an instructor.");
//   }
// }
// public getQuestions(): string[] {
//   return [...this.questions];
// }
// getType(): string {
//   return "Quiz";
// }
// }
// let obj = new Quiz("TypeScript Basics", "Jane Doe");
// obj.addQuestion("What is TypeScript?", true);
// console.log(obj.getQuestions());
// console.log(obj.getType()); 
// class Lesson extends Content {
// private content: string;
// constructor(title: string, author: string, content: string) {
//   super(title, author);
//   this.content = content;
// }
// public editContent(newContent: string, isInstructor: boolean) {
//   if (!this.isPublished() && isInstructor) {
//     this.content = newContent;
//   } else {
//     throw new Error("Cannot edit content after publishing or if not an instructor.");
//   }
// }
// public getContent(): string {
//   return this.content;
// }
// getType(): string {
//   return "Lesson";
// }
// }
// let lesson = new Lesson("OOP in TypeScript", "John Smith", "Initial Content");
// lesson.editContent(lesson.getContent() + " - Updated", true);
// console.log(lesson.getContent());
// console.log(lesson.getType());
class Assignment extends Content {
    constructor(title, author, dueDate) {
        super(title, author);
        this.dueDate = dueDate;
    }
    getDueDate() {
        return this.dueDate;
    }
    getType() {
        return "Assignment";
    }
}
let assignment = new Assignment("Final Project", "Balasubramanyam", new Date("2025-12-31"));
console.log(assignment.getDueDate());
console.log(assignment.getType());
