import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserModule } from '../modules/user/user.module';
import { AppModule } from '../app.module';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    // InputSearchComponent  
  ],
  imports: [

    CommonModule,
    UserModule,
  ]
})
export class CoreModule { }
