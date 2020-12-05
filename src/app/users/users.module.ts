import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "./state/user.reducer";
import { UserEffects } from "./state/user.effects";
import { UserListComponent  } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user-add/add-user.component';
import { EditUserComponent } from './user-edit/user-edit.component'

const userRoutes: Routes = [
  {path:'',component:UserComponent}
];

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature("users", userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [UserComponent]
})
export class UsersModule { }
