import { Component } from '@angular/core';
import { createUserWithEmailAndPassword, sendEmailVerification } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { data } from 'src/config/data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errors?: string[];
  loading?: boolean = false;
  success?: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
  ) {}

  async onSubmit(email: string, password: string, verifyPassowrd: string) {
    this.errors = [];
    this.loading = true;

    if (password != verifyPassowrd) {
      this.errors.push(data.PASSWORD_DOES_NOT_MATCH);
      this.loading = false;
      return;
    }

    await createUserWithEmailAndPassword(this.firebaseService.auth, email, password)
      .then((user) => {
        sendEmailVerification(this.firebaseService.auth.currentUser)
          .then(() => {
            this.success = true;
          });
      })
      .catch((error) => {
        this.errors.push(error.message); 
      });



    this.loading = false;

  }
}