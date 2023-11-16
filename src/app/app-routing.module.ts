import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { Paths } from './constants/Paths';
import { LoadingComponent } from './components/UI/loading/loading.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { authGuard } from './auth/auth.guard';
import { TrashComponent } from './components/trash/trash.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { RemindersComponent } from './components/reminders/reminders.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Keep Notes",
    pathMatch: "full",
    canActivate: [authGuard]
  },
  {
    path: Paths.notes,
    component: NotesComponent,
    title: "Notes",
    pathMatch: "full",
    canActivate: [authGuard]
  },
  {
    path: Paths.addNote,
    title: "Add note",
    component: NoteEditorComponent,
    canActivate: [authGuard]
  },
  {
    path: Paths.editNote,
    title: "Edit note",
    component: NoteEditorComponent,
    pathMatch: "full",
    canActivate: [authGuard]
  },
  {
    path: Paths.archives,
    title: "Trash",
    component: ArchivesComponent,
    pathMatch: "full",
    canActivate: [authGuard]
  },
  {
    path: Paths.reminders,
    title: "Trash",
    component: RemindersComponent,
    pathMatch: "full",
    canActivate: [authGuard]
  },
  {
    path: Paths.trash,
    title: "Trash",
    component: TrashComponent,
    pathMatch: "full",
    canActivate: [authGuard]
  },
  {
    path: Paths.settings,
    title: "settings",
    component: SettingsComponent,
    pathMatch: "full",
    canActivate: [authGuard]
  },
  {
    path: Paths.login,
    title: "keep notes login page",
    component: LoginComponent
  },
  {
    path: Paths.signup,
    component: SignupComponent
  },
  {
    path: Paths.spinner,
    component: LoadingComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
