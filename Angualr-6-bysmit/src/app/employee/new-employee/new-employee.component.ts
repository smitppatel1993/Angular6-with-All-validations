import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeServiceService} from '../service/employee-service.service';
import {MatSnackBar} from '@angular/material';
import { Router,ActivatedRoute} from '@angular/router';
import { Config } from '../../material';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private addEmployeeService: EmployeeServiceService,private snackBar: MatSnackBar, private route:Router, private activeRoute: ActivatedRoute) { }
  depts = ['Angular', 'Node', 'Net'];
  employeeModel = new Employee();
  config = new Config();
  private isUpdate = false;
  title = "Add New Employee";
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 23.0225;
  lng: number = 72.5714;
  // above one is for where to show map and belove is for marked point
  lats: number = 23.0225;
  lngs: number = 72.5714;

  mapClicked($event: MouseEvent) {
    this.updateCoord($event);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    this.updateCoord($event);
  }

  updateCoord = (event) =>{
    this.lats = event.coords.lat;
    this.lngs = event.coords.lng;
    this.employeeModel.let = this.lats;
    this.employeeModel.lng = this.lngs;
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      if(params && params.id){
        this.isUpdate = true;
        this.addEmployeeService.getEmpById(params.id).subscribe(data => {
          this.employeeModel = data['result'];
          this.lats = this.employeeModel.let ;
          this.lngs = this.employeeModel.lng;
          this.title = "Update Employee";
        }, err =>{
          console.log(err);
        })
      } else {
        this.isUpdate = false;
        this.employeeModel.timePreferance ='evening';
        this.title = "Add New Employee";
      }
    })
  }

  addNewEmployee() {
    

    this.addEmployeeService.addEmployee(this.employeeModel).subscribe(result=>{
      this.snackBar.open('Employee added successfully.', "Close",this.config.getConfig());
      this.route.navigate(['/employee/list']);
    }, error => {
      this.snackBar.open(error.error.message, "Close", this.config.getConfig());
    })

  }
  updateEmployee(){
    this.addEmployeeService.updateEmpById(this.employeeModel._id,this.employeeModel).subscribe(result=>{
      this.snackBar.open('Employee updated successfully.', "Close", this.config.getConfig());
      this.route.navigate(['/employee/list']);
    }, error => {
      this.snackBar.open(error.error.message, "Close", this.config.getConfig());
    })
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
interface marker {
	lats: number;
	lngs: number;
	label?: string;
	draggable: boolean;
}
