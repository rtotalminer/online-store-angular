import { Component } from '@angular/core';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error?: string;
  loading?: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
  ) {}

  async onSubmit(email: string, password: string, verifyPassowrd: string) {
    this.error = "";
    this.loading = true;

    if (password != verifyPassowrd) {
      this.error = "Passwords do not match"
    }

    createUserWithEmailAndPassword(this.firebaseService.auth, email, password)
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