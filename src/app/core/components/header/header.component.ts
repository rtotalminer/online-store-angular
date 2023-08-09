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

constructor
(
private firebaseService: FirebaseService
)
{

}

ngOnInit() {
this.showUserMenu = false;
this.userSubscribtion = this.firebaseService.user$.subscribe((aUser: User | null) => {
this.userState = aUser
this.showUserMenu = true;
})
}

ngOnDestroy(): void {
this.userSubscribtion.unsubscribe()
}

onLogout() {
this.firebaseService.logout()
}
}

