/*============================================
; Title:  secure enhanced profile
; Author: Professor Krasso
; Date:   15 January 2021
; Modified by: Wen-D
; Description: secure enhanced profile
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  //user will automatically be logged in
  isLoggedIn: true;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

    // sends parameters to home component
    signin(){
      this.isLoggedIn = true;
      this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
    }
}
