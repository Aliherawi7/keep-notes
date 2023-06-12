import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keep Notes';
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthGuardService) {
    this.isLoggedIn = authService.isLoggedIn;
  }

  onInit() {
    console.log(this.isLoggedIn, " inf app comp")
    if (!this.isLoggedIn) {
      this.router.navigate(["/login"]);
    }
  }

}
