import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditorComponent } from './note-editor.component';
import { InputComponent } from '../UI/input/input.component';
import { ButtonComponent } from '../UI/button/button.component';

describe('NoteEditorComponent', () => {
  let component: NoteEditorComponent;
  let fixture: ComponentFixture<NoteEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteEditorComponent, InputComponent, ButtonComponent]
    });
    fixture = TestBed.createComponent(NoteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
