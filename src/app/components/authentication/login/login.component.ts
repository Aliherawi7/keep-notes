import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/types/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  value: string = ''
  emailErrorMessage?: string
  passwordErrorMessage?: string
  isLoading: boolean = false
  isLoadingGoogle: boolean = false

  constructor(
    private authService: AuthGuardService,
    private router: Router,
    private firebaseService: FirebaseService) {


  }

  printInputs(): void {
    console.log(this.password, this.email)
  }

  loginWithEmailAndPassword(): void {
    this.isLoading = true
    this.emailErrorMessage = this.passwordErrorMessage = ''
    this.firebaseService.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        localStorage.setItem("accessToken", res.user.refreshToken)
        localStorage.setItem("refreshToken", res.user.refreshToken)
        localStorage.setItem("userId", res.user.uid);
        this.firebaseService.getUserInfo(res.user.uid)
          .then(r => {
            const user: User = r.docs[0].data() as User
            localStorage.setItem("keepNotesUserName", user.name as string)
            localStorage.setItem('keepNotesLastName', user.lastName as string)
            this.router.navigate(['/']);
          })
        this.authService.setLoggedIn(true)

      })
      .catch(error => {
        this.isLoading = false
        const message: string = ('' + error.message)
          .substring(error.message.indexOf('(') + 1, error.message.indexOf(')'));

        console.log(error.message);
        if (message.includes("email")) {
          this.emailErrorMessage = message
        } else {
          this.passwordErrorMessage = message
        }
      })
  }

  loginWithGoogle() {
    this.isLoadingGoogle = true;
    this.firebaseService.signInWithGoogle()
      .then(res => {
        console.log(res)
        this.isLoadingGoogle = false;
        this.authService.setLoggedIn(true)
        localStorage.setItem('keepNotesUserName', res.user.displayName as string)
        localStorage.setItem("userId", res.user.uid);
        const user: User = {
          authGeneratedId: res.user.uid,
          email: res.user.email,
          imageUrl: res.user.photoURL,
          joinedDate: new Date(),
          lastName: res.user.displayName,
          name: res.user.displayName,
          password: null
        }
        this.router.navigate(['/']);
        this.firebaseService.addUserInfo(user)
      })
      .catch(error => {
        this.isLoadingGoogle = false;
        console.log(error)
      })
  }

}

