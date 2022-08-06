import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NbAuthService} from "@nebular/auth";


@Injectable()
export class AuthAppInterceptor implements HttpInterceptor {

  constructor(private authService: NbAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getToken();
    if (this.authService.isAuthenticated() && token) {
      request = request.clone({setHeaders: {Authorization: `Token ${token}`}});
    }
    return next.handle(request);
  }
}
