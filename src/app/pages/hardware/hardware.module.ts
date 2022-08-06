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

import { HardwareRoutingModule } from "./hardware-routing.module";
import { ThemeModule } from '@theme/theme.module';
import { HardwareComponent } from './hardware.component';
import { DeviceComponent } from "./device/device.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { DeviceDetailComponent } from './device/device-detail/device-detail.component';
import { DeviceAddComponent } from './device/device-add/device-add.component';


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
    HardwareRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    HardwareComponent,
    DeviceComponent,
    DeviceDetailComponent,
    DeviceAddComponent
  ],
})
export class HardwareModule { }
