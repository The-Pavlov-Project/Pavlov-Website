import { Observable } from 'rxjs';

export interface OrganizationModel {
  owner: number;
  pro: boolean;
  name: string;
}

export abstract class OrganizationData {
  abstract getOrganization(id: number): Observable<OrganizationModel[]>;
}
