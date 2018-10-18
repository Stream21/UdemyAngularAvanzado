import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app-routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrubsComponent } from './shared/breadcrubs/breadcrubs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    PagesComponent,
    SharedComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrubsComponent,
    DashboardComponent,
    ProgressComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
