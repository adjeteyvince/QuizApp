import { Question } from './question.model';
import { QuizService } from './quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyQuizApp';
  quizes: Question[];
  sizeOfQuizes: number;
  current_page: number = 1;
  records_per_page: number = 6;
  currentPageQuizes: Question[];
  correctAnswerCount: number;
  state: String;

  constructor(private quizService: QuizService){};

  ngOnInit(): void {
    this.currentPageQuizes = [];
    this.quizes = this.quizService.getQuizes();
    this.sizeOfQuizes = this.quizes.length;
    this.state= "Start";
  }

  start(){

    this.quizes = this.quizService.getQuizes();
    this.loadPage(this.current_page);
    this.switchState();
  }

  mark(){
    console.table(this.quizes)

    this.correctAnswerCount  = 0;
    for(let i = 0; i < this.quizes.length; i++){

      if(this.quizes[i].selectedAnswer == this.quizes[i].correctAnswer){
        this.correctAnswerCount++;
      }
    }

    this.switchState();
  }

  retry(){
    this.currentPageQuizes = [];
    this.current_page = 1;
    this.quizes.forEach(quiz => quiz.selectedAnswer = "Nothing");
    this.switchState();
  }

  switchState(){
    switch (this.state) {
      case "Start": this.state = "Submit"; break;
      case "Submit": this.state = "Retry"; break;
      case "Retry": this.state = "Start"; break;
    }
  }

  loadPage(goToPage: number){

    this.currentPageQuizes=[];
    this.current_page = goToPage;
    console.log(this.current_page);
    for(let i = ((this.current_page*this.records_per_page)-this.records_per_page); i <= (this.current_page*this.records_per_page)-1 && i < this.sizeOfQuizes; i++){
      this.currentPageQuizes.push(this.quizes[i])
    }
  }

  numPages(){
    return Math.ceil(this.sizeOfQuizes / this.records_per_page);
  }
}
