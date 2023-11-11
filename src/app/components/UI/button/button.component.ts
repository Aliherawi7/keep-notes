import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() btnType?: Array<string> = [""];
  @Input() text?: string;
  @Input() icon?: string
  @Output() btnClick = new EventEmitter();
  @Input() id: string | null = "btn_id"
  @Input() isLoading?: boolean = false;

  onClick() {
    this.btnClick.emit();
  }

}
