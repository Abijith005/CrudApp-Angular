export interface UserData {
    name?:string;
    email?:string;
    password?:string
}

export interface signUpRes{
    access_token?:string;
    message?:string;
  }