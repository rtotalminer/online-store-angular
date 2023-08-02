import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(
    private firebaseService: FirebaseService
  ) {}

  onSubmit(email: string, password: string) {
    this.firebaseService.signUp({email, password})
  }
}