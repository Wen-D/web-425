/*============================================
; Title:  secure profile
; Author: Professor Krasso
; Date:   15 January 2021
; Modified by: Wen-D
; Description: secure profile
;===========================================
*/

// external files import

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SignInComponent } from './sign-in/sign-in.component';

// routes array path with corresponding component
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
