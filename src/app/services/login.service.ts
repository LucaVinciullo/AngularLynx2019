import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  doLogin(nome: string, password: string) {
  
  sessionStorage.setItem("user", nome);
  this.router.navigateByUrl('/homepage');
  }

  doLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}

