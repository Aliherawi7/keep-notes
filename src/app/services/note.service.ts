import { Injectable } from '@angular/core';
import { Note, notes } from '../constants/Notes';
import { HttpClient } from '@angular/common/http';
import { Observable, map, from, switchMap } from "rxjs"
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient, private firebaseService: FirebaseService) { }


  findNoteById(id: number): Note | undefined {
    return notes.find(note => {
      return note.id == id;
    });
  }

  getNoteFromAPIById(id: number): Note | undefined {
    this.firebaseService.getNotesByUserId("1")
    return;
  }


}
