import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(
      private firebaseService: FirebaseService
    ) {}

  onSubmit(email: string, password: string) {
    this.firebaseService.signIn({email, password})
  }
}
