

import { createAction, props } from '@ngrx/store';
import { UserData, adminResp, userData } from '../interface/user-data';

export const login = createAction('[Auth] Login', props<{ userDetails: UserData }>());
export const signIn=createAction('[Auth] SignIn',props<{userDetails:UserData}>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ userDetails: UserData }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
export const adminLogin=createAction('[Auth] Admin Login',props<{users:adminResp}>());
export const geteditUser=createAction('[Auth] Edit User',props<{editUserDetails:userData}>() )
export const editUserProfile=createAction('[Auth] edit user profile',props<{editProfile:boolean}>())
