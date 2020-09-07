import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from '../api/api.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(email, password): Observable<any>{
      const loginData = {
        username: email,
        password: password
      }
      return this.http.post(apiBaseUrl + 'auth/login/', loginData);
  }

  registerUser(email, username, password, passwordConfirmation): Observable<any>{
    const loginData = {
      email: email,
      username: username,
      password: password,
      confirm_password: passwordConfirmation
    }
    return this.http.post(apiBaseUrl + 'auth/register/', loginData);
  }

  setSession(authResult) {
    localStorage.setItem('token', authResult.idToken);
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    let token = localStorage.getItem("expires_at")
    if(token != null) {
      return true
    }
    return false
  }

}
