import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {SecurityService} from "../../service/security-service.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: string;
  username: string;
  userlastname: string;
  userdni: string;
  constructor(private router: Router, private securityService:SecurityService) {}

  public register(){
    var user: User = new User();
    user.id=0;
    user.email = this.email;
    user.password = this.password;
    user.name = this.username;
    user.lastname = this.userlastname;
    user.dni= this.userdni;
    this.securityService.register( user)

      .subscribe((response: any) => {
        /*  if (response.typeUser === 'CAMBIO') {
            console.log("AAAAA!!");
            this.router.navigate(['/teachers']);
          } else {
            this.router.navigate(['/colegios']);
          }
        */
        localStorage.setItem('UserLogged', JSON.stringify(response));
        console.log(response);
        this.router.navigate(['/login']);
      }, (error: HttpErrorResponse) => {
        console.log("No se pudo registrar");
      });
  }

}
