import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() id?: string;
  @Input() color?: string;
  @Input() title?: string;
  @Input() date?: Date;
  @Input() data?: string;
  formattedDate?: string
  isLoading: boolean = true;

  ngOnInit() {
    this.isLoading = true;
    this.formattedDate = this.date?.toUTCString()
    console.log(this.id)
  }



}
