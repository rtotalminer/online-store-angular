import { Component, ViewChild, ViewChildDecorator, ViewContainerRef } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent {

  public forgetPassword: boolean;

  constructor(
  ) {
    this.forgetPassword = false;
  }

  ngOnInit() {
    this.forgetPassword = false;
  }

}
