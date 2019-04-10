import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { User } from '../models/user';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private route: Router) { 
}


doRegister(valueForm : User){
  let userReg = this.retrieveData();
  if(valueForm){
    userReg.push(valueForm);
    localStorage.setItem('userReg', JSON.stringify(userReg));
    this.route.navigateByUrl('login');
    
  }
}
  

retrieveData() : Array<User>{
  const users = localStorage.getItem('userReg');
  if(users)
     return JSON.parse(users);
  return [];
}
}
