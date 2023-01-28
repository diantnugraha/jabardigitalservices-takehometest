import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAreaChartComponent } from './app-area-chart/app-area-chart.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { PiePerairanComponent } from './pie-perairan/pie-perairan.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAreaChartComponent,
    BarComponent,
    PieComponent,
    PiePerairanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
