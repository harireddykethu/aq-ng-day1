import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  incrementHandler() {
    if (this.counter < 25) {
      this.counter++;
    } else {
      console.log('Limit breached');
    }
  }

  decrementHandler() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      console.log('Limit breached');
    }
  }
}
