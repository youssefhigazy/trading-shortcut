import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DescriptionComponent } from './description/description.component';
import { TradingChartsComponent } from './trading-charts/trading-charts.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: TradingChartsComponent },
  { path: "description", component: DescriptionComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: ":stock", component: TradingChartsComponent },
  { path: ":language/:stock", component: TradingChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
