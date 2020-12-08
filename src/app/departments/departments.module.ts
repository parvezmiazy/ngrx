import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';


const departmentRoutes: Routes = [
  {path:'',component:DepartmentComponent}
];
@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(departmentRoutes),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [DepartmentListComponent]
})
export class DepartmentsModule { }
