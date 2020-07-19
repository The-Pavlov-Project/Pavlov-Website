import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    
    baseUrl = 'http://10.32.139.33:8000/'
    httpHeaders = new HttpHeaders({'content-type': 'application/json'})

    getUserGameData(): Observable<any>{
        return this.http.get(
            this.baseUrl + 'g/1/',
            {headers: this.httpHeaders}
        );
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