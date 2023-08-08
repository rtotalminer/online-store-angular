import { Component, ViewChild, ViewChildDecorator, ViewContainerRef, inject } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Auth, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent {
}
