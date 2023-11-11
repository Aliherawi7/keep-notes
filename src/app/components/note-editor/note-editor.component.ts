import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note, NoteForUI } from 'src/app/types/Note';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  isLoading: boolean = true;
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


  constructor(private router: Router, private firebaseService: FirebaseService) {
    var url = router.url.split('/');
    var pathVar: string = url[url.length - 1]
    var userId: string = localStorage.getItem('userId') || '';
    console.log(pathVar)
    console.log(userId)
    if (this.router.url.includes('/edit-note')) {
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
    console.log(this.data)
  }

  save() {
    this.isLoading = true;
    if (this.router.url.includes('/edit-note') && this.id) {
      const note: NoteForUI = {
        id: this.id,
        color: this.color,
        createdAt: new Date(),
        data: this.data || '',
        lastUpdate: new Date(),
        title: this.noteTitle,
        userId: localStorage.getItem("userId") || '',
      }
      this.firebaseService.updateNote(note)
        .then(res => {
          this.isLoading = false;
          this.router.navigate(['/notes'])
        })

    } else {
      const note: Note = {
        color: this.color,
        createdAt: new Date(),
        data: this.data || '',
        lastUpdate: new Date(),
        title: this.noteTitle,
        userId: localStorage.getItem("userId") || '',
      }
      this.firebaseService.addNote(note)
        .then(res => {
          this.router.navigate(['/notes'])
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error)
        })
    }

  }

  deleteNote() {
    if (this.id)
      this.firebaseService.deleteNote(this.id)
        .then(res => {
          console.log(res)
          // this.router.navigate(['/notes']);
        })
        .catch(error => {
          console.log(error)
        })
  }

  handleModalShow() {
    this.showModal = !this.showModal;
    console.log("click removed")
  }


}
