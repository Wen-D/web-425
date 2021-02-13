/* ============================================
; Title:  GPA calculator app1
; Author: Professor Krasso
; Date:   5 February 2021
; Modified by: Wendy Leon
; Description:  gpa calculator app1
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
/* assisgnment title */
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.3 - GPA Calculator';

  }

  ngOnInit(): void {
  }
  // function signout clears cookies.
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
