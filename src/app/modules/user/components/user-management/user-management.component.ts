import { Component } from '@angular/core';
import { getParameterByKey } from 'src/helpers/getParameterByName';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {

  public activeComponent: any;

  ngOnInit() {
    this.activeComponent = getParameterByKey('mode'); 
  }

}
