import { Component } from '@angular/core';
import { Note } from '../../constants/Notes';
import { notes } from "../../constants/Notes"



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  allNotes?: Note[] = [];

  isLoaded: boolean = true;

  ngOnInit() {
    // for test purpose
    setTimeout(() => {
      this.isLoaded = false;
      this.allNotes = notes
    }, 1000)

  }



}
