import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  value: string = ''

  constructor(private authService: AuthGuardService, private rouer: Router) {


  }


  printInputs(): void {
    console.log(this.password, this.username)
  }

  login(): void {
    if (this.username == "aliherawi7@gmail.com" && this.password == "12345") {
      var log = this.authService.login();
      log.forEach(item => {
        this.rouer.navigate(["/"])
      })
    }
  }


}

