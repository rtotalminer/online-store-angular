import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserModule } from '../modules/user/user.module';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    // InputSearchComponent  
  
    ErrorComponent
  ],
  imports: [

    CommonModule,
    UserModule,
  ]
})
export class CoreModule { }
