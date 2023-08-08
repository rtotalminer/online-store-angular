import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from "rxjs/operators";

import { LoginModel } from 'src/app/data/models/login.model';
import { UserService } from 'src/app/services/user.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginPageComponent } from '../login-page/login.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { IAuth } from 'src/app/data/interfaces/auth.interface';
import { IHttpError } from 'src/app/data/interfaces/http-error.interface';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  private auth: Auth = inject(Auth);

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

  }

  ngOnInit() {
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      // redirect to home if already logged in
      if (this.userService.userValue) {
          this.router.navigate(['/']);
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onLogin(email: string, password: string) {

    this.submitted = true;
    this.loading = true;

    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      this.loading = false;
      this.router.navigateByUrl('/');
    })
    .catch((error) => {
      this.loading = false;
      this.error = error.message;
    });
  }
}
