import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { StoreService } from 'src/app/services/store.service';
import { getParameterByKey } from 'src/helpers/getParameterByName';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  error: string;
  loading: boolean;
  submitted: boolean;

  mode: string;
  actionCode: string;
  continueUrl: string;
  lang: string;

  form!: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private router: Router,
    ) {
  }

  ngOnInit() {
      // check for correct cookie with the email submitted

      this.mode = getParameterByKey('mode');
      this.actionCode = getParameterByKey('oobCode');
      this.continueUrl = getParameterByKey('continueUrl');
      this.lang = getParameterByKey('lang') || 'en';

      this.form = this.formBuilder.group({
        password: ['', Validators.required],
        passwordVerify: ['', Validators.required]
      });
  }

  get f() { return this.form.controls; }

  resetPassword(passwordInput: string, passwordVerify: string) {

    this.submitted = true;
    this.loading = true;
    this.error = "";

    if (passwordInput != passwordVerify) {
      this.error = "Passwords do not match"; // move string literal
    }

    if (this.form.invalid) {
      return;
    }
   
    let res = this.firebaseService.handleResetPassword(
      this.mode,
      this.actionCode,
      this.continueUrl,
      this.lang,
      passwordInput
    );

    console.log(this.mode, this.actionCode, this.continueUrl, this.lang)
  }

}
