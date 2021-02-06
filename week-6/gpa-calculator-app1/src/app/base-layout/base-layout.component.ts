/* ============================================
; Title:  GPA calculator app1
; Author: Professor Krasso
; Date:   5 February 2021
; Modified by: Wendy Leon
; Description:  gpa calculator app1
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
/* assisgnment title */
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';

  }

  ngOnInit(): void {
  }

}
