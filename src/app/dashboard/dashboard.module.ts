import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeModule } from './home/home.module';
import { AppsModule } from './apps/apps.module'
import { MiscellaneousModule } from '@theme/miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ThemeModule,
    NbMenuModule,
    HomeModule,
    AppsModule,
    MiscellaneousModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
