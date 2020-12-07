import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';


const departmentRoutes: Routes = [
  {path:'',component:DepartmentComponent}
];
@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule
  ]
})
export class DepartmentsModule { }
