import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    
    baseUrl = 'http://10.32.139.33:8000/'

    loginUser(userData): Observable<any>{
        return this.http.post(this.baseUrl + 'auth/login/', userData);
    }

    registerUser(userData): Observable<any>{
      return this.http.post(this.baseUrl + 'auth/register/', userData);
    }

    private setSession(authResult) {
      localStorage.setItem('token', authResult.idToken);
    }

    logout() {
      localStorage.removeItem("token");
    }

    public isLoggedIn() {
      let token = localStorage.getItem("expires_at")
      if(token != null) {
        return true
      }
      return false
    }

}
