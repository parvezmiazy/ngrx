import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { customerReducer } from "./state/customer.reducer";
import { CustomerEffects } from "./state/customer.effects";
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

const customerRoutes: Routes = [
  {path:'',component:CustomerListComponent}
];

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature("customers", customerReducer),
    EffectsModule.forFeature([CustomerEffects])
  ],
  entryComponents: [
    CustomerAddComponent,
    CustomerEditComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [CustomerListComponent]
})
export class CustomersModule { }
