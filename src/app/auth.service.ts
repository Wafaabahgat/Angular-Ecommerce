import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  private url = 'https://estore.ammarelgendy.online/api/v1/';

  register(userData: object): Observable<any> {
    return this._HttpClient.post(this.url + 'register', userData);
  }
  
  login(userData: object): Observable<any> {
    return this._HttpClient.post(this.url + 'login', userData);
  }
}

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
//
// @Injectable({
// providedIn: 'root',
// })
// export class AuthService {
// Add your authentication token or credentials here
// private authToken: string = 'your_authentication_token';
//
// constructor(private _HttpClient: HttpClient) {}
// private url = 'https://estore.ammarelgendy.online/api/v1/';
//
// register(userData: object): Observable<any> {
// Include the authorization header with the token
//
// const httpOptions = {
// headers: new HttpHeaders({
// 'Content-Type': 'application/json',
// Authorization: `Bearer ${this.authToken}`,
// }),
// };
//
// return this._HttpClient.post(this.url + 'register', userData, httpOptions);
// }
// }
//'https://route-ecommerce.onrender.com/api/v1/auth/signup',
//
