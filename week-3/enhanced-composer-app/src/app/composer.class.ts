/*============================================
; Title:  enhanced composer list
; Author: Professor Krasso
; Date:   14 January 2021
; Modified by: Wendy Leon
; Description: composer app
;===========================================
*/
// imports from externall files

import {IComposer} from './composer.interface';

// composer class with constructor with composer array of objects
export class Composer {

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
  getComposers(){
    return this.composers;
  }

  // For looping through composer list searches composer by ID number
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return false;
  }
}
