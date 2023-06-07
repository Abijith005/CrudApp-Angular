import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserData, adminDetails, adminResp, signUpRes, userData } from './interface/user-data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient,
    private cookie: CookieService
  ) { }

  signUp(userDetails: UserData) {
    return this.http.post<signUpRes>(`${this.baseUrl}/signUp`, userDetails)

  }

  login(userDetails: UserData) {    
    return this.http.post<signUpRes>(`${this.baseUrl}/login`, userDetails)
  }


  editProfile(userDetails: FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}/editProfile`, userDetails)
  }

  adminLogin(adminDetails: adminDetails) {
    return this.http.post<adminResp>(`${this.baseUrl}/admin/adminLogin`, adminDetails)

  }

  getUsers(input: string | null) {
    return this.http.get<adminResp>(`${this.baseUrl}/admin/getUsers/${input}`,)
  }

  getAllUsers() {
    return this.http.get<adminResp>(`${this.baseUrl}/admin/getAllUsers`)
  }

  deleteUser(user_id:string){
    return this.http.delete<adminResp>(`${this.baseUrl}/admin/deleteUser/${user_id}`)
  }

  createUser(userDetails:userData){
    return this.http.post<adminResp>(`${this.baseUrl}/admin/createUser`,userDetails)
  }

  getUserDetails(user_id:string){
    return this.http.get<userData>(`${this.baseUrl}/admin/getUserDetails/${user_id}`)
  }

  editUser(form:userData){
    return this.http.put<adminResp>(`${this.baseUrl}/admin/editUser`,form)
  }

  getuserDetails(_id:string){
    return this.http.get<UserData>(`${this.baseUrl}/getuserRefresh/${_id}`)
  }




}

