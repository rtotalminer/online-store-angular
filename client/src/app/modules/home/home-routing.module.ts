import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { MainComponent } from "./components/main/main.component";
import { ShopOnlineComponent } from "./components/shop-online/shop-online.component";
import { WhatsNewComponent } from "./components/whats-new/whats-new.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {path: '', component: HomeComponent, children: [
        { path: '', component: MainComponent},
        { path: 'shopOnline', component: ShopOnlineComponent},
        { path: 'whatsNew', component: WhatsNewComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'aboutus', component: AboutComponent},
    ]}
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}