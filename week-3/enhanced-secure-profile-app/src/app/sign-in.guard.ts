/*============================================
; Title:  secure profile
; Author: Professor Krasso
; Date:   15 January 2021
; Modified by: Wen-D
; Description: secure profile
;===========================================
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import angular built-in router
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  //Adds the Router to the guards constructor
  constructor(private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //variable for isLoggedIn, assigns the returned value from the queryParams function
      let isLoggedIn = next.queryParams.isLoggedIn;

      // o	If isLoggedIn equals true, return true
      if (isLoggedIn) {
        return true;
      }

      //o	If isLoggedIn equals false, navigate users back to the sign-in page
      else {
        this.router.navigate(['/']);
        return false;
      }
    }
  }
