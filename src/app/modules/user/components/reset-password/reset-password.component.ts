import { Component } from '@angular/core';
import { confirmPasswordReset, verifyPasswordResetCode } from '@angular/fire/auth';
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
      // Get params from URL
      this.mode = getParameterByKey('mode');
      this.actionCode = getParameterByKey('oobCode');
      this.continueUrl = getParameterByKey('continueUrl');
      this.lang = getParameterByKey('lang') || 'en';

      // Invalid Action Code
      // TODO: Component briefly loads, we need to not allow this
      verifyPasswordResetCode(this.firebaseService.auth, this.actionCode).then((email) => {})
      .catch((error) => {
        this.router.navigateByUrl('/');
      });

      // Setup the form.
      this.form = this.formBuilder.group({
        password: ['', Validators.required],
        passwordVerify: ['', Validators.required]
      });
  }

  get f() { return this.form.controls; }

  resetPassword(passwordInput: string, passwordVerify: string) {

    // Set dynamic form variables
    this.submitted = true;
    this.loading = true;
    this.error = "";

    // Verify if passwords match
    if (passwordInput != passwordVerify) {
      this.error = "Passwords do not match"; // move string literal
      this.submitted = false;
      this.loading = false;
      return;
    }
    
    // Verify actions code
    verifyPasswordResetCode(this.firebaseService.auth, this.actionCode).then(() => {
      // Confirm the password reset
      confirmPasswordReset(this.firebaseService.auth, this.actionCode, passwordInput).then(() => {
        this.submitted = false;
        this.loading = false;
        // Redirect to login
        this.router.navigateByUrl('/login');
      }).catch((error) => {
          // Invalid password of code expired
          this.error = error;
          this.submitted = false;
          this.loading = false;
        }); 
    }).catch((error) => {
        // Code expired or invalid request from firebase
        this.error = error;
        this.submitted = false;
        this.loading = false;
    });
  }

}
