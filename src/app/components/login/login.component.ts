import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private router: Router, private login: LoginService, private fb: FormBuilder) {
   
   }

   createForm(){
     this.formGroup = this.fb.group({
       name:['', Validators.required],
       password:['', Validators.required],
     });
   }

  doLogin(){
    this.login.doLogin(this.formGroup.get('name').value, this.formGroup.get('password').value);
  }

  goToRegister(){
    this.router.navigateByUrl('/register');
  }

  ngOnInit() {
    this.createForm();
  }

}
