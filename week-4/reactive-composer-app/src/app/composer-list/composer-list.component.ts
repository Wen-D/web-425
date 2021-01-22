/*============================================
; Title:  composer app
; Author: Professor Krasso
; Date:   10 January 2021
; Modified by: Wendy Leon
  Edited: 20 January 2021
; Description: composer app
;===========================================
*/
//file imports from external files
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from  '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  //
  txtSearchControl = new FormControl('');

  //the constructor method - creates an instance of the composer class
//New instance of composer service using dependency injection
  constructor(private ComposerService: ComposerService) {
    this.composers = this.ComposerService.getComposers();
     // subscribe method passing filter value / debounce time is the time interval
     this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }
  // JS alert box with the observable value in txtSearchControl
  filterComposers(name: string) {
    alert(name);
  }
}
