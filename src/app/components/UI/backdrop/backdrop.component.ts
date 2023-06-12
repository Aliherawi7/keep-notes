import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent {
  @Input() show: boolean = true;
  @Output() onClick = new EventEmitter();


  closeBackdrop() {
    this.onClick.emit();
    this.show = false;
  }

}
