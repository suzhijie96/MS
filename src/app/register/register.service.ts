import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register( data: { username: any; password: any; verify: any; } ) {
    console.log(data.username);
    return this.http.post('http://127.0.0.1:7001/api/register',
      {
        username: data.username,
        password: data.password,
        verify: data.verify
    });
  }
}
