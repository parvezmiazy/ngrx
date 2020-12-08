import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CustomersService } from '../../shared/customers.service';
import { Store, State, select } from "@ngrx/store";
import * as customerActions from "../state/customer.actions";
import * as fromCustomer from "../state/customer.reducer";
import { Customer } from "../customer.model";
import { DepartmentService } from '../../shared/department.service';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private service:CustomersService,
    private store: Store<fromCustomer.AppState>,
    public dialogRef: MatDialogRef<CustomerAddComponent>) { }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  ngOnInit(): void {
    this.service.getCustomers();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onClose(){
    this.dialogRef.close();
  }

  createCustomer() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }



}
