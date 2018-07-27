import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../app/auth/service/login.service';
import { Observable } from 'rxjs';
import {tap} from  'rxjs/operators';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private loginService : LoginService,private route:Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    let tokenizedReq = this.loginService.getToken() ? request.clone({
      setHeaders: {
        token: this.loginService.getToken()
      }
    }) : request.clone({})
    return next.handle(tokenizedReq).pipe(tap((event: HttpEvent<any>) => {
      // if (event instanceof HttpResponse) {
      //   // do stuff with response if you want
      // }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          this.loginService.logout();
        } else if (err.status === 404 || err.status === 500){
          this.route.navigate(['/404']);
        }
      }
    })
  )
  }
}
