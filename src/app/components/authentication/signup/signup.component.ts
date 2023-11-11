import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  value: string = ''
  emailErrorMessage?: string;
  passwordErrorMessage?: string;
  isLoading: boolean = false;

  constructor(private router: Router, private firebaseService: FirebaseService, private authService: AuthGuardService) {
  }


  signUpWithEmailAndPassword(): void {
    this.isLoading = true
    this.emailErrorMessage = this.passwordErrorMessage = ''
    this.firebaseService.signUpWithEmailAndPassword(this.email, this.password)
      .then(res => {
        console.log(res)
        // if everything is ok then save the user information
        localStorage.setItem("keepNotesUserName", this.name)
        localStorage.setItem('keepNotesLastName', this.lastName)
        localStorage.setItem("accessToken", res.user.refreshToken)
        localStorage.setItem("refreshToken", res.user.refreshToken)
        localStorage.setItem("userId", res.user.uid);
        this.firebaseService.addUserInfo({
          name: this.name,
          lastName: this.lastName,
          password: this.password,
          authGeneratedId: res.user.uid,
          email: this.email,
          imageUrl: "",
          joinedDate: new Date()
        })
        this.authService.setLoggedIn(true)
        this.router.navigate(['/']);

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
      });

    // here we need store the user details in firebase firestore
    //this.rouer.navigate(["/"])
  }

}
