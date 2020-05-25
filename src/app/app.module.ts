import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TradeChartComponent } from './trade-chart/trade-chart.component';
import { ChartsModule } from 'ng2-charts';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GryDescriptionComponent } from './gry-description/gry-description.component';
import { ShowIndexComponent } from './show-index/show-index.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TradeChartComponent,
    NavMenuComponent,
    GryDescriptionComponent,
    ShowIndexComponent,
    MainPageComponent,
    TestcomponentComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
