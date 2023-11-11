import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { authentication, database, googleProvider } from '../config/firebase';
import { getDoc, collection, addDoc, deleteDoc, getDocs, where, query, doc, updateDoc, orderBy } from "firebase/firestore";
import { User } from '../types/User';
import { Note, NoteForUI } from '../types/Note';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private Authentication = authentication;
  private Database = database;
  private GoogleProvider = googleProvider;
  constructor(private router: Router) { }

  /***********************   Notes   **********************/
  private notesCollection = collection(this.Database, "Notes");
  getNotesByUserId(userId: string) {
    const q = query(this.notesCollection, where("userId", "==", userId));
    return getDocs(q);
  }

  getNoteByNoteId(noteId: string) {
    return getDoc(doc(this.Database, 'Notes', noteId))
  }

  addNote(note: Note) {
    return addDoc(this.notesCollection, note);
  }

  updateNote(note: NoteForUI) {
    const noteDoc = doc(this.Database, 'Notes', note.id);
    return updateDoc(noteDoc, { ...note })
  }

  deleteNote(noteId: string) {
    const noteDoc = doc(this.Database, 'Notes', noteId);
    return deleteDoc(noteDoc)
  }

  /***********************   Authentication   ********************* */

  // create new user
  signUpWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(this.Authentication, email, password)
  }
  // sign in 
  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.Authentication, email, password)
  }

  signInWithGoogle(): Promise<any> {
    return signInWithPopup(this.Authentication, this.GoogleProvider,)
  }

  logOut() {
    signOut(this.Authentication);
    localStorage.clear()
    this.router.navigate(['/login']);
  }




  // save user information
  userCollectionRef = collection(this.Database, "Users")

  addUserInfo(user: User) {
    return addDoc(this.userCollectionRef, user);

  }
  deleteUserInfo(userId: string) {
    const userDoc = doc(this.Database, "Users", userId);
    return deleteDoc(userDoc);
  }

  getUserInfo(userId: string) {
    const q = query(this.userCollectionRef, where("authGeneratedId", "==", userId));
    return getDocs(q);

  }





}
