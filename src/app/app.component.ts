import { Component } from '@angular/core';
import { User } from './data/models/user.model';
import { UserService } from './services/user.service';
import { StoreService } from './services/store.service';
import { data } from 'src/config/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'online-store';

  constructor(
      private storeService: StoreService,
      private userService: UserService
    )
    {
      this.userService.user.subscribe(x => storeService.addData(data.USER_STORE_SERVICE_STRING, x));
    }

}
