import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor(private router: Router, private userService : RegisterService, private fb: FormBuilder) { }

  createForm(){
    this.register = this.fb.group({
      name:[null, Validators.required],
      surname:[null, Validators.required],
      password:[null, Validators.required],
      email:[null, Validators.required],
      phone:[null, Validators.required]

    });
  }

  ngOnInit() {
    this.createForm();
  }

  doReg(){
    if (this.register.valid){
      this.userService.doRegister(this.register.value);
    }
  }
   
  goBack(){
    this.router.navigateByUrl('/login');
  }
}
