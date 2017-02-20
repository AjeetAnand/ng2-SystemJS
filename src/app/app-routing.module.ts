import { Component, NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';

import { MyLoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { UserComponent } from '../app/user/user.component';

const routes: Routes = [
	{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: MyLoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'users',
    component: UserComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [ MyLoginComponent, SignupComponent, UserComponent ];