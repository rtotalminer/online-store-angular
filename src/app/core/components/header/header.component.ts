import { Component } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';
import { data } from 'src/config/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor
  (
    private storeService: StoreService,
  )
  {
  
  }

  getUser() {
    return this.storeService.getData(data.USER_STORE_SERVICE_STRING);
  }


}

