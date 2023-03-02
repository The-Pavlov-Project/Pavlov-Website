import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from '@theme/miscellaneous/not-found/not-found.component';
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 's',
      component: LandingComponent,
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
export class PagesRoutingModule {
}
