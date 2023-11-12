import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() showLable: boolean = true;
  @Input() inputValue?: string;
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() inputType?: string;
  @Output() inputValueChange = new EventEmitter<string>();
  @Input() color: string = "#000"
  @Input() fontSize: string = "14px"

  onInput() {
    this.inputValueChange.emit(this.inputValue);
    console.log(this.showLable)
  }

}
