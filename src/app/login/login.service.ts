import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: { username: any; password: any; verify: any }) {
    const url = '/api/login';
    return this.http.post(url, {
      username: data.username,
      password: data.password,
      verify: data.verify,
      responseType: 'text'
    });
  }
  // tslint:disable-next-line:ban-types
  getVerifyCode() {
    const url = '/api/verify';
    return this.http.get(url, { responseType: 'text' }); // withCredentials: true
  }
}
