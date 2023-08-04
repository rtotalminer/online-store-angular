import { Component, ViewChild } from '@angular/core';
import { LoginPageComponent } from '../login-page/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  error?: string;

  formEmail!: FormGroup;
  submittedEmail = false;
  
  formOTP!: FormGroup;

  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "*",
    inputStyles: { width: "50px", height: "50px", }
  }; 


  constructor(
    private loginPage: LoginPageComponent,
    private formBuilder: FormBuilder,
    ){
  }

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      email: ['', Validators.required]
    });
    this.formOTP = this.formBuilder.group({
      OTP: ['', Validators.required]
    });
  }

  return() {
    this.loginPage.forgetPassword = false;
  }

  public verifyEmail() {
    this.submittedEmail = true;

    console.log(this.submittedEmail);
    console.log(this.formEmail.controls.email.errors)

    if (this.formEmail.invalid) {
      return;
    }



    // do logic to API etc. etc.
    this.verifying = true;
  }

  onOtpChange(otp: any) { this.otp = otp; // When all 4 digits are filled, trigger OTP validation method if (otp.length == 4) { this.validateOtp(); } } setVal(val) { this.ngOtpInput.setValue(val); } onConfigChange() { this.showOtpComponent = false; this.otp = null; setTimeout(() => { this.showOtpComponent = true; }, 0); } validateOtp() { // write your logic here to validate it, you can integrate sms API here if you want }
  }
}
