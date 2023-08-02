import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from "rxjs/operators";

import { LoginModel } from 'src/app/data/models/login.model';
import { UserService } from 'src/app/services/user.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginPageComponent } from '../login-page/login.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { IAuth } from 'src/app/core/interfaces/auth.interface';
import { IHttpError } from 'src/app/core/interfaces/http-error.interface';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  form!: FormGroup;
  loading = false;
  submitted = false;
  error?: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private loginPage: LoginPageComponent,
      private firebaseService: FirebaseService
    ) {
      // redirect to home if already logged in
      if (this.userService.userValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alert on submit
      this.error = '';

      // stop here if form is invalid
      if (this.form.invalid) {
        console.log(this.error);
          return;
      }

      this.loading = true;
      this.userService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // get return url from query parameters or default to home page
                  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl(returnUrl);
              },
              error: error => {
                  this.error = error;
                  this.loading = false;
              }
          });
  }

  onLogin(email: string, password: string) {

    this.submitted = true;

    // stop here if form is invalid
    // if (this.form.invalid) {
    // console.log(this.error);
    //     return;
    // }

    this.loading = true;

    let res = this.firebaseService.signIn({email, password});

    this.loading = false;

    console.log(res);

    // if (res[0] == "error") {
    //     this.loading = false;
    //     this.error = res[2];
    // }
    // else {
    //     // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //     this.router.navigateByUrl("/");
    // }
  }

  forgotPassword() {
    this.loginPage.forgetPassword = true;
  }

}
