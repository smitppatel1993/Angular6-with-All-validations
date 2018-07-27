import { Component, OnInit,Inject } from '@angular/core';
import {EmployeeServiceService} from '../service/employee-service.service';
import { Employee } from '../model/employee';
import swal from 'sweetalert2';
import {MatSnackBar} from '@angular/material';
import { Config } from '../../material';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private employee: EmployeeServiceService,private snackBar: MatSnackBar) { }
  employeeData:Employee[];
  config = new Config();
  getList(){
    this.employee.getEmployee().subscribe(res => {
      this.employeeData = res['result'];
    }, error => {
      console.log(error);
    })
  }
  ngOnInit() {
    this.getList();
  }
  delete(id){
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
       this.employee.deleteEmployee(id).subscribe(res=>{
          this.snackBar.open(res['message'], "Close", this.config.getConfig());
          this.getList();
       });
      }
    })
  }
}
