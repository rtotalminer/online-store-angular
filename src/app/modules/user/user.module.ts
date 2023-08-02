import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
