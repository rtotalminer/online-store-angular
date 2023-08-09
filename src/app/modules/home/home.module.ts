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
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ShopOnlineComponent } from './components/shop-online/shop-online.component';
import { WhatsNewComponent } from './components/whats-new/whats-new.component';
import { ContactComponent } from './components/contact/contact.component';
import { InputSearchComponent } from 'src/app/core/components/input-search/input-search.component';
import { TopCategorieCardComponent } from './components/main/top-categorie-card/top-categorie-card.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        AboutComponent,
        ShopOnlineComponent,
        WhatsNewComponent,
        ContactComponent,
        InputSearchComponent,
        TopCategorieCardComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,

        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatMenuModule,

        MatButtonModule,
        MatMenuModule
    ]

})

export class HomeModule {}