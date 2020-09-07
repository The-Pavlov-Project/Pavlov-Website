import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

/*
The base url for the api calls
change this to develop the site
do not do test on creation form in the production endpoint
*/
// export const apiBaseUrl = 'https://api.thepavlovproject.com/'
export const apiBaseUrl = 'http://10.32.139.33:8000/'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserData(username): Observable<any>{
      return this.http.get(apiBaseUrl + 'user/' + username + '/');
  }

  getUserGameData(): Observable<any>{
    return this.http.get(apiBaseUrl + 'g/1/');
  }
}

export class UserGameData{
  id: number;
  game_pass_join_at: string;
  xp: number;
  level: number;
  bits: number;
  bits_last_farm: string;
  bits_spent: number;
  bits_earned: number;
  bits_given_away: number;
  user: number;
  game_pass_id: number;
}

export class UserData{
  email: string;
  username: string;
  bio: string;
  gender: string;
  age: number;
  country: number;
  vip_code: number;
}
  

  


