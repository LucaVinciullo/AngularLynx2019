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
users : User [];
  doRegister(userValue){
    if(userValue){
      this.users.push(userValue);
   localStorage.setItem('usersReg' , JSON.stringify(this.users));
   this.route.navigateByUrl('login');
    }
  
  }
}

