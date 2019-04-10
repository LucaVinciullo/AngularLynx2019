import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authentication : boolean = false;
  private loginService = new Subject<string>();
  loginService$ = this.loginService.asObservable();
  
  loginEvent() {
    this.loginService.next();
  }

  getAuthentication(): boolean {
    return this.authentication;
  }

  Authenticate(username: string, password: string): void {
    (!username || username != '') ? localStorage.getItem(username) : this.authentication= false;
  }

  authenticationTrue(username: string): void {
    this.authentication= true;
    sessionStorage.setItem('username', username);
  }
  constructor() {   
    // user base set  up
    localStorage.setItem('username', 'password');
    localStorage.setItem('Borgogno', 'Borgogno');
    localStorage.setItem('El Bassri', 'El Bassri');
  }
}
