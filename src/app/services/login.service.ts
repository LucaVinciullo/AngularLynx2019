import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router , private userService : RegisterService) { }
  users : User [];
  

  doLogin(nome: string, password: string) {
    this.users = this.userService.retrieveData();
  const user = this.users.find(utenti=>{
   return utenti.name === nome;
   })
  if(user)

  sessionStorage.setItem("user", JSON.stringify(user)); //stringify
  this.router.navigateByUrl('/homepage');}
  

  doLogout(){
    sessionStorage.clear();

    
    this.router.navigateByUrl('/login');
  }

}

