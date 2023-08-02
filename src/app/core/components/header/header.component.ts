import { Component } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';
import { data } from 'src/config/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isUserLogged = false

  constructor
  (
   private userService: UserService
  )
  {
  
  }

  getUser() {
    this.userService.getUser()
  }


}

