import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  @Output() registration = new EventEmitter();

  clickHandler() {
    this.registration.emit({
      on: new Date(),
      message: 'Child emitted an event'
    });
  }
}
