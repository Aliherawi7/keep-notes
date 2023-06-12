import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/constants/Notes';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  noteTitle: string = ''
  color: string = ''
  id?: number
  date: string = new Date().toDateString();
  text?: Array<string>;
  textValueForTextArea?: string



  constructor(private noteService: NoteService, private router: Router) {
    var url = router.url.split('/');
    var pathVar: number = Number.parseInt(url[url.length - 1])
    console.log(pathVar)
    var note: Note | undefined = this.noteService.findNoteById(pathVar);
    console.log(note)
    if (note) {
      this.noteTitle = note.title;
      this.color = note.color;
      this.color = note.color;
      this.id = note.id;
      this.date = note.date;
      this.text = note.text;
      this.textValueForTextArea = noteService.getTheTexts(note)
    }

  }




}
