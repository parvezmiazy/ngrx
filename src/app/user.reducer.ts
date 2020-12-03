import { Action } from '@ngrx/store';
import { from } from 'rxjs';
import { UserActions,UserActionTypes} from './user.actions';

import { IUser } from './user/user';
export const userFeatureKey = 'usersState';

export interface State {

   users:IUser[],
   error:string
}

export const initialState: State = {

  users:[
    {
      "name":"abc",
      "gender":"Male",
      "company":"simec systems",
      "email":"simec@gmail.com",
      "age":26,
      "status":1
    }
  ],
  error:''

};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
    return {
      ...state
    }

    case UserActionTypes.LoadUsersSuccess:
    return {
      ...state,
      users:action.payload.data,
      error:''
    }

    case UserActionTypes.LoadUsersFailure:
    return {
      ...state,
      users:[],
      error:action.payload.error,
    }
    
    default:
      return state;
  }
}
