/* ============================================
; Title:  GPA calculator app1
; Author: Professor Krasso
; Date:   5 February 2021
; Modified by: Wendy Leon
; Description:  gpa calculator app1
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  //@Input variable named gpaTotal of type number
  @Input() gpaTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}
