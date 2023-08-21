import { Component, 
  inject, 
  OnDestroy
} from '@angular/core';

import { User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnDestroy {
  private userSubscribtion: Subscription

  public userState: User | null;
  public showUserMenu: boolean;
  public isVerified: any;

  constructor
  (
  private firebaseService: FirebaseService
  )
  {

  }

  async ngOnInit() {
    this.showUserMenu = false;
    this.isVerified = false;
    this.userSubscribtion = await this.firebaseService.user$.subscribe((aUser: User | null) => {
      if (aUser != undefined) {
        this.userState = aUser;
        this.isVerified = aUser.emailVerified;
      }
      else {
        this.userState = null;
      }
      this.showUserMenu = true;
    });

  }

  ngOnDestroy(): void {
    this.userSubscribtion.unsubscribe()
  }

  onLogout() {
    this.firebaseService.logout()
  }

  verified() {
    console.log()
    
  }
}

