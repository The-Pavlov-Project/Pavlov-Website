import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    
    baseUrl = 'http://10.32.139.33:8000/'

    loginUser(email, password): Observable<any>{
        const loginData = {
          username: email,
          password: password
        }
        return this.http.post(this.baseUrl + 'auth/login/', loginData);
    }

    registerUser(email, username, password, passwordConfirmation): Observable<any>{
      const loginData = {
        email: email,
        username: username,
        password: password,
        confirm_password: passwordConfirmation
      }
      return this.http.post(this.baseUrl + 'auth/register/', loginData);
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
