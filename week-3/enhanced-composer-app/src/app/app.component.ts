/*============================================
; Title:  composer list
; Author: Professor Krasso
; Date:   14 January 2021
; Modified by: Wendy Leon
; Description: composer list
;===========================================
*/

//external files import
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// assignment name var
export class AppComponent {
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
