import { Injectable } from '@angular/core';
//import { getMaxListeners } from 'process';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{
 // onUpdate(employee: Employee) {
   // throw new Error('Method not implemented.');
  //}
  //onGetEmployee(id: any): Employee {
    //throw new Error('Method not implemented.');
  //}
  //onDelete(id: number) {
    //throw new Error('Method not implemented.');
  //}
  employees: Employee[]=[
  {
    id: 1,
    name: "Vidya",
    email: "vidya@gmail.com",
    phone : 1234567890

  },
  {
    id: 2,
    name: "tyui",
    email: "vidya@gmail.com",
    phone : 1234567890

  }
] ;
  constructor() { }
  onGet()
  {
    return this.employees;
  }
  onGetEmployee(id:number)
  {
    return this.employees.find(x=>x.id === id);

  }
  onAdd(employee:Employee)
  {
this.employees.push(employee);
  }
onDelete(id : number)
{
let employee = this.employees.find(x=>x.id === id);
let index = this.employees.indexOf(employee!,0);
this.employees.splice(index,1);
}
onUpdate(employee: Employee)
 {
   let oldEmployee = this.employees.find(x=>x.id === employee.id);
   oldEmployee !.name = employee.name;
   oldEmployee !.email = employee.email;
   oldEmployee!.phone = employee.phone;
}  
}
