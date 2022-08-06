import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HardwareComponent } from './hardware.component';
import { DeviceComponent } from "./device/device.component";

const routes: Routes = [
  {
    path: '',
    component: HardwareComponent,
    children: [
      {
        path: 'device',
        component: DeviceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwareRoutingModule {
}
