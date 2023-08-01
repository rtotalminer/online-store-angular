import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';

import { UserModule } from './components/user/user.module';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,

    UserModule,
  ]
})
export class CoreModule { }
