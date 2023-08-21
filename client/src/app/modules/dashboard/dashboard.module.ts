import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardMainComponent,
    SideBarComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule
  ]
})
export class DashboardModule { }
