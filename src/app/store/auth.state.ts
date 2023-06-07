import { UserData, adminResp, userData } from '../interface/user-data';

export interface AuthState {
  userDetails: UserData | null;
  users:adminResp|null
  error: string | null;
  editUserDetails:userData|null,
  editProfile:boolean|null
}


export interface AppState {
  auth: AuthState;
}

