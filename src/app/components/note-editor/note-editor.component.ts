import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note, NoteForUI } from 'src/app/types/Note';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  isLoading: boolean = false;
  isLoadingBtn: boolean = false;
  showModal: boolean = false;
  modalMessage: string = '';
  public editor = DecoupledEditor;
  noteTitle: string = ''
  color: string = '#d82262'
  id?: string
  date: string = new Date().toDateString();
  data?: string;
  public editorConfig = {
    toolbar: {
      items: [
        'undo', 'redo',
        '|', 'heading',
        '|', 'fontfamily', 'fontSize', 'fontColor', 'fontBackgroundColor',
        '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
        '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
        '|', 'alignment',
        '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
      ],
      shouldNotGroupWhenFull: true
    },
  };
  public onReady(editor: DecoupledEditor): void {
    const element = editor.ui.getEditableElement()!;
    const parent = element.parentElement!;
    parent.insertBefore(
      editor.ui.view.toolbar.element!,
      element
    );
  }


  constructor(private router: Router,
    private firebaseService: FirebaseService,
    private noteService: NoteService) {
    var url = router.url.split('/');
    var pathVar: string = url[url.length - 1]
    if (this.router.url.includes('/edit-note')) {
      this.isLoading = true;
      this.firebaseService.getNoteByNoteId(pathVar)
        .then(res => {
          const resData = res.data() as Note
          this.color = resData.color;
          this.data = resData.data;
          this.noteTitle = resData.title;
          this.id = pathVar;
          this.isLoading = false
        })
    }
  }

  public onChange({ editor }: ChangeEvent) {
    this.data = editor.data.get()
  }

  save() {
    this.isLoading = true;
    const note: NoteForUI = {
      id: this.id as string,
      color: this.color,
      createdAt: new Date(),
      data: this.data || '',
      lastUpdate: new Date(),
      title: this.noteTitle,
      userId: localStorage.getItem("userId") || '',
      enable: true
    }
    if (this.router.url.includes('/edit-note') && this.id) {
      this.noteService.updateNote(note)
        .then(res => {
          this.router.navigate(['/notes'])
        })
    } else {
      this.noteService.addNote(note)
        .then(res => {
          this.router.navigate(['/notes'])
        })
    }

  }

  deleteNote() {
    if (this.id) {
      this.noteService.moveToTrash(this.id)
      this.router.navigate(['/notes'])
    }
  }

  handleModalShow() {
    this.showModal = !this.showModal;
    console.log("click removed")
  }
}
