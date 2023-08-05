import { Component, 
  inject, 
  OnDestroy
} from '@angular/core';

import { Auth, User, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnDestroy {
private userSubscribtion: Subscription

public userState: User | null
public loadCompleated: boolean = false

constructor
(
private firebaseService: FirebaseService
)
{
this.userSubscribtion = this.firebaseService.user$.subscribe((aUser: User | null) => {
this.userState = aUser
})
}

ngOnDestroy(): void {
this.userSubscribtion.unsubscribe()
}

onLogout() {
this.firebaseService.logout()
}
}

