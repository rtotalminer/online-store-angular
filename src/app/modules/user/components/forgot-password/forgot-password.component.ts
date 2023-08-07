import { Component, ViewChild } from '@angular/core';
import { LoginPageComponent } from '../login-page/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FirebaseService } from 'src/app/services/firebase.service';
import { data } from 'src/config/data';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {


  public emailSent = false;

  // public otp = "";
  // public showOtpComponent = true; 

  error?: string;

  formEmail!: FormGroup;
  submittedEmail = false;
  
  // formOTP!: FormGroup;

  // @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  // config = {
  //   allowNumbersOnly: true,
  //   length: 5,
  //   isPasswordInput: false,
  //   disableAutoFocus: false,
  //   placeholder: "*",
  //   inputStyles: { width: "50px", height: "50px", }
  // }; 


  constructor(
    private loginPage: LoginPageComponent,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
    ){
  }

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  public sendEmail() {
    this.submittedEmail = true;

    if (this.formEmail.invalid) {
      return;
    }

    const auth = this.firebaseService.auth;
    const email = this.formEmail.controls.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        this.emailSent = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == data.FIREBASE_USER_NOT_FOUND) {
          this.emailSent = true;
        }
        else {
          this.error = errorMessage;
        }
      });
  }

  // onOtpChange(otp: any) { this.otp = otp; // When all 4 digits are filled, trigger OTP validation method if (otp.length == 4) { this.validateOtp(); } } setVal(val) { this.ngOtpInput.setValue(val); } onConfigChange() { this.showOtpComponent = false; this.otp = null; setTimeout(() => { this.showOtpComponent = true; }, 0); } validateOtp() { // write your logic here to validate it, you can integrate sms API here if you want }
  // }
}
