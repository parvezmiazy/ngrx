import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatSort,MatPaginator} from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CustomersService } from '../../shared/customers.service';
import { DepartmentService } from '../../shared/department.service';
import { Store,select } from '@ngrx/store';
import { Observable } from "rxjs";
import * as CustomerActions from '../state/customer.actions';
import * as fromCustomer from "../state/customer.reducer";
import { Customer } from '../customer.model'
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<String>;


  constructor( private dialog: MatDialog,private store: Store<fromCustomer.AppState>,private service: CustomersService,
     private departmentService: DepartmentService
    ) { } 


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = this.getColumn();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  searchKey: string;
  
  ngOnInit() {

    this.store.dispatch(new CustomerActions.LoadCustomers());
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
    this.error$ = this.store.pipe(select(fromCustomer.getError));

    this.service.getCustomers().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.paginator = this.paginator;
      this.listData.sort = this.sort;
    });

   
  
  }

  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    let dialogRef = this.dialog.open(CustomerAddComponent, dialogConfig);

  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  getColumn() {
    
      var columHeadings = ['fullName', 'email', 'mobile', 'city','actions'];
 
    return columHeadings
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  deleteCustomer(customer:Customer) {
    if (confirm("Are You Sure You want to Delete the Customer?")) {
      this.store.dispatch(new CustomerActions.DeleteCustomer(customer.id));

    }
  }

  editCustomer(customer:Customer) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    let dialogRef = this.dialog.open(CustomerEditComponent, dialogConfig);
    this.store.dispatch(new CustomerActions.LoadCustomer(customer.id));
  }

}
