import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  getVerifyCode() {
    const url = 'http://127.0.0.1:7001/api/verify';
    return this.http.get(url, { responseType: 'text'});
  }
}
