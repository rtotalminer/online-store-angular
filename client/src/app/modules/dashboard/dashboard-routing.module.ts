import { NgModule } from "@angular/core";

import { DashboardMainComponent } from "./components/dashboard-main/dashboard-main.component";
import { DashboardHomeComponent } from "./components/dashboard-home/dashboard-home.component";
import { RouterModule, Routes } from "@angular/router";


// Add auth guard
const routes: Routes = [
    {path: 'dashboard', component: DashboardMainComponent, children: [
        { path: '', component: DashboardHomeComponent},
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}