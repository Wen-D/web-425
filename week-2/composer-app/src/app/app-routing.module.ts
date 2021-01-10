/*============================================
; Title: composer list
; Author: Professor Krasso
; Date:   10 January 2021
; Modified by: Wendy Leon
; Description: composer list
;===========================================
*/
// import external components

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// routes array with ulr and corresponding component
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component:ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
