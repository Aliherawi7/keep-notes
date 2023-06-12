import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

export const authGuard = () => {
  const authService = inject(AuthGuardService);
  const router = inject(Router);
  if (authService.isLoggedIn) {
    return true;
  }

  return router.parseUrl("/login")
};
