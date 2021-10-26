import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'MyQuizApp';

  state: String = "Start";

  switchState(){
    switch (this.state) {
      case "Start": this.state = "Submit"; break;
      case "Submit": this.state = "Retry"; break;
      case "Retry": this.state = "Start"; break;
    }
  }
}
