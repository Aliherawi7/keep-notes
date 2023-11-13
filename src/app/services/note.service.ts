import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Note, NoteForUI } from '../types/Note';
import { Timestamp } from 'firebase/firestore';
import { Store } from '@ngrx/store';
import { State } from '../state/state';
import * as actions from "../state/actions/NoteActions";
import { selectAllNotes, selectAllTrash, selectNoteEmptyMessage } from '../state/reducers/NoteReducer';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  isLoading: boolean = true;
  emptyMessage: string = ''
  trashEmptyMessage: string = ''
  notes: NoteForUI[] = [];
  trash: NoteForUI[] = [];

  constructor(private firebaseService: FirebaseService,
    private state: Store<State>) {
    this.state.select(selectAllNotes).subscribe(n => {
      this.notes = n;
    })
    this.state.select(selectAllTrash).subscribe(t => {
      this.trash = t;
    })
    this.state.select(selectNoteEmptyMessage).subscribe(m => {
      this.emptyMessage = m;
    })
    this.firebaseService.getAllNotesByUserId(localStorage.getItem("userId") + "")
      .then(res => {
        this.isLoading = false
        let allNotes = res.docs.map(doc => {
          const data = doc.data()
          const createdAt: Timestamp = data['createdAt'];
          const lastUpdate: Timestamp = data['lastUpdate'];
          return { ...doc.data() as Note, id: doc.id, createdAt: createdAt.toDate(), lastUpdate: lastUpdate.toDate() };
        })
        const noteInTrash = allNotes.filter(n => n.enable == false)
        allNotes = allNotes.filter(n => n.enable == true)
        this.state.dispatch(actions.addAllNotes({ notes: allNotes }))
        this.state.dispatch(actions.addAllTrash({ trash: noteInTrash }))
        this.isLoading = false
      })
  }

  async getAllNotes(): Promise<NoteForUI[]> {
    const res = await this.firebaseService.getAllNotesByUserId(localStorage.getItem("userId") + "");
    this.isLoading = false;
    if (res.docs.length == 0) {
      return [];
    } else {
      let allNotes = res.docs.map(doc => {
        const data = doc.data();
        const createdAt: Timestamp = data['createdAt'];
        const lastUpdate: Timestamp = data['lastUpdate'];
        return { ...doc.data() as Note, id: doc.id, createdAt: createdAt.toDate(), lastUpdate: lastUpdate.toDate() };
      });
      return allNotes.filter(n_1 => n_1.enable);
    }
  }


  moveToTrash(noteId: string) {
    this.firebaseService.moveNoteInTrash(this.notes[this.findNoteIndexById(this.notes, noteId)])
      .then(res => {
        this.state.dispatch(actions.moveToTrash({ noteId: noteId }))
      })
  }

  deleteForever(id: string) {
    this.firebaseService.deleteNote(id)
      .then(res => {
        this.state.dispatch(actions.deleteNote({ noteId: id }))
      })
  }

  moveFromTrash(noteId: string) {
    console.log(noteId)
    this.firebaseService.moveNoteFromTrash(this.trash[this.findNoteIndexById(this.trash, noteId)])
      .then(res => {
        this.state.dispatch(actions.moveFromTrash({ noteId: noteId }))
      })
  }

  findNoteIndexById(list: NoteForUI[], id: string): number {
    return list.findIndex(n => n.id == id)
  }






}
