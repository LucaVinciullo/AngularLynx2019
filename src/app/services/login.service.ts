import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }
  users : User [];
  

  doLogin(nome: string, password: string) {
  // this.retrieveData();
 //  const user = this.users.find(utenti=>{
    // return utenti.name === nome;
 //  })
  // if(user)

  sessionStorage.setItem("user", nome); //stringify
  this.router.navigateByUrl('/homepage');}
  

  doLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

 /* retrieveData(){
    this.users = !! localStorage.getItem('usersReg') ? JSON.parse(localStorage.getItem('usersReg')) : [];
    
  }*/
}

