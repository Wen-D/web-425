import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');
    //verify if user is logged in
    if (sessionUser) {
      return true;
    }
    // if no user - show log in page and return false
    else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }

}
