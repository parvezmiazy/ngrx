import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',
  loadChildren:"../app/users/users.module#UsersModule"},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
