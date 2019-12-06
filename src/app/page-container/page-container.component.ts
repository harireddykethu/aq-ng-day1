import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  counter = 0;
  baseTitle = 'Title here';
  title = 'Default';

  clickHandler() {
    this.counter++;
    this.title = '';
    this.title = `${this.baseTitle} clicked for ${this.counter}`;
  }
}
