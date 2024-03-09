import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {MainpageComponent} from "./component/mainpage/mainpage.component";

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'main', component:MainpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
