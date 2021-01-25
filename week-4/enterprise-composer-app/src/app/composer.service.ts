/*============================================
; Title:  enhanced composer list
; Author: Professor Krasso
; Date:   14 January 2021
; Modified by: Wendy Leon
; Edited: 25 Jan 2021
; Description: composer app
;===========================================
*/
// imports from externall files
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// composer class with constructor with composer array of objects
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: 'Ludwig van Beethoven', genre: 'Classical'},
      {composerId: 101, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical'},
      {composerId: 102, fullName: 'Richard Wagner', genre: 'Classical'},
      {composerId: 103, fullName: 'Claude Debussy', genre: 'Classical'},
      {composerId: 104, fullName: 'Frederic Chopin', genre: 'Classical'}
    ]
  }

  // data access point for composer array objects
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  // For looping through composer list searches composer by ID number
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }



  filterComposer(name: string): Observable<IComposer[]> {
    // functions chained together using the pipe operator
    return of(this.composers).pipe(
      // map function returns new array with composers
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1))
    )
  }
}
