import { Component, OnInit } from '@angular/core';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any

  constructor
  (
   private firebaseService: FirebaseService
  )
  {}

  ngOnInit(): void {
    this.user = this.firebaseService.getUserState()
  }

}

