import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule, NbInputModule,
} from '@nebular/theme';

import { AppsRoutingModule } from "./apps-routing.module";
import { ThemeModule } from '@theme/theme.module';
import { AppsComponent } from './apps.component';
import { ScheduleComponent } from "./schedule/schedule.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { ScheduleDetailComponent } from './schedule/schedule-detail/schedule-detail.component';
import { ScheduleAddComponent } from './schedule/schedule-add/schedule-add.component';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    AppsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AppsComponent,
    ScheduleComponent,
    ScheduleDetailComponent,
    ScheduleAddComponent
  ],
})
export class AppsModule { }
