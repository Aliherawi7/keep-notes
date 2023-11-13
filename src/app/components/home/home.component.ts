import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { Note, NoteForUI } from 'src/app/types/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NoteService } from 'src/app/services/note.service';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state/state';
import * as actions from "../../state/actions/NoteActions"
import { selectAllNotes, selectNoteEmptyMessage } from 'src/app/state/reducers/NoteReducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  notes: NoteForUI[] = []
  isLoading: boolean = true;
  message: string
  dateMessage?: string
  recentNotes: NoteForUI[] = []
  emptyMessage: string = ''


  constructor(
    private timeService: TimeService,
    private noteService: NoteService,
    private state: Store<State>) {
    this.state.select(selectAllNotes).subscribe(n => {
      this.isLoading = this.noteService.isLoading
      this.notes = n;
    })
    this.state.select(selectNoteEmptyMessage).subscribe(m => {
      this.emptyMessage = m;
    })

    this.message = this.timeService.getTimeMessage() + ' ' + localStorage.getItem("keepNotesUserName")
    this.dateMessage = this.timeService.getTimeAndDateString();

    this.noteService.getAllNotes()
      .then(res => {
        this.state.dispatch(actions.addAllNotes({ notes: res }))
      })
  }


}