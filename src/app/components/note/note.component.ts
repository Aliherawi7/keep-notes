import { Component, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() id: string = '';
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() createdAt: Date = new Date();
  @Input() lastUpdate: Date = new Date();
  @Input() enable: boolean = true;
  @Input() userId: string = '';
  @Input() data: string = ''

  formattedDate?: string
  isLoading: boolean = true;

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.formattedDate = this.lastUpdate?.toUTCString()
    console.log(this.id)
  }


  moveToTrash() {
    console.log("remov clicked")
    this.firebaseService.moveNoteInTrash({
      color: this.color,
      createdAt: this.createdAt,
      data: this.data,
      enable: this.enable,
      id: this.id,
      lastUpdate: this.lastUpdate,
      title: this.title,
      userId: this.userId
    })
      .then(r => {
        console.log(r)
      })
  }

  deleteForever() {
    console.log("delete for ever clicked")
    this.firebaseService.deleteNote(this.id)
      .then(r => {
        console.log(r)
      })
  }

  moveFromTrash() {
    console.log("remov clicked")
    this.firebaseService.moveNoteFromTrash({
      color: this.color,
      createdAt: this.createdAt,
      data: this.data,
      enable: this.enable,
      id: this.id,
      lastUpdate: this.lastUpdate,
      title: this.title,
      userId: this.userId
    })
      .then(r => {
        console.log(r)
      })
  }



}
