import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  @ViewChild('para', { static: true }) pTag: ElementRef;

  ngOnInit(): void {
    this.pTag.nativeElement.textContent = 'My paragraph';
    this.pTag.nativeElement.style.color = 'red';
    this.pTag.nativeElement.className = 'font-weight-bold';
    this.pTag.nativeElement.style.border = '1px solid blue';
  }
}
