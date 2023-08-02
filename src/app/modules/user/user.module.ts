import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginPageComponent } from './components/login-page/login.component';
import { RegisterComponent } from './components/register/register.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { UserRoutingModule } from './user-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgOtpInputModule } from 'ng-otp-input';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,

    ReactiveFormsModule,
    FormsModule,

    NgOtpInputModule,
  ]
})
export class UserModule { }
