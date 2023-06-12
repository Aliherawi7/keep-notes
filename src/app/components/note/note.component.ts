import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() id?: number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() date?: string;
  @Input() text?: string;
  isLoading: boolean = true;

  constructor(private noteService: NoteService) {

  }

  ngOnInit() {
    this.isLoading = true;
    console.log(this.id)
  }



}
