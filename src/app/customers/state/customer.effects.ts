import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { mergeMap,map,catchError} from 'rxjs/operators';
import { CustomersService } from '../../shared/customers.service';
import * as customerActions from '../state/customer.actions';
import { Customer } from '../customer.model';

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions,private customersService:CustomersService) {}

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.LoadCustomers>(
      customerActions.CustomerActionTypes.LoadCustomers
    ),
    mergeMap((action: customerActions.LoadCustomers) =>
      this.customersService.getCustomers().pipe(
        map(
          (Customers: Customer[]) =>
            new customerActions.LoadCustomersSuccess(Customers)
        ),
        catchError(err => of(new customerActions.LoadCustomersFailure(err)))
      )
    )
  );

  @Effect()
  loadCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.LoadCustomer>(
      customerActions.CustomerActionTypes.LoadCustomer
    ),
    mergeMap((action: customerActions.LoadCustomer) =>
      this.customersService.getCustomerById(action.payload).pipe(
        map(
          (Customer: Customer) =>
            new customerActions.LoadCustomerSuccess(Customer)
        ),
        catchError(err => of(new customerActions.LoadCustomerFailure(err)))
      )
    )
  );


  @Effect()
  createCustomer$:Observable<Action> = this.actions$.pipe(
    ofType<customerActions.CreateCustomer>(
      customerActions.CustomerActionTypes.CreateCustomer
      )
    ,
    map((action: customerActions.CreateCustomer) => action.payload),
    mergeMap((Customer:Customer)=> 
    this.customersService.createCustomer(Customer).pipe(
      map(
        (newCustomer: Customer) =>
          new customerActions.CreateCustomerSuccess(newCustomer)
      ),
         catchError(err=> of(new customerActions.CreateCustomerFailure(err)))
      )
    )
  );


  @Effect()
  updateCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.UpdateCustomer>(
      customerActions.CustomerActionTypes.UpdateCustomer
    ),
    map((action: customerActions.UpdateCustomer) => action.payload),
    mergeMap((Customer: Customer) =>
      this.customersService.updateCustomer(Customer).pipe(
        map(
          (updateCustomer: Customer) =>
            new customerActions.UpdateCustomerSuccess({
              id: updateCustomer.id,
              changes: updateCustomer
            })
        ),
        catchError(err => of(new customerActions.UpdateCustomerFailure(err)))
      )
    )
  );

  @Effect()
  deleteCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.DeleteCustomer>(
      customerActions.CustomerActionTypes.DeleteCustomer
    ),
    map((action: customerActions.DeleteCustomer) => action.payload),
    mergeMap((id: number) =>
      this.customersService.deleteCustomer(id).pipe(
        map(() => new customerActions.DeleteCustomerSuccess(id)),
        catchError(err => of(new customerActions.DeleteCustomerFailure(err)))
      )
    )
  );
  

}
