/**
============================================
; Title:  Assignment 1.3 - Angular CLI
; Author: Professor Krasso
; Date:   12/18/20
; Modified by: Wendy Leon
; Description: Angular CLI
;===========================================
**/

//component import
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Wen-D's World";
 // title = 'hello-world';
}
