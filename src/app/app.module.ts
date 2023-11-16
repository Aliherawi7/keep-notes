import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from "@angular/router"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/UI/input/input.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NoteComponent } from './components/note/note.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { BackdropComponent } from "./components/UI/backdrop/backdrop.component";
import { LoadingComponent } from './components/UI/loading/loading.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { BtnLoadingComponent } from './components/UI/btn-loading/btn-loading.component';
import { TrashComponent } from './components/trash/trash.component';
import { ModalComponent } from './components/UI/modal/modal.component';
import { FullScreenLoadingComponent } from './components/UI/full-screen-loading/full-screen-loading.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/reducers/NoteReducer';
import { SettingsComponent } from './components/settings/settings.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ArchivesComponent } from './components/archives/archives.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
    SidebarComponent,
    NotesComponent,
    NotFoundComponent,
    HomeComponent,
    NoteComponent,
    NoteEditorComponent,
    BackdropComponent,
    LoadingComponent,
    LoginComponent,
    SignupComponent,
    BtnLoadingComponent,
    TrashComponent,
    ModalComponent,
    FullScreenLoadingComponent,
    SettingsComponent,
    RemindersComponent,
    ArchivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CKEditorModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ state: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
