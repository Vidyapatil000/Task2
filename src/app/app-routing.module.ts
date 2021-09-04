import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/employee/edit/edit.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  {
    path :"/",
    component:EmployeeComponent
  },
  {
    path:"employee/add/:id",
    component: EditComponent
  },
  {
    path:"employee/edit/:id",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
