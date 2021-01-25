
/*============================================
; Title:  enhanced profile
; Author: Professor Krasso
; Date:   15 January 2021
; Modified by: Wendy Leon
  Edited: 20 January 2021
; Description: enhanced profile
;===========================================
*/
//external files import
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';

import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

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

  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'),10);
    //uses composer service instead of class
    if (this.composerId) {
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
