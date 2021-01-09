
/*============================================
; Title:  router module
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Wendy Leon
; Description: Router Module
;===========================================
*/
import { NgModule } from '@angular/core';
//importing external files
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
// routing array with path and corresponding component
const routes: Routes = [
  // home page
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  //contact page
  {
    path: 'contact',
    component: ContactComponent
  },
  // about page
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
