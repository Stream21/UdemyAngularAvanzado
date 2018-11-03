import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ObservablesComponent } from './observables/observables.component';

const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent,
      children: [
          {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
          {path: 'progress', component: ProgressComponent , data: {titulo: 'Barra de progreso'}},
          {path: 'grafica1', component: Graficas1Component, data: {titulo: 'Gráficas'}},
          {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
          {path: 'observables', component: ObservablesComponent, data: {titulo: 'Observadores'}},
          {path: 'account-settings', component: AccoutSettingsComponent, data: {titulo: 'Ajustes de configuración'}},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
