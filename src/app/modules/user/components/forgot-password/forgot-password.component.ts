import { Component, ViewChild } from '@angular/core';
import { LoginPageComponent } from '../login-page/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {


  public verifying = false;
  public verified = true;
  public otp = "";
  public showOtpComponent = true; 


  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any; config = { allowNumbersOnly: true, length: 4, isPasswordInput: false, disableAutoFocus: false, placeholder: "*", inputStyles: { width: "50px", height: "50px", }, }; 


  constructor(private loginPage: LoginPageComponent){
  }

  return() {
    this.loginPage.forgetPassword = false;
  }

  verify() {
    // do logic to API etc. etc.
    this.verifying = true;
  }

  onOtpChange(otp: any) { this.otp = otp; // When all 4 digits are filled, trigger OTP validation method if (otp.length == 4) { this.validateOtp(); } } setVal(val) { this.ngOtpInput.setValue(val); } onConfigChange() { this.showOtpComponent = false; this.otp = null; setTimeout(() => { this.showOtpComponent = true; }, 0); } validateOtp() { // write your logic here to validate it, you can integrate sms API here if you want }
  }
}
