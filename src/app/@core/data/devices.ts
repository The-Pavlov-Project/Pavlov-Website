import {Observable} from "rxjs";

export interface Device {
  id: number;
  name: string;
  firmware_version: string;
}


export abstract class DevicesData {
  abstract getDevices(): Observable<Device[]>;
}
