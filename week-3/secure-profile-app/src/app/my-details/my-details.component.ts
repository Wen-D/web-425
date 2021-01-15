/*
============================================
; Title:  enhanced profile
; Author: Professor Krasso
; Date:   10 January 2021
; Modified by: Wendy leon
; Description: enhanced profile
;===========================================
*/
import { Component, OnInit } from '@angular/core';

export default class Person{
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'
  ];
//constructor for person
  constructor (fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
    // display the content of the person class
    toString() {
      console.log(`\n Full Name: ${this.fullName}\n Favorite Food: ${this.favoriteFood}\n Favorite Color:  ${this.favoriteColor}`);
    }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
    //person datatype variable named myProfile
    myProfile: Person;

    constructor() {//new person values for Wen-D
      this.myProfile = new Person ("Wen-D", "Chicken Parm", "Blue");
      this.myProfile.toString();
    }

  ngOnInit(): void {
  }

}


