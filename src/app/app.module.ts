import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HeaderComponent} from './header/header.component';
import {SubHeaderComponent} from './subheader/subheader.component';
import { SidemenuComponent } from './sidemenu.component/sidemenu.component';
import {HomeComponent} from './home/home.component';

import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { DeviceHighcpaComponent } from './device-highcpa/device-highcpa.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'devices', component: DeviceHighcpaComponent},
  {path: 'DevicesNoConversions', component: HeaderComponent},
  {path: 'keyboardsNoConversions', component: HeaderComponent},
  {path: 'KeyboardsHCPa', component: HeaderComponent},
  {path: 'LocationsNoConversions', component: HeaderComponent},
  {path: 'LocationsHCPa', component: HeaderComponent},
  {path: 'SearchPartnersNoConversions', component: HeaderComponent},
  {path: 'SearchPartnersHCPa', component: HeaderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    SidemenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
