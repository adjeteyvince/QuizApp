import { Question } from './question.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizes: Question[] = [
    {
      question: "Who are you",
      options: [
        { option: "a", answer: "Me" },
        { option: "b", answer: "You" },
        { option: "c", answer: "It" },
        { option: "d", answer: "Them" }
      ],
      correctAnswer: "a",
      selectedAnswer: "nothing"
    },
    {
      question: "Which of these operators is used to allocate memory to array variable in Java?",
      options: [
        { option: "a", answer: "Malloc" },
        { option: "b", answer: "Alloc" },
        { option: "c", answer: "New" },
        { option: "d", answer: "New Malloc" }
      ],
      correctAnswer: "c",
      selectedAnswer: "nothing"
    },
    {
      question: "Which of the following is not OOPS concept in Java?",
      options: [
        { option: "a", answer: "Inheritance" },
        { option: "b", answer: "Polymorphism" },
        { option: "c", answer: "Compilation" },
        { option: "d", answer: "Encapsulation" }
      ],
      correctAnswer: "c",
      selectedAnswer: "nothing"
    },
    {
      question: "The keyword or the property that you use to refer to an object through which they were invoked is ________",
      options: [
        { option: "a", answer: "this" },
        { option: "b", answer: "from" },
        { option: "c", answer: "object" },
        { option: "d", answer: "to" }
      ],
      correctAnswer: "a",
      selectedAnswer: "nothing"
    },
    {
      question: "How many Bytes are stored by ‘Long’ Data type in C# .net?",
      options: [
        { option: "a", answer: "8" },
        { option: "b", answer: "4" },
        { option: "c", answer: "2" },
        { option: "d", answer: "1" }
      ],
      correctAnswer: "a",
      selectedAnswer: "nothing"
    },
    {
      question: "Which concept of Java is achieved by combining methods and attribute into a class?",
      options: [
        { option: "a", answer: "Inheritance" },
        { option: "b", answer: "Encapsulation" },
        { option: "c", answer: "Abstraction" },
        { option: "d", answer: "Polymorphism" }
      ],
      correctAnswer: "b",
      selectedAnswer: "nothing"
    },
    {
      question: "What is an exception?",
      options: [
        { option: "a", answer: "Problem arising during compile time" },
        { option: "b", answer: "Problem arising during runtime" },
        { option: "c", answer: "Problem in IDE" },
        { option: "d", answer: "Problem in syntax" }
      ],
      correctAnswer: "b",
      selectedAnswer: "nothing"
    },
    {
      question: "Method overriding is combination of inheritance and polymorphism?",
      options: [
        { option: "a", answer: "True" },
        { option: "b", answer: "False" }
      ],
      correctAnswer: "a",
      selectedAnswer: "nothing"
    },
    {
      question: "Which of the following is used with the switch statement?",
      options: [
        { option: "a", answer: "Exit" },
        { option: "b", answer: "Continue" },
        { option: "c", answer: "do" },
        { option: "d", answer: "break" }
      ],
      correctAnswer: "d",
      selectedAnswer: "nothing"
    },
    {
      question: "Which of the following is not considered as an error in JavaScript?",
      options: [
        { option: "a", answer: "Missing Bracket" },
        { option: "b", answer: "Syntax error" },
        { option: "c", answer: "Missing semicolons" },
        { option: "d", answer: "Division by zero" }
      ],
      correctAnswer: "d",
      selectedAnswer: "nothing"
    }
  ]

  constructor() { }

  getQuizes() {
    return this.quizes.sort( () => Math.random() - 0.5);
  }
}
