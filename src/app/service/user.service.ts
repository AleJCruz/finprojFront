import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
const baseUrl = enviroment.base;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${baseUrl}`;
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});
  private listaCambio = new Subject<User[]>();
//CAMBIO NAV
  public isEnterSubject = new BehaviorSubject<boolean>(false);
  public isEnter$ = this.isEnterSubject.asObservable();

  public univSubject = new BehaviorSubject<boolean>(false);
  public univ$ = this.univSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAll() { //como poner esto en backend
    return this.http.get(this.url+"/users");
  }

  getById(id: number) {
    return this.http.get<User>(this.url + '/usercodigo/' + id);
  }

  list():Observable<any>{
    console.log(this.url+"/users");


    return this.http.get<User[]> (this.url+"/users");
  }

  insert(user:User){
    return this.http.post(this.url+"/usercrear",user);
  }
  setList(listaNueva: User[]){
    this.listaCambio.next(listaNueva);
  }
  getlist(){
    this.listaCambio.asObservable();
  }



}
