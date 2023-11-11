import { Injectable } from '@angular/core';
import { authentication } from '../config/firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  public isLoggedIn = localStorage.getItem('accessToken') == undefined ? false : true;

  setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

}
