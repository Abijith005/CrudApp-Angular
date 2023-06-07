import { createReducer, on } from '@ngrx/store';
import { AuthState } from './auth.state';
import * as AuthActions from './user.actions';
import { Statement } from '@angular/compiler';

const initialState: AuthState = {
  userDetails: null,
  users: null,
  error: null,
  editUserDetails: null,
  editProfile: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    userDetails: null,
    error,
  })),

  on(AuthActions.login, (state, { userDetails }) => ({
    ...state,
    userDetails,
    error: null

  })),
  on(AuthActions.signIn, (state, { userDetails }) => ({
    ...state,
    userDetails,
    error: null
  })),
  on(AuthActions.adminLogin, (state, { users }) => ({
    ...state,
    users,
    error: null
  })),
  on(AuthActions.geteditUser, (state, { editUserDetails }) => ({
    ...state,
    editUserDetails,
    error: null
  })),
  on(AuthActions.editUserProfile, (state, { editProfile }) => ({
    ...state,
    editProfile,
    error:null

  }))

);

