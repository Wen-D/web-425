/*============================================
; Title:  composer app
; Author: Professor Krasso
; Date:   10 January 2021
; Modified by: Wendy Leon
; Description: composer app
;===========================================
*/
import { Component, OnInit } from '@angular/core';
// import IComposer interface
import {IComposer} from '../composer.interface';
//import composer class
import {Composer} from '../composer.class';




@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
//composer property
  composers: Array<IComposer>;
  constructor(){
       this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
