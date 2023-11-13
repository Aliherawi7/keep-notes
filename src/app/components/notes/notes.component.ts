import { Component, NgModule } from '@angular/core';
import { Note, NoteForUI } from 'src/app/types/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Timestamp } from 'firebase/firestore';
import { NoteService } from 'src/app/services/note.service';
import { State } from 'src/app/state/state';
import { Store } from '@ngrx/store';
import { selectAllNotes } from 'src/app/state/reducers/NoteReducer';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  allNotes?: NoteForUI[] = [];
  isLoading: boolean = true;
  emptyMessage?: string

  constructor(private state: Store<State>, private noteService: NoteService) {

  }


  ngOnInit() {
    // for test purpose
    this.state.select(selectAllNotes).subscribe(n => {
      this.isLoading = this.noteService.isLoading;
      this.allNotes = n;
    })
  }

}
