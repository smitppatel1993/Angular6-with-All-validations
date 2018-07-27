import { Component, OnInit } from '@angular/core';
import {Authentication} from '../model/authentication';
import {MatSnackBar} from '@angular/material';
import { Router,ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {LoginService} from '../service/login.service';
import {Config} from '../../material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthenticationService,private snackBar: MatSnackBar,private route:Router, private activeRoute: ActivatedRoute , private loginService :LoginService) { }
  authModel = new Authentication();
  config = new Config();
  ngOnInit() {
  }
  login(){
    this.authService.signIn(this.authModel).subscribe(res=>{
      this.loginService.setToken(res['result'].token);
      // May you can't provide config for duafult bottam center position.

      this.snackBar.open('Login successfully', "Close",this.config.getConfig());
      this.route.navigate(['/employee/list']);
    }, error => {
      console.log(error);
      // this.snackBar.open(error.error.message, "Close", {
      //   duration: 4000,
      // });
    })

  }
}
