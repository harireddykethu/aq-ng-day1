import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  @Input() childCounter: number;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  incrementClickHandler() {
    this.increment.emit();
  }

  decrementClickHandler() {
    this.decrement.emit();
  }
}
