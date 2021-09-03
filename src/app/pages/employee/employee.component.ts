import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees!: Employee[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void
   {
    this.employees= this.employeeService.onGet();
  }
onDelete (id:number)
{
this.employeeService.onDelete(id);
}
}
