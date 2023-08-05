import { Component, OnInit, inject } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs'

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  private auth: Auth = inject(Auth);
  userState: any
  user$ = user(this.auth)
  userSubscription: Subscription

  constructor
  (
   private firebaseService: FirebaseService
  )
  {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      this.userState = aUser
    })
  }

  onLogout() {
    this.firebaseService.logout()
  }

  onConsole() {
    console.log(this.userState)
  }
}

