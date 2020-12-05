import * as userActions from "./user.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { User } from "../user.model";
import * as fromRoot from "../../state/app-state";

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  users: UserState;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<
User
>();

export const defaultUser: UserState = {
  ids: [],
  entities: {},
  selectedUserId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = userAdapter.getInitialState(defaultUser);

export function userReducer(
  state = initialState,
  action: userActions.Action
): UserState {
  switch (action.type) {
    case userActions.UserActionTypes.LoadUsersSuccess: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case userActions.UserActionTypes.LoadUsersFailure: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case userActions.UserActionTypes.LoadUserSuccess: {
      return userAdapter.addOne(action.payload, {
        ...state,
        selectedUserId: action.payload.id
      });
    }
    case userActions.UserActionTypes.LoadUserFailure: {
      return {
        ...state,
        error: action.payload
      };
    }

    case userActions.UserActionTypes.CreateUserSuccess: {
      return userAdapter.addOne(action.payload, state);
    }
    case userActions.UserActionTypes.CreateUserFailure: {
      return {
        ...state,
        error: action.payload
      };
    }

    case userActions.UserActionTypes.UpdateUserSuccess: {
      return userAdapter.updateOne(action.payload, state);
    }
    case userActions.UserActionTypes.UpdateUserFailure: {
      return {
        ...state,
        error: action.payload
      };
    }

    case userActions.UserActionTypes.DeleteUserSuccess: {
      return userAdapter.removeOne(action.payload, state);
    }
    case userActions.UserActionTypes.DeleteUserFailure: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getUserFeatureState = createFeatureSelector<UserState>(
  "users"
);

export const getUsers = createSelector(
  getUserFeatureState,
  userAdapter.getSelectors().selectAll
);

export const getUsersLoading = createSelector(
  getUserFeatureState,
  (state: UserState) => state.loading
);

export const getUsersLoaded = createSelector(
  getUserFeatureState,
  (state: UserState) => state.loaded
);

export const getError = createSelector(
  getUserFeatureState,
  (state: UserState) => state.error
);

export const getCurrentUserId = createSelector(
  getUserFeatureState,
  (state: UserState) => state.selectedUserId
);
export const getCurrentUser = createSelector(
  getUserFeatureState,
  getCurrentUserId,
  state => state.entities[state.selectedUserId]
);