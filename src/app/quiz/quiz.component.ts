import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input()
  questions: Question[];
  @Input()
  state: String;
  @Input()
  currentPageNumber: number;
  @Input()
  records_per_page:number;

  constructor() { }

  ngOnInit(): void {
  }

  questionNum(index: number){
    return ((this.currentPageNumber * this.records_per_page)+(-(this.records_per_page)+(index+1)))
  }

}
