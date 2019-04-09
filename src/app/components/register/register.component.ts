import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService : RegisterService) { }

  ngOnInit() {
  }
/*   doReg(){
     this.userService.doRegister(nomeform.value);
   }*/
  goBack(){
    this.router.navigateByUrl('/login');
  }
}
