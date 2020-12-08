import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CustomersService } from '../../shared/customers.service';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  constructor(private service:CustomersService,public dialogRef: MatDialogRef<CustomerEditComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
}
