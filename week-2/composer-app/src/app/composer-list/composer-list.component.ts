/*============================================
; Title:  composer app
; Author: Professor Krasso
; Date:   10 January 2021
; Modified by: Wendy Leon
; Description: composer app
;===========================================
*/
import { Component, OnInit } from '@angular/core';
//Composer class w/ two attributes
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName:string, genre:string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;
  constructor() {
    this.composers = [
      new Composer('Antonio Vivaldi', 'Classical'),
      new Composer('Joseph Haydn', 'Classical'),
      new Composer('Frédéric Chopin', 'Classical'),
      new Composer('Pyotr Ilyich Tchaikovsky', 'Classical'),
      new Composer('Claude Debussy', 'Classical')
    ]
  }

  ngOnInit(): void {
  }

}
