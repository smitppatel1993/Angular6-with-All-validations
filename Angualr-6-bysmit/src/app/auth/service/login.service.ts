import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route: Router) { }

  public isLogin = new BehaviorSubject<boolean>(this.isLoggednIn());

  setToken(token: string) {
    localStorage.setItem("token", token);
    this.isLogin.next(true);
  }
  getToken() {
    return localStorage.getItem("token")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.clear();
    this.isLogin.next(false);
    this.route.navigate(["login"]);
  }

}
