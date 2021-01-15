/*============================================
; Title:  secure profile
; Author: Professor Krasso
; Date:   15 January 2021
; Modified by: Wen-D
; Description: secure profile
;===========================================
*/

// external files import

import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

// routes array path with corresponding component
export const AppRoutes: Routes = [
  {
      path: '',
      component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
