import { Component } from '@angular/core';
import { Note, NoteForUI } from 'src/app/types/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Timestamp } from 'firebase/firestore';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/state';
import { selectAllTrash, selectTrashEmptyMessage } from 'src/app/state/reducers/NoteReducer';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {
  allNotes?: NoteForUI[] = [];
  isLoading: boolean = true;
  emptyMessage?: string

  constructor(private state: Store<State>, private noteService: NoteService) {
  }


  ngOnInit() {
    // for test purpose
    this.state.select(selectAllTrash).subscribe(t => {
      this.isLoading = this.noteService.isLoading;
      this.allNotes = t;
    })

    this.state.select(selectTrashEmptyMessage).subscribe(m => {
      this.emptyMessage = m;
    })
  }


}
