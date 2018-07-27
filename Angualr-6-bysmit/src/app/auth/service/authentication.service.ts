import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Authentication} from '../model/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }
  private header = {headers: new HttpHeaders({'Content-Type':'application/json'})};
  signIn(data){
    
    return this.http.post<Authentication>(environment.API_URL+"api/emp/signin",data,this.header).pipe(
      map(res => res)
    );
  }

}
