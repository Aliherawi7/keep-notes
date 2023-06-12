import { Injectable } from '@angular/core';
import { Note, notes } from '../constants/Notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }


  findNoteById(id: number): Note | undefined {
    return notes.find(note => {
      return note.id == id;
    });
  }

  getTheTexts(note: Note): string {
    var txt = ''
    note.text.forEach(t => txt += "\n" + t)
    return txt;
  }
}
