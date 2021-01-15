
/*============================================
; Title:  enhanced profile
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Wendy Leon
; Description: enhanced profile
;===========================================
*/


// external files import
import { Component, OnInit } from '@angular/core';
//angular component
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  // value from sign-in.component assigned to isLoggedIn var
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
