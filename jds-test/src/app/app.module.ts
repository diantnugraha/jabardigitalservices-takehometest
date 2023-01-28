import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { PiePerairanComponent } from './pie-perairan/pie-perairan.component';
import { HomeComponent } from './home/home.component';



// const appRoute: Routes = [
//   {path: '', redirectTo:'login', pathMatch: 'full'},
//   {path: 'login', component: LoginComponent},
//   {path: 'home', component: HomeComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    PiePerairanComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
