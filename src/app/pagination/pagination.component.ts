import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input()
  currentPageNumber: number;
  @Input()
  numberOfPages:number;

  state: boolean;

  @Output()
  changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(){
    this.currentPageNumber++;
    this.changePage.emit(this.currentPageNumber);
  }
  prevPage(){
    this.currentPageNumber--;
    this.changePage.emit(this.currentPageNumber);
  }

  prevState(){
    if (this.currentPageNumber>1) {
      return false;
    }
    return true;
  }

  nextState(){
    if (this.currentPageNumber<this.numberOfPages) {
      return false;
    }
    return true;
  }

}
