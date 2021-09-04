import { Component, OnInit } from '@angular/core';
//import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
//export class EmployeeComponent implements OnInit {
  //employees!: Employee[];
  //constructor(private employeeService : EmployeeService) { }
  //ngOnInit(): void
   //{
    //this.employees= this.employeeService.onGet();}
//onDelete (id:number){
//this.employeeService.onDelete(id);
//}
//}
export class EmployeeComponent 
{
  employeeService: any;  
  ngOnInit(): void
   {
    this.employees= this.employeeService.onGet();}
onDelete (id:number){
this.employeeService.onDelete(id);
}
   employees: employee[] =[  
        {id:1,name:'Bye',email:'son Bateman',phone:'M6'},  
        {id:2,name:'yder',email:'ams',phone:'March 25, 2016'},  
    ]  
}   
class employee {  
    id!: number;  
    name!: string;  
    email!: string;  
    phone!: string;  
}  