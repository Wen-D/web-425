/*============================================
; Title:  enhanced profile
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Wendy Leon
; Description: enhanced profile
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;

  assignment: string = 'Exercise 2.3 - Data Binding';
}
