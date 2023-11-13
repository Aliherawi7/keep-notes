import { Component, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() id: string = '';
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() createdAt: Date = new Date();
  @Input() lastUpdate: Date = new Date();
  @Input() enable: boolean = true;
  @Input() userId: string = '';
  @Input() data: string = ''

  formattedDate?: string
  isLoading: boolean = true;

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.formattedDate = this.lastUpdate?.toUTCString()
    console.log(this.id)
  }


  moveToTrash() {
    this.noteService.moveToTrash(this.id)
  }

  deleteForever() {
    this.noteService.deleteForever(this.id)
  }

  moveFromTrash() {
    this.noteService.moveFromTrash(this.id)
  }



}
