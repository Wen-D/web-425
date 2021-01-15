
/*============================================
; Title:  enhanced profile
; Author: Professor Krasso
; Date:   15 January 2021
; Modified by: Wendy Leon
; Description: enhanced profile
;===========================================
*/
//external files import
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
// fields with composer details
  composerId: number;
  composer: IComposer;

  // route builds the path for composer pages by id

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'),10);

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
