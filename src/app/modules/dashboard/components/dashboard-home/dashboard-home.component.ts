import { Component } from '@angular/core';

import { User, sendPasswordResetEmail } from '@angular/fire/auth';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  public isVerified = false;
  public user: User | null;
  public emailSent = false; 

  constructor(
    private firebaseService: FirebaseService,
  ) {

  }


  // Move Dashboard Email Verification to User page inside Dashboard.
  async ngOnInit() {
    await this.firebaseService.user$.subscribe((aUser: User | null) => {
      if (aUser != undefined) {
        this.user = aUser;
        this.isVerified = aUser.emailVerified;
      }
      else {
        this.isVerified = false;
      }
    });
  }

  resendEmailVerification() {
    const auth = this.firebaseService.auth;

    sendPasswordResetEmail(auth, this.user.email)
      .then(() => {
        this.emailSent = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
  }
}
