import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Note, NoteForUI } from '../types/Note';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  allNotes: NoteForUI[] = []
  noteInTrash: NoteForUI[] = []
  isLoading: boolean = false;
  emptyMessage: string = ''

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getAllNotesByUserId(localStorage.getItem("userId") + "")
      .then(res => {
        this.isLoading = false
        console.log(res.docs)
        if (res.docs.length == 0) {
          this.emptyMessage = "You have no note!"
        } else {
          this.allNotes = res.docs.map(doc => {
            const data = doc.data()
            const createdAt: Timestamp = data['createdAt'];
            const lastUpdate: Timestamp = data['lastUpdate'];
            return { ...doc.data() as Note, id: doc.id, createdAt: createdAt.toDate(), lastUpdate: lastUpdate.toDate() };
          })
          this.noteInTrash = this.allNotes.filter(n => n.enable == false)
          this.allNotes = this.allNotes.filter(n => n.enable == true)
          console.log(this.allNotes)
        }
      })
  }


  moveToTrash(note: NoteForUI) {
    this.firebaseService.moveNoteInTrash({
      color: note.color,
      createdAt: note.createdAt,
      data: note.data,
      enable: note.enable,
      id: note.id,
      lastUpdate: note.lastUpdate,
      title: note.title,
      userId: note.userId
    })
      .then(r => {
        this.noteInTrash.push(note)
        this.allNotes.splice(this.allNotes.findIndex(n => n.id == note.id), 1)
      })
  }

  deleteForever(id: string) {
    this.firebaseService.deleteNote(id)
      .then(r => {
        const index = this.noteInTrash.findIndex(n => n.id == id)
        this.noteInTrash.splice(index, 1)
      })
  }

  moveFromTrash(note: NoteForUI) {
    this.firebaseService.moveNoteFromTrash({
      color: note.color,
      createdAt: note.createdAt,
      data: note.data,
      enable: note.enable,
      id: note.id,
      lastUpdate: note.lastUpdate,
      title: note.title,
      userId: note.userId
    })
      .then(r => {
        this.allNotes.push(note)
      })
  }






}
