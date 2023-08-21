import { Component } from '@angular/core';

import { User, applyActionCode, checkActionCode } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { StoreService } from 'src/app/services/store.service';

import { getParameterByKey } from 'src/helpers/getParameterByName';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  public success = false;
  public loading = false;
  public errors: string[];

  public actionCode: string;
  public continueUrl: string;
  public lang: string;

  constructor(
    private firebaseService: FirebaseService,
    private storeService: StoreService,
    private router: Router,
    )
  {

  }

  ngOnInit() {
    this.actionCode = getParameterByKey('oobCode');
    this.continueUrl = getParameterByKey('continueUrl');
    this.lang = getParameterByKey('lang') || 'en';
  }

  async helloworld() {
    if (!this.loading) {
      this.loading = true;
    }

    let restoredEmail = null;
    await checkActionCode(this.firebaseService.auth, this.actionCode).then((info) => {
      restoredEmail = info['data']['email'];
      applyActionCode(this.firebaseService.auth, this.actionCode);
    }).then(() => {
        return this.firebaseService.user$.subscribe((aUser: User | null) => {
          aUser.reload();
          this.loading = false;
          this.success = true;
        });
      }).catch((error) => {
    });
    
  }
}