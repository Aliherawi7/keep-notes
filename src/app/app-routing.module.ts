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
    path: Paths.trash,
    title: "Trash",
    component: TrashComponent,
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
