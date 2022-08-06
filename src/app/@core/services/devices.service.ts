import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { DevicesData, Device } from '../data/devices';

@Injectable()
export class DevicesService extends DevicesData {

  private devicesData: Device[] = [{
      id: 1,
      name: 'Siemens 1',
      firmware_version: 'Otto',
    }, {
      id: 2,
      name: 'Raspberry Pi',
      firmware_version: 'Nove',
    }
  ];

  getDevices(): Observable<Device[]> {
    return observableOf(this.devicesData);
  }
}
