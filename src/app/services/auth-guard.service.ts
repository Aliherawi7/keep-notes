import { Injectable } from '@angular/core';

import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  isLoggedIn = true;
  redirectUrl: string | null = null;


  login(): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
