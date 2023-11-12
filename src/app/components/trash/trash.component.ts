import { Component } from '@angular/core';
import { Note, NoteForUI } from 'src/app/types/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {
  allNotes?: NoteForUI[] = [];
  isLoading: boolean = true;
  emptyMessage?: string

  constructor(private firebaseService: FirebaseService) {
  }


  ngOnInit() {
    // for test purpose
    this.firebaseService.getNotesInTrashByUserId(localStorage.getItem("userId") + "")
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
        }

      })
  }

}
