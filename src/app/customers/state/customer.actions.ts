import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Customer } from '../customer.model';
export enum CustomerActionTypes {
  LoadCustomers = '[Customer] Load Customers',
  LoadCustomersSuccess = '[Customer] Load Customers Success',
  LoadCustomersFailure = '[Customer] Load Customers Failure',
  LoadCustomer = '[Customer] Load Customer',
  LoadCustomerSuccess = '[Customer] Load Customer Success',
  LoadCustomerFailure = '[Customer] Load Customer Failure',
  CreateCustomer = '[Customer] Create Customer',
  CreateCustomerSuccess = '[Customer] Create Customer Success',
  CreateCustomerFailure = '[Customer] Create Customer Failure',
  UpdateCustomer = '[Customer] Update Customer',
  UpdateCustomerSuccess = '[Customer] Update Customer Success',
  UpdateCustomerFailure = '[Customer] Update Customer Failure',
  DeleteCustomer = '[Customer] Delete Customer',
  DeleteCustomerSuccess = '[Customer] Delete Customer Success',
  DeleteCustomerFailure = '[Customer] Delete Customer Failure',
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadCustomers;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomersSuccess;
  constructor(public payload: Customer[] ) { }
}

export class LoadCustomersFailure implements Action {
  readonly type = CustomerActionTypes.LoadCustomersFailure;
  constructor(public payload: string) { }
}

export class LoadCustomer implements Action {
  readonly type = CustomerActionTypes.LoadCustomer;
  constructor(public payload: number) { }
}

export class LoadCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomerSuccess;
  constructor(public payload: Customer) { }
}

export class LoadCustomerFailure implements Action {
  readonly type = CustomerActionTypes.LoadCustomerFailure;
  constructor(public payload: string ) { }
}

export class CreateCustomer implements Action {
  readonly type = CustomerActionTypes.CreateCustomer;
  constructor(public payload: Customer) { }
}


export class CreateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.CreateCustomerSuccess;
  constructor(public payload: Customer) { }
}

export class CreateCustomerFailure implements Action {
  readonly type = CustomerActionTypes.CreateCustomerFailure;
  constructor(public payload:string ) { }
}

export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UpdateCustomer;
  constructor(public payload: Customer) { }
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UpdateCustomerSuccess;
  constructor(public payload: Update<Customer>) { }
}

export class UpdateCustomerFailure implements Action {
  readonly type = CustomerActionTypes.UpdateCustomerFailure;
  constructor(public payload: string ) { }
}

export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DeleteCustomer;
  constructor(public payload: number) { }
}

export class DeleteCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerSuccess;
  constructor(public payload: number) { }
}

export class DeleteCustomerFailure implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerFailure;
  constructor(public payload: string ) { }
}

export type Actions = 
 LoadCustomers |
 LoadCustomersSuccess | 
 LoadCustomersFailure |
 LoadCustomer |
 LoadCustomerSuccess |
 LoadCustomerFailure |
 CreateCustomer |
 CreateCustomerSuccess|
 CreateCustomerFailure|
 UpdateCustomer |
 UpdateCustomerSuccess|
 UpdateCustomerFailure|
 DeleteCustomer| 
 DeleteCustomerSuccess|
 DeleteCustomerFailure;
