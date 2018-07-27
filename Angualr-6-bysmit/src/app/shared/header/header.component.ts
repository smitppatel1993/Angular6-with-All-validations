import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../auth/service/login.service'; 
import {observable}  from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoging : boolean;

  constructor(private loginService : LoginService) {
    
   }
  ngOnInit() {
    this.loginService.isLogin.subscribe(data =>{
      this.isLoging = data;
      });
  }

  logout(){

    this.loginService.logout();
    
  }
  
}
