import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserModule } from './components/user/user.module';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    UserModule,
  ]
})
export class CoreModule { }
