import { Question } from './../question.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  state: String;
  @Input()
  question: Question;
  @Input()
  questionNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

  optionSelected(answer:String){

    this.question.selectedAnswer = answer;
  }

  checkState(){
    if (this.state != "Retry") {
      return false
    }else{
      return true;
    }
  }

}
