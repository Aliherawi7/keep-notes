import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { Note, NoteForUI } from 'src/app/types/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Timestamp } from 'firebase/firestore';

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

  constructor(private timeService: TimeService, private firebaseService: FirebaseService) {
    this.message = this.timeService.getTimeMessage() + ' ' + localStorage.getItem("keepNotesUserName")
    this.dateMessage = this.timeService.getTimeAndDateString();
  }

  ngOnInit() {
    this.message = this.timeService.getTimeMessage() + ' ' + localStorage.getItem("keepNotesUserName")
    // for test purpose
    this.firebaseService.getNotesByUserId(localStorage.getItem("userId") + "")
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
