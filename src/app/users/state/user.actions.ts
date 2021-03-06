import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { User } from '../user.model';
export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',
  LoadUserFailure = '[User] Load User Failure',
  CreateUser = '[User] Create User',
  CreateUserSuccess = '[User] Create User Success',
  CreateUserFailure = '[User] Create User Failure',
  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFailure = '[User] Update User Failure',
  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFailure = '[User] Delete User Failure',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: User[] ) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: string) { }
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;
  constructor(public payload: number) { }
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;
  constructor(public payload: User) { }
}

export class LoadUserFailure implements Action {
  readonly type = UserActionTypes.LoadUserFailure;
  constructor(public payload: string ) { }
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;
  constructor(public payload: User) { }
}


export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;
  constructor(public payload: User) { }
}

export class CreateUserFailure implements Action {
  readonly type = UserActionTypes.CreateUserFailure;
  constructor(public payload:string ) { }
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: User) { }
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;
  constructor(public payload: Update<User>) { }
}

export class UpdateUserFailure implements Action {
  readonly type = UserActionTypes.UpdateUserFailure;
  constructor(public payload: string ) { }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;
  constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserSuccess;
  constructor(public payload: number) { }
}

export class DeleteUserFailure implements Action {
  readonly type = UserActionTypes.DeleteUserFailure;
  constructor(public payload: string ) { }
}

export type Actions = 
 LoadUsers |
 LoadUsersSuccess | 
 LoadUsersFailure |
 LoadUser |
 LoadUserSuccess |
 LoadUserFailure |
 CreateUser |
 CreateUserSuccess|
 CreateUserFailure|
 UpdateUser |
 UpdateUserSuccess|
 UpdateUserFailure|
 DeleteUser| 
 DeleteUserSuccess|
 DeleteUserFailure;
