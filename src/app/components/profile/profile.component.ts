import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;

  getUser(){
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {
    this.getUser();
  }

}
