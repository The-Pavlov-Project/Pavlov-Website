import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppsComponent } from './apps.component';
import { ScheduleComponent } from "./schedule/schedule.component";

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    children: [
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule {
}
