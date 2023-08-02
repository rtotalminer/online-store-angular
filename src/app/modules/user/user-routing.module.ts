import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [

  {path: 'login', component: LoginPageComponent, children: [
    { path: '', component: LoginFormComponent},
    { path: 'forgotPassword', component: ForgotPasswordComponent}
  ]},

  {path: 'register', component: RegisterComponent},
  // {path: 'forgotPassword', component: ForgotPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
