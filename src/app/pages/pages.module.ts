import { NgModule } from '@angular/core';

import { ThemeModule } from '@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    PagesComponent,
    LandingComponent,
  ],
})
export class PagesModule {
}
