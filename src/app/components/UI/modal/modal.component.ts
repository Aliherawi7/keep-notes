import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Input() modalType: string = 'asking'
  @Input() message: string = ''
  @Output() onYesClick = new EventEmitter();
  @Output() onNoClick = new EventEmitter();
  @Output() onOkClick = new EventEmitter();

  handleYesClick() {
    this.onYesClick.emit()
  }
  handleNoClick() {
    this.onNoClick.emit()
  }
  handleOkClick() {
    this.onOkClick.emit();
  }

  @Output() onClick = new EventEmitter();

  closeBackdrop() {
    this.onClick.emit();
    this.showModal = !this.showModal;
    console.log("backdrop")
  }

}
