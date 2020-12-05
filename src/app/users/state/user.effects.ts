import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { mergeMap,map,catchError} from 'rxjs/operators';
import { UserService } from '../user.service';
import * as userActions from '../state/user.actions';
import { User } from '../user.model';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,private userService:UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUsers>(
      userActions.UserActionTypes.LoadUsers
    ),
    mergeMap((action: userActions.LoadUsers) =>
      this.userService.getUsers().pipe(
        map(
          (users: User[]) =>
            new userActions.LoadUsersSuccess(users)
        ),
        catchError(err => of(new userActions.LoadUsersFailure(err)))
      )
    )
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUser>(
      userActions.UserActionTypes.LoadUser
    ),
    mergeMap((action: userActions.LoadUser) =>
      this.userService.getUserById(action.payload).pipe(
        map(
          (user: User) =>
            new userActions.LoadUserSuccess(user)
        ),
        catchError(err => of(new userActions.LoadUserFailure(err)))
      )
    )
  );


  @Effect()
  createUser$:Observable<Action> = this.actions$.pipe(
    ofType<userActions.CreateUser>(
      userActions.UserActionTypes.CreateUser
      )
    ,
    map((action: userActions.CreateUser) => action.payload),
    mergeMap((user:User)=> 
    this.userService.createUser(user).pipe(
      map(
        (newUser: User) =>
          new userActions.CreateUserSuccess(newUser)
      ),
         catchError(err=> of(new userActions.CreateUserFailure(err)))
      )
    )
  );


  @Effect()
  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UpdateUser>(
      userActions.UserActionTypes.UpdateUser
    ),
    map((action: userActions.UpdateUser) => action.payload),
    mergeMap((user: User) =>
      this.userService.updateUser(user).pipe(
        map(
          (updateUser: User) =>
            new userActions.UpdateUserSuccess({
              id: updateUser.id,
              changes: updateUser
            })
        ),
        catchError(err => of(new userActions.UpdateUserFailure(err)))
      )
    )
  );

  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.DeleteUser>(
      userActions.UserActionTypes.DeleteUser
    ),
    map((action: userActions.DeleteUser) => action.payload),
    mergeMap((id: number) =>
      this.userService.deleteUser(id).pipe(
        map(() => new userActions.DeleteUserSuccess(id)),
        catchError(err => of(new userActions.DeleteUserFailure(err)))
      )
    )
  );
  

}
