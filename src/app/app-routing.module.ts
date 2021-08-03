import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { TradingChartsComponent } from './trading-charts/trading-charts.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: "home", component: TradingChartsComponent },
  { path: "about-us", component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
