import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import { from, Observable,of} from 'rxjs';
import { Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { UserService } from './user.service';
import { mergeMap,map,catchError} from 'rxjs/operators';
import { IUser } from './user/user';

@Injectable()
export class UserEffects {



  constructor(private actions$: Actions,private userService:UserService) {}

  @Effect()
  loadUsers$:Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.userService.getUsers().pipe(
        map(users=>(new userActions.LoadUsersSuccess({data:users}))),
         catchError(err=> of(new userActions.LoadUsersFailure({error:err})))
      )
    )
  )

  @Effect()
  loadUser$:Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUser),
    mergeMap(
      action => this.userService.getUserById(action.payload).pipe(
        map(user:IUser=>(new userActions.LoadUserSuccess(user))),
         catchError(err=> of(new userActions.LoadUserFailure({error:err})))
      )
    )
  )


  @Effect()
  createUser$:Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.CreateUser),
    mergeMap(
      action => this.userService.CreateUser(user).pipe(
        map(
          newUser:IUser 
          =>(new userActions.CreateUserSuccess(newUser))),
         catchError(err=> of(new userActions.CreateUserFailure({error:err})))
      )
    )
  )


  @Effect()
  updateUser$:Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.UpdateUser),
    mergeMap(
      action => this.userService.updateUser(updateUser).pipe(
        map(updateUser:IUser=>(new userActions.UpdateUserSuccess(
          id:updateUser.id,
          changes:updateUser

        ))),
         catchError(err=> of(new userActions.UpdateUserFailure({error:err})))
      )
    )
  )

  @Effect()
  deleteUser$:Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.DeleteUser),
    mergeMap(
      action => this.userService.deleteUser(id).pipe(
        map(deleteUser:IUser=>(new userActions.DeleteUserSuccess(id))),
         catchError(err=> of(new userActions.DeleteUserFailure({error:err})))
      )
    )
  )
  

}
