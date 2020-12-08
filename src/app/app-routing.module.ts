import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',loadChildren:"../app/users/users.module#UsersModule"},
  {path:'customers',loadChildren:"../app/customers/customers.module#CustomersModule"},
  {path:'departments',loadChildren:"../app/departments/departments.module#DepartmentsModule"},
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
