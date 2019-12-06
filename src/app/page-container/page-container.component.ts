import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  title = 'Hello there';
  pi = 3.141569;
  amount = 100.235;
  rate = 0.78;
  today = new Date();

  foo() {
    //...
    //console.log('called');
    return {
      name: 'Vijay',
      city: 'Bengaluru'
    };
  }
}
