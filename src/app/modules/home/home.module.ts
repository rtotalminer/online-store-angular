import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'

import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { HomeComponent } from './home.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,

        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
    ]

})

export class HomeModule {}