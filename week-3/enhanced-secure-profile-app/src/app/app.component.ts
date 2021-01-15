/*============================================
; Title:  enhanced profile
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Wendy Leon
; Description: enhanced profile
;===========================================
*/


//external files import
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// assignment name header for app html file

export class AppComponent {
  assignment: string = 'Exercise 3.3 - Passing Data to Routes - Part Deux';
}
