import { Component, ViewChild } from '@angular/core';
import { LoginPageComponent } from '../login-page/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FirebaseService } from 'src/app/services/firebase.service';
import { data } from 'src/config/data';
import { generateString } from 'src/helpers/generateRandomString';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  public emailSent = false;
  public loading = false;
  error?: string;
  formEmail!: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    ){
  }

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  public sendEmail(emailInput: string) {
    this.submitted = true;
    this.error = "";
    this.loading = true;

    const auth = this.firebaseService.auth;

    sendPasswordResetEmail(auth, emailInput)
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
          console.log(error)
          this.error = errorMessage;
          this.loading = false;
        }
        
      });
  }

}
