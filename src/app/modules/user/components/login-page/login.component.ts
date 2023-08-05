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

  // Move User state to store.
  // private auth  = inject(Auth);
  // private user$ = user(this.auth)
  // private userSubscribtion: Subscription

  public forgetPassword: boolean;

  constructor(
  ) {
    this.forgetPassword = false;
  }

  ngOnInit() {
    this.forgetPassword = false;
  }

}
