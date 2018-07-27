import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Employee} from '../model/employee';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class EmployeeServiceService {

  constructor(private http : HttpClient) {}
  // saveEvent(newEvent){
  //   let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  //   return this.http.post<Event>(environment.apiBaseUrl+"events",newEvent,options);

  // }
  private header = {headers: new HttpHeaders({'Content-Type':'application/json'})};
  addEmployee(data){
    
    return this.http.post<Employee>(environment.API_URL+"api/emp/add",data,this.header).pipe(
      map(res => res)
    );
  }

  deleteEmployee(id){
    
    return this.http.post<Employee>(environment.API_URL+"api/emp/delete",{id:id}).pipe(
      map(res => res)
    );
  }

  getEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(environment.API_URL + 'api/emp/list');
  }

  getEmpById(id: string): Observable<Employee> {
    return this.http.get<Employee>(environment.API_URL + 'api/emp/detail?id=' + id).pipe(
      map(res => res)
    );
  }
  updateEmpById(id: string,data): Observable<Employee> {
    return this.http.put<Employee>(environment.API_URL + 'api/emp/update?id=' + id,data,this.header).pipe(
      map(res => res)
    );
  }
}