/**
============================================
; Title:  Assignment 1.3 - Angular CLI
; Author: Professor Krasso
; Date:   12/18/20
; Modified by: Wendy Leon
; Description: Angular CLI
;===========================================
**/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
