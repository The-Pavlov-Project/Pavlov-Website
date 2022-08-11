import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '@theme/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'apps',
      loadChildren: () => import('./apps/apps.module')
        .then(m => m.AppsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('@theme/miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
