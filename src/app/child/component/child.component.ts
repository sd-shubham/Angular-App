import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ContentChild,
  ElementRef,
} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() data: string;
  @Output() childCallback: EventEmitter<string> = new EventEmitter();
  @ViewChild('input') inputElement;
  @ContentChild('para') para: ElementRef;
  ngOnInit() {
    // console.log('content', this.para.nativeElement.textContent);
  }
  send(input) {
    this.childCallback.emit(this.para.nativeElement.textContent);
  }
}
