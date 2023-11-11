import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { ButtonComponent } from '../UI/button/button.component';
import { LoadingComponent } from '../UI/loading/loading.component';
import { InputComponent } from '../UI/input/input.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesComponent, ButtonComponent, LoadingComponent, InputComponent]
    });
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
