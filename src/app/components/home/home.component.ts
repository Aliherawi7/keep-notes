import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { Note, NoteForUI } from 'src/app/types/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Timestamp } from 'firebase/firestore';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoading: boolean = true
  message: string
  dateMessage?: string
  recentNotes: NoteForUI[] = []
  emptyMessage: string = ''
  allNotes?: NoteForUI[] = [];

  constructor(private timeService: TimeService,
    private firebaseService: FirebaseService,
    private noteService: NoteService) {
    this.message = this.timeService.getTimeMessage() + ' ' + localStorage.getItem("keepNotesUserName")
    this.message = this.timeService.getTimeMessage() + ' ' + localStorage.getItem("keepNotesUserName")
    this.dateMessage = this.timeService.getTimeAndDateString();
    this.isLoading = this.noteService.isLoading
    this.allNotes = this.noteService.allNotes;

  }


}
