import { Component, NgModule } from '@angular/core';
import { Note, NoteForUI } from 'src/app/types/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Timestamp } from 'firebase/firestore';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  allNotes?: NoteForUI[] = [];
  isLoading: boolean = true;
  emptyMessage?: string

  constructor(private firebaseService: FirebaseService, private noteService: NoteService) {
    this.allNotes = this.noteService.allNotes;
    this.isLoading = this.noteService.isLoading
  }


  // ngOnInit() {
  //   // for test purpose
  //   this.firebaseService.getNotesByUserId(localStorage.getItem("userId") + "")
  //     .then(res => {
  //       this.isLoading = false
  //       console.log(res.docs)
  //       if (res.docs.length == 0) {
  //         this.emptyMessage = "You have no note!"
  //       } else {
  //         this.allNotes = res.docs.map(doc => {
  //           const data = doc.data()
  //           const createdAt: Timestamp = data['createdAt'];
  //           const lastUpdate: Timestamp = data['lastUpdate'];
  //           return { ...doc.data() as Note, id: doc.id, createdAt: createdAt.toDate(), lastUpdate: lastUpdate.toDate() };
  //         })
  //         this.allNotes = this.allNotes.filter(n => n.enable == true)
  //       }

  //     })
  // }



}
