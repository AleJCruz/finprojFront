import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { User } from '../model/user';

const baseUrl = enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private url ="http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});

  constructor(private http:HttpClient) {
  }
  login( user:Object ) {
    return this.http.post(this.url+"/login", user);
  }

  register(user: User) {
    return this.http.post(`${this.url}/user/register`, user);
  }
}
